import Cliente from '../core/Cliente'
import { IconeEditar, IconeDelete } from './icones'

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}
const Tabela = (props: TabelaProps) => {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
  function renderizarCabecalho() {
    return (
      <thead
        className={`bg-gradient-to-r from-purple-800 to-purple-500 w-full text-gray-100 font-sans`}
      >
        <tr>
          <th className={`text-left p-4`}>Codigo</th>
          <th className={`text-left p-4`}>Nome</th>
          <th className={`text-left p-4`}>Idade</th>
          {exibirAcoes && <th className={`text-center p-4 justify-center content-center`}>Açoes</th>}
        </tr>
      </thead>
    )
  }

  function renderizarClientes() {
    return props.clientes?.map((cliente, index) => {
      return (
        <tbody key={index}>
          <tr
            className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-300'}`}
          >
            <td className={`text-left p-4`}>{cliente.id}</td>
            <td className={`text-left p-4`}>{cliente.nome}</td>
            <td className={`text-left p-4`}>{cliente.idade}</td>
            {exibirAcoes && renderizarAcoes(cliente)}
          </tr>
        </tbody>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className='flex flex-col justify-center items-center content-center'>
        {props.clienteSelecionado ? (
          <button
            className='flex justify-center items-center content-center text-blue-500 hover:opacity-60 hover:bg-white hover:border-2 hover: rounded-full'
            onClick={() => props.clienteSelecionado?.(cliente)}
            title={`Editar ${cliente.nome}`}
          >
            <IconeEditar />
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button
            className='flex justify-center items-center content-center text-red-500 hover:opacity-60 hover:bg-white hover:border-2 hover: rounded-full'
            onClick={() => props.clienteExcluido?.(cliente)}
            title={`Deletar ${cliente.nome}`}
          >
            <IconeDelete />
          </button>
        ) : (
          false
        )}
      </td>
    )
  }
  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      {renderizarCabecalho()}
      {renderizarClientes()}
    </table>
  )
}

export default Tabela

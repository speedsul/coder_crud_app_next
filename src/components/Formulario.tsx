import { useState } from 'react'
import Cliente from '../core/Cliente'
import Entrada from './Entrada'
import Botao from './Botao'

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id ?? null
  const [nome, setNome] = useState(props.cliente.nome ?? '')
  const [idade, setIdade] = useState(props.cliente.idade ?? '')

 
  return (
    <div>
      {id && (
        <Entrada
          className='mb-4'
          texto={`Código: ${id}`}
          valor={id}
          somenteLeitura
        />
      )}
      {
        <Entrada
          className='mb-4'
          texto={`Nome: ${nome}`}
          valor={nome}
          valorMudou={setNome}
        />
      }
      {
        <Entrada
          texto={`Idade: ${idade}`}
          tipo='number'
          valorMudou={setIdade}
          valor={idade}
        />
      }
      <div className={`flex justify-end pt-4`}>
        <Botao
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          className='mr-2'
          cor='blue'
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado} cor='red'>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}

export default Formulario

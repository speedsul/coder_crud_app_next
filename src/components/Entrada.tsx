interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  className?: string
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col flex-1 ${props.className}`}>
      <label className='mb-4 capitalize font-bold'>{props.texto}</label>
      <input
        className={`
      border bg-purple-100 border-purple-300 rounded-lg font-semibold
      outline-none px-4 py-2 ${
        props.somenteLeitura ? '' : 'focus:bg-opacity-50'
      }
      `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={e => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}

export default Entrada

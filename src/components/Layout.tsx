import Titulo from './Titulo'
interface LayOutProps {
  titulo?: string
  children: any
}

const LayOut = (props: LayOutProps) => {
  return (
    <div className='flex flex-col w-5/6 md:w-full sm:w-full sm:mx-5 lg:w-3/4 bg-white text-gray-800 rounded-md'>
      <Titulo>{props.titulo}</Titulo>
      <div className=' p-1 2xl:p-6 xl:p-6 lg:p-6 md:p-6 sm:p-4'>{props.children}</div>
    </div>
  )
}

export default LayOut

const Titulo = ({ children }) => {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='px-5 py-2 text-2xl capitalize font-bold text-gray-700'>
        {children}
      </h1>
      <hr className='border-2 border-purple-700 animate-bounce' />
    </div>
  )
}

export default Titulo

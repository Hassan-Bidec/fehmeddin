import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <div className="w-12 h-12 border-4 border-[#8E2C62] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader
import React from 'react'

const layout2 = ({ books = [], title }) => {
  return (
      <div className="mt-[40px]">
      {/* Section Header */}
      <div className="flex justify-end mr-23 sm:-mr-10 md:mr-25 lg:-mr-3">

        <h2 className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white px-18 py-3 rounded-l-full text-2xl font-bold inline-block whitespace-nowrap">
          {title}   {/* 👈 API ki key show hogi */}
        </h2>
      </div>

      {/* Cards */}
      <div dir="rtl" className="mt-6  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:-ml-20 gap-10">
        {books.map((post, i) => (
          <div key={i} className=" flex flex-col  items-center text-right">
            <div className="md:w-[200px] w-full p-1   h-[250px] rounded-xl shadow-xl  flex flex-col">
              {/* Image */}
              <img
                // src={post.img}
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.image}`}

                alt={post.title}
                className="rounded-[10px] h-40 w-full object-cover"
              />

              {/* Text Content */}
              <div className="px-1 W-full py-2 flex-1 flex flex-col p-10 ">
                <h3 className="text-[16px] text-gray-800">{post.name}</h3>
                <p className="text-gray-600 text-sm mt-2 font-[400] line-clamp-4">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-30">
        {/* <Hijab />
        <Newjourney />
        <Haner /> */}
      </div>
    </div>
  )
}

export default layout2
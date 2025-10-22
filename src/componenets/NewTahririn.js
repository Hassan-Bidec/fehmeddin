import Link from "next/link";

export default function NewTahririn({ books = [], title }) {
  return (
    <div className="mt-10 -sm:px-7 ">
      {/* Section Header */}
      <div className="flex w-full justify-end">
        <h2 className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white
          px-18 py-3 rounded-l-full text-lg sm:text-2xl ml-5 sm:mr-2 font-bold inline-block whitespace-nowrap ">
          {title}
        </h2>
      </div>

      
      <div
  dir="rtl"
  className="
    mt-6 grid grid-cols-2
    sm:grid-cols-2
    md:grid-cols-4 md:w-full 
    lg:grid-cols-4 lg:w-full lg:gap-x-25 lg:px-0 lg:-ml-10
    gap-3
    [@media(min-width:1026px)_and_(max-width:1279px)]:grid-cols-3 
    [@media(min-width:1026px)_and_(max-width:1279px)]:ml-2 
    [@media(min-width:1026px)_and_(max-width:1279px)]:w-full
  "
>

        {books.slice(0, 20).map((post, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-right"
          >
    <Link
  href={`/book/${post.slug}`}
  
  rel="noopener noreferrer"
  className="md:w-[200px] w-full p-1 h-[250px] rounded-md flex flex-col shadow-[1.32px_1.32px_19.78px_0px_#00000012] gap-x-3"
>
              {/* Image */}
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.image}`}
                alt={post.title}
                className="rounded-[10px] h-40 w-full object-cover"
              />

              {/* Text Content */}
              <div className="px-1 w-full py-2 flex-1 flex flex-col p-10">
                <h3 className="text-[16px] text-gray-800">{post.name}</h3>
                <p className="text-gray-600 text-sm mt-2 font-[400] line-clamp-4">
                  {post.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-30">
        {/* Future extra components */}
        {/* <Hijab />
        <Newjourney />
        <Haner /> */}
      </div>
    </div>
  );
}

export default function Hijab({ books = [], title }) {
  return (
    <div className="-mt-10">
      {/* Section Header */}
      <div className="flex w-full justify-end sm:-mr-10 md:mr-25 lg:-mr-3">
        <h2 className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white
               px-10 py-3 rounded-l-full text-2xl font-bold inline-block whitespace-nowrap mr-2">
          {title}
        </h2>
      </div>

      {/* Cards */}
      <div
        dir="rtl"
        className="w-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
                   gap-x-3 gap-y-3 justify-start px-2 sm:px-0"
      >
        {books.slice(0, 18).map((post, i) => (
          <a
            key={i}
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.pdfLink}`}
            dir="ltr"
            className="bg-white shadow-[0.8px_0.8px_10px_0px_#00000012] rounded-xl 
                       w-full transition duration-200 flex flex-row items-center justify-between 
                       px-3 py-2 sm:w-auto md:w-[250px]"
          >
            
            <div className="w-[80px] h-[92px] flex-shrink-0 ml-2 order-2">
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.image}`}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="text-right pr-2 flex-1 order-1">
              <h4 className="font-medium text-[16px] mb-1 line-clamp-2">{post.name}</h4>
              <p className="text-sm line-clamp-3">{post.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

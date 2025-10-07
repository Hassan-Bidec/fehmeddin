export default function haner() {
  const posts = [
    {
      img: "/NewTahririn4.png",
      title: "پیر سید حبیب وارثی اسلامی اسکالر",
      desc: "ہجرتِ مدینہ اسلامی تاریخ کا ایک انقلابی واقعہ ہے، جس نے مسلمانوں کو آزاد ریاست اور دینی معاشرہ عطا کیا۔"
    },
    {
      img: "/NewTahririn3.png",
      title: "پیر سید حبیب وارثی اسلامی اسکالر",
      desc: "ہجرتِ مدینہ اسلامی تاریخ کا ایک انقلابی واقعہ ہے، جس نے مسلمانوں کو آزاد ریاست اور دینی معاشرہ عطا کیا۔"
    },
    {
      img: "/NewTahririn2.png",
      title: "مدبر کے قلم سے",
      desc: "پیر سید حبیب وارثی کی تحریر میں فکری رہنمائی، دینی بصیرت اور موجودہ دور کے چیلنجز کا حل پیش کیا گیا ہے۔"
    },
    {
      img: "/NewTahririn1.png",
      title: "مدبر کے قلم سے",
      desc: "پیر سید حبیب وارثی کی تحریر میں فکری رہنمائی، دینی بصیرت اور موجودہ دور کے چیلنجز کا حل پیش کیا گیا ہے۔"
    },
    {
      img: "/NewTahririn4.png",
      title: "پیر سید حبیب وارثی اسلامی اسکالر",
      desc: "ہجرتِ مدینہ اسلامی تاریخ کا ایک انقلابی واقعہ ہے، جس نے مسلمانوں کو آزاد ریاست اور دینی معاشرہ عطا کیا۔"
    },
    {
      img: "/NewTahririn3.png",
      title: "پیر سید حبیب وارثی اسلامی اسکالر",
      desc: "ہجرتِ مدینہ اسلامی تاریخ کا ایک انقلابی واقعہ ہے، جس نے مسلمانوں کو آزاد ریاست اور دینی معاشرہ عطا کیا۔"
    },
    {
      img: "/NewTahririn2.png",
      title: "مدبر کے قلم سے",
      desc: "پیر سید حبیب وارثی کی تحریر میں فکری رہنمائی، دینی بصیرت اور موجودہ دور کے چیلنجز کا حل پیش کیا گیا ہے۔"
    },
    {
      img: "/NewTahririn1.png",
      title: "مدبر کے قلم سے",
      desc: "پیر سید حبیب وارثی کی تحریر میں فکری رہنمائی، دینی بصیرت اور موجودہ دور کے چیلنجز کا حل پیش کیا گیا ہے۔"
    },


  ];

  return (
    <div className="mt-[60px]">
      {/* Section Header */}
      <div className="flex justify-end mr-23 sm:-mr-10 md:mr-25 lg:-mr-2">
        <h2 className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white px-18 py-3 rounded-l-full text-2xl font-bold inline-block whitespace-nowrap">
          ہنر کدہ        </h2>
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:-ml-20 gap-10">
        {posts.map((post, i) => (
          <div key={i} className=" flex flex-col items-center text-right">
            <div className="w-full h-[250px] rounded-xl shadow md:w-[150px] flex flex-col">
              {/* Image */}
              <img
                src={post.img}
                alt={post.title}
                className="rounded-t-xl h-40 w-full object-cover"
              />

              {/* Text Content */}
              <div className="px-3 py-2 flex-1 flex flex-col ">
                <h3 className="text-[13px] text-gray-800 font-bold">{post.title}</h3>
                <p className="text-gray-600 text-[12px] mt-2 font-[400] line-clamp-4">
                  {post.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}

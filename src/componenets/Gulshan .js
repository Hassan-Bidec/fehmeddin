export default function Gulshan () {
  const posts = [
    {
      date: "25-6-24",
      img: "/Rectangle 651.png",
      title:"بلا عنوان",
      desc:"تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"
     
    },
    {
      date: "25-6-24",
      img: "/Rectangle 654.png",
    title:"یقین کامل",
      desc:"ڈیجیٹل دنیا میں خواتین کو درپیش چیلنجز اور ان سے نمٹنے کے طریقے۔"
    },
    {
      date: "25-6-24",
      img: "/Rectangle 650.png",
    title:"دعا کی تعبیر",
      desc:"علم اور ازدواجی زندگی میں توازن پر رہنمائی۔ تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"
    },
   
    
  ];

  return (
   <div className="bg-gray-100 w-95 pl-5 p-15 h-[570px] rounded-xl -mt-22">
      {/* Section Header */}
      <h2 className="text-center text-2xl font-bold text-[#5D1F42] mb-6">
        گلشن تبسم
      </h2>

<div className="space-y-6 w-85">
  {posts.map((post, i) => (
    <div key={i} className="flex bg-white rounded-lg shadow p-3 items-start gap-4">
      
      {/* Text Content */}
      <div className="flex-1 text-right">
        {/* Date & Title Row */}
        <div className="flex justify-between items-center mb-1">
          {/* Date Badge (right side now) */}
          <div className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white px-3 py-1 rounded-[20px] h-[28px] text-xs font-semibold">
            {post.date}
          </div>

          {/* Title (now on left side) */}
          <h3 className="font-bold text-gray-800  text-[15px]">{post.title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-2 text-sm">{post.desc}</p>
      </div>

      {/* Image */}
      <img
        src={post.img}
        alt={post.title}
        className="w-24 h-20 rounded-lg object-cover"
      />
    </div>
  ))}
</div>
  <div className="flex justify-center mt-8"> 
<button className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] -ml-2 text-white px-8 rounded-[20px] h-[38px] text-[13px] font-semibold cursor-pointer">
  مزید دیکھیں
</button>



</div>



    </div>

  );
}

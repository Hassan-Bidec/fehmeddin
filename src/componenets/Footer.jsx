// "use client";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import XIcon from "@mui/icons-material/X";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { useEffect, useState } from "react";
// import { categoriesApi } from "@/lib/api/category";


// export default function Footer() {
//     const [email, setEmail] = useState("");
//     const [socialLinks, setSocialLinks] = useState([]);


//     useEffect(() => {
//         const fetchLinks = async () => {
//             try {
//                 const res = await categoriesApi.Sociallinks();
//                 console.log("API response:", res);

//                 setSocialLinks(res.data || []);
//             } catch (err) {
//                 console.error("Error fetching social links:", err);
//             }
//         };
//         fetchLinks();
//     }, []);

//     const handleSubscribe = async () => {
//         try {
//             const payload = email
//                 ? { name: "Website User", email }
//                 : undefined;

//             const res = await categoriesApi.subcribers(payload);
//             console.log("Subscribed Successfully:", res.data);

//             alert("Thanks for subscribing!");
//             setEmail(""); // input clear karo
//         } catch (err) {
//             console.error("Subscription failed", err);
//             alert("Something went wrong!");
//         }
//     };
//     return (
//         <div className="">
//             <div >
//                 <hr className="border-t-12 border-[#9D2D63] p-2" />
//             </div>
//             <footer className="bg-[#0077c8] text-white pt-10 pb-6">
//                 <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-8 text-sm">

//                     {/* Left Orange Card */}
//                     <div className="bg-[#f15a29] rounded-xl p-6 w-full md:max-w-[480px] text-white">
//                         {/* QR Icon & Text below */}
//                         <div className="flex flex-col sm:flex-row gap-6 mb-6">
//                             {/* Left Section */}
//                             <div className="flex flex-col">

//                                 <img className="w-[50px]" src="/Group 967.png" />


//                                 <p className="text-[11px] mt-5">
//                                     Baitussalam welfare trust (BWT) <br />
//                                     in Karachi, Pakistan is a non-profit <br />
//                                     relief and development organization <br />
//                                     that Baitussalam
//                                 </p>
//                             </div>

//                             {/* Right Section */}
//                             <div>
//                                 <h4 className="font-bold text-[13px] mt-4 mb-8">QUICK CONTACT</h4>
//                                 <p className="text-[12px]">
//                                     <span className="font-semibold">Email:</span> info@baitussalam.org
//                                 </p>
//                                 <p className="text-[12px]">
//                                     <span className="font-semibold">Contact:</span> +92-21-111-298-111
//                                 </p>
//                                 <p className="text-[12px]">
//                                     <span className="font-semibold">Address:</span> Khayaban-e-jami,<br />
//                                     Phase IV, DHA Karachi, Pakistan
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Social + Newsletter */}
//                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
//                             {/* Left Section */}
//                             <div>
//                                 <h4 className="font-bold mb-2">Follow Us</h4>
//                                 <div className="flex gap-3">
//                                     <FacebookIcon style={{ fontSize: 15 }} />
//                                     <YouTubeIcon style={{ fontSize: 15 }} />
//                                     <XIcon style={{ fontSize: 15 }} />
//                                     <WhatsAppIcon style={{ fontSize: 15 }} />
//                                 </div>
//                             </div>

//                             {/* Right Section */}
//                             <div className="w-full sm:w-auto">
//                                 <h4 className="font-bold text-[10px] mb-2">SUBSCRIBE OUR NEWSLETTER</h4>
//                                 <div className="flex">
//                                     <input
//                                         type="email"
//                                         placeholder="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="p-2 px-3 rounded-l bg-white text-black text-sm w-full sm:w-40"
//                                     />
//                                     <button onClick={handleSubscribe} className="bg-green-600 px-4 rounded-r text-white text-sm">
//                                         Send
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Center Logo + Social */}
//                     <div className="flex flex-col  ">
//                         <div>
//                             <img src="/Logo 1.png" alt="logo" className="mb-3 w-40" />
//                             <p className="text-[11px] mb-6">
//                                 Baitussalam welfare trust (BWT) <br />
//                                 in Karachi, Pakistan is a non-profit <br />
//                                 relief and development<br />
//                                 organization that Baitussalam<br />
//                                 welfare trust (BWT) in Karachi, P<br />
//                             </p>
//                         </div>

//                         <div>
//                             <h4 className="font-bold mb-3">Follow Us</h4>
//                             <div className="flex gap-3">
//                                 {/* <FacebookIcon style={{ fontSize: 17 }} />
//                                 <YouTubeIcon style={{ fontSize: 17 }} />
//                                 <XIcon style={{ fontSize: 17 }} />
//                                 <WhatsAppIcon style={{ fontSize: 17 }} /> */}
//                                 {socialLinks.length > 0 ? (
//                                     socialLinks.map((item, index) => (
//                                         <a
//                                             key={index}
//                                             href={item.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             {item.logo ? (
//                                                 <img
//                                                     src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.logo}`}

//                                                     // src={${process.env.NEXT_PUBLIC_API_BASE_URL}item.logo}
//                                                     alt={item.platform}
//                                                     style={{ width: 20, height: 20 }}
//                                                 />
//                                             ) : (
//                                                 <span className="text-xs font-medium">{item.platform}</span>
//                                             )}
//                                         </a>
//                                     ))
//                                 ) : (
//                                     <span className="text-xs">No links</span>
//                                 )}


//                             </div>
//                         </div>
//                     </div>

//                     {/* Pages Section */}
//                     <div className="text-[12px] w-full md:w-[130px] mt-5">
//                         <h4 className="font-bold mb-2">PAGES</h4>
//                         <ul className="space-y-1">
//                             <li>Legal Basis</li>
//                             <li>Privacy Policy</li>
//                             <li>Personal Information</li>
//                             <li>How to complain</li>
//                         </ul>
//                     </div>

//                     {/* Right Contact & Newsletter */}
//                     <div className="text-sm w-full mt-5 md:w-auto">
//                         <h4 className="font-bold mb-2">QUICK CONTACT</h4>
//                         <p>
//                             <span className="font-semibold">Email:</span> info@baitussalam.org
//                         </p>
//                         <p>
//                             <span className="font-semibold">Contact:</span> +92-21-111-298-111
//                         </p>
//                         <p>
//                             <span className="font-semibold">Address:</span> Khayaban-e-jami,<br />
//                             Phase IV, DHA Karachi, Pakistan
//                         </p>

//                         <div className="mt-4">
//                             <h4 className="font-bold mb-2">SUBSCRIBE OUR NEWSLETTER</h4>
//                             <div className="flex">
//                                 <input
//                                     placeholder="email"
//                                     className="p-2 px-3 rounded-l bg-white text-black w-full text-sm"
//                                 />
//                                 <button className="bg-[#72253e] px-4 rounded-r text-white text-sm">
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-15 ">
//                     <hr />

//                 </div>

//             </footer>
//         </div>
//     );
// }
"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useEffect, useState } from "react";
import { categoriesApi } from "@/lib/api/category";
import { toast } from "react-toastify";
import useContactStore from "@/lib/store/useContactStore";
import Link from "next/link";

export default function Footer() {
  // const [email, setEmail] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [email1, setEmail1] = useState("");
  // const [contactInfo, setContactInfo] = useState(null);
  const [email2, setEmail2] = useState("");
    const { contactInfo, fetchContactInfo } = useContactStore();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await categoriesApi.Sociallinks();
        setSocialLinks(res.data || []);
         const contactRes = categoriesApi.contactInfo; 
        fetchContactInfo(contactRes.data);
        // console.log("contactInfo" , contactInfo);
        
      } catch (err) {
        console.error("Error fetching social links:", err);
      }
    };
    fetchLinks();
  }, []);
    useEffect(() => {
    if (!contactInfo) fetchContactInfo();
  }, [contactInfo, fetchContactInfo]);

  if (!contactInfo) return null;

  const baitussalamLinks = socialLinks.filter(link =>
    link.platform.toLowerCase().startsWith("baitussalam")
  );
  const fehmeddinLinks = socialLinks.filter(link =>
    link.platform.toLowerCase().startsWith("fehmeddin")
  );

  const handleSubscribe = async (email, type) => {
    try {
      // ✅ اگر ای میل خالی ہو تو اردو میں ایرر شو کریں اور باقی کوڈ نہ چلے
      if (!email) {
        toast.error("براہ کرم اپنا ای میل درج کریں", {
          style: { background: "#72253e", color: "#fff" },
        });
        return; // آگے نہ جائے
      }

      const payload = { email, type }; // type بھیجا
      await categoriesApi.subcribers(payload);

      toast.success("آپ کا سبسکرپشن کامیاب رہا۔ شکریہ!", {
        style: { background: "#72253e", color: "#fff" },
      });

      if (type === 1) setEmail1("");
      if (type === 2) setEmail2("");

    } catch (err) {
      toast.error("کچھ مسئلہ آ گیا ہے، دوبارہ کوشش کریں!", {
        style: { background: "#72253e", color: "#fff" },
      });
    }
  };


  return (
    <div>
      <div>
        <hr className="border-t-12 border-[#9D2D63] p-2 mt-0" />
      </div>

      <footer
        dir="rtl"
        className="bg-[#0077c8] text-white pt-10 pb-6"
      >
        <div className="max-w-[1300px] mx-auto px-3 md:px-10 flex flex-col md:flex-row flex-wrap gap-8 text-sm justify-between">

          {/* بایاں سیکشن */}
          <div className="bg-[#f15a29] rounded-xl p-3 w-full md:max-w-[420px] text-white">
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex flex-col">
                <img className="w-[50px]" src="/Group 967.png" />
                <p className="text-[16px] mt-5 leading-5">
                  بیت السلام ویلفیئر ٹرسٹ (BWT) <br />
                  کراچی، پاکستان میں ایک غیر منافع بخش <br />
                  ریلیف اور ترقیاتی ادارہ ہے۔ <br />
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[16px] mt-4 mb-4">فوری رابطہ</h4>
                <p className="text-[16px]">
                  <span className="font-semibold">ای میل:</span> {contactInfo.email1}
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">رابطہ نمبر:</span> {contactInfo.phone1}
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">پتہ:</span> {contactInfo.address1}
                  </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h4 className="font-bold mb-2">ہم سے جُڑیں</h4>
                <div className="flex gap-3">
                  {baitussalamLinks.map((item) => (
                    <Link key={item.id} href={item.url} target="_blank">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.logo}`}
                        alt={item.platform}
                        className="w-5 h-5"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="w-full sm:w-auto">
                <h4 className="font-bold text-[16px] mb-2">ہمارا نیوزلیٹر سبسکرائب کریں</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="ای میل درج کریں"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 px-3 rounded-l bg-white text-black text-sm w-full sm:w-40"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-green-600 px-4 rounded-r text-white text-sm"
                  >
                    بھیجیں
                  </button>
                </div>
              </div> */}
              <div className="mt-4">
                <h4 className="font-bold mb-2">ہمارا نیوزلیٹر سبسکرائب کریں</h4>

                {/* ✅ Wrapper relative so button overlap kare */}
                <div className="relative w-full max-w-md" dir="ltr">
                  <input
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 pr-24 rounded bg-white text-black text-sm"
                  />
                  <button
                    onClick={() => handleSubscribe(email1, 1)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#39B54A] px-4 py-2 rounded text-white text-sm"
                  >
                    بھیجیں
                  </button>
                </div>
              </div>


            </div>
          </div>

          {/* لوگو سیکشن */}
          <div className="flex flex-col">
            
            <img src="/lFehmedeenlogo.png" alt="لوگو" className="mb-3 w-40" />
            <p className="text-[16px] mb-6 leading-5">
              بیت السلام ویلفیئر ٹرسٹ (BWT) کراچی، <br />
              پاکستان میں ایک غیر منافع بخش <br />
              ریلیف اور ترقیاتی ادارہ ہے۔
            </p>

            <h4 className="font-bold mb-2">ہم سے جُڑیں</h4>
            <div className="flex gap-3">
              {/* {socialLinks.length > 0 ? (
                socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.logo ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.logo}`}
                        alt={item.platform}
                        style={{ width: 20, height: 20 }}
                      />
                    ) : (
                      <span className="text-xs font-medium">{item.platform}</span>
                    )}
                  </a>
                ))
              ) : (
                <span className="text-xs">کوئی لنک موجود نہیں</span>
              )} */}
              {fehmeddinLinks.map((item) => (
                <Link key={item.id} href={item.url} target="_blank">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.logo}`}
                    alt={item.platform}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* صفحات */}
          <div className="text-[16px] w-full md:w-[130px] mt-5">
            <h4 className="font-bold mb-2">صفحات</h4>
            <ul className="space-y-1">
              <li>قانونی بنیاد</li>
              <li>پرائیویسی پالیسی</li>
              <li>ذاتی معلومات</li>
              <li>شکایت کا طریقہ</li>
            </ul>
          </div>

          {/* دایاں سیکشن */}
          <div className="text-sm w-full mt-5 md:w-auto">
            <h4 className="font-bold mb-2">فوری رابطہ</h4>
            <p>
              <span className="font-semibold">ای میل:</span>  {contactInfo.email2}
            </p>
            <p>
              <span className="font-semibold">رابطہ نمبر:</span> {contactInfo.phone2}
            </p>
            <p>
              <span className="font-semibold">پتہ:</span> {contactInfo.address2}
            </p>

            {/* <div className="mt-4">
              <h4 className="font-bold mb-2">ہمارا نیوزلیٹر سبسکرائب کریں</h4>
              <div className="flex">
                <input
                  placeholder="ای میل درج کریں"
                  className="p-2 px-3 rounded-l bg-white text-black w-full text-sm"
                  
                />
                <button className="bg-[#72253e] px-4 rounded-r text-white text-sm">
                  بھیجیں
                </button>
              </div>
            </div> */}
            <div className="mt-4">
              <h4 className="font-bold mb-2">ہمارا نیوزلیٹر سبسکرائب کریں</h4>

              {/* ✅ English layout with button inside */}
              <div className="relative w-full max-w-md" dir="ltr">
                <input
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 pr-24 rounded bg-white text-black text-sm"
                />
                <button
                  onClick={() => handleSubscribe(email2, 2)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#72253e] px-4 py-2 rounded text-white text-sm"
                >
                  بھیجیں
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-10">
          <hr />
        </div>
      </footer>
    </div>
  );
}

// "use client";

// import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
// import Link from "next/link";
// import logo from "../../../public/asset/logo/logo2.svg";
// import Image from "next/image";

// const socialLinks = [
//   {
//     id: "01",
//     icon: <Facebook size={20} />,
//     link: "https://facebook.com",
//     label: "Facebook",
//     hoverColor: "hover:bg-[#1877F2] hover:text-white",
//   },
//   {
//     id: "02",
//     icon: <Twitter size={20} />,
//     link: "https://twitter.com",
//     label: "Twitter",
//     hoverColor: "hover:bg-[#1DA1F2] hover:text-white",
//   },
//   {
//     id: "03",
//     icon: <Linkedin size={20} />,
//     link: "https://linkedin.com",
//     label: "LinkedIn",
//     hoverColor: "hover:bg-[#0077B5] hover:text-white",
//   },
//   {
//     id: "04",
//     icon: <Youtube size={20} />,
//     link: "https://youtube.com",
//     label: "YouTube",
//     hoverColor: "hover:bg-[#FF0000] hover:text-white",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white">
//       <div className="max-w-7xl mx-auto lg:px-4 py-5 lg:py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 items-center lg:gap-8">
//           {/* Logo */}
//           <div className="flex justify-center lg:justify-start lg:col-span-3">
//             <div className="relative">
//               <Image
//                 src={logo || "/placeholder.svg"}
//                 alt="brand logo"
//                 objectFit="cover"
//                 width={170}
//                 height={170}
//               />
//             </div>
//           </div>

//           {/* Social Links */}
//           <div>
//             <div className="flex gap-4 justify-center lg:justify-start">
//               {socialLinks.map((link) => (
//                 <Link
//                   key={link.id}
//                   href={link.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Visit our ${link.label} page`}
//                   className={`bg-white text-black p-2 rounded-full transition-all duration-300 ${link.hoverColor}`}
//                 >
//                   {link.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start mt-8 gap-12 lg:gap-4 ">
//           <div>
//             <h2 className="font-bold text-xl">সাম্প্রতিক খবর</h2>
//             <div className="flex justify-center lg:justify-start">
//               <hr className="my-4  w-[100px] lg:w-[150px]" />
//             </div>

//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   সর্বশেষ
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/national"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   জাতীয়
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/politics"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   রাজনীতি
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/international"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   আন্তর্জাতিক
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="">
//             <h2 className="font-bold text-xl ">বিভাগসমূহ</h2>
//             <div className="flex justify-center lg:justify-start">
//               <hr className="my-4  w-[100px] lg:w-[150px]" />
//             </div>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/technology"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   প্রযুক্তি
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/health"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   স্বাস্থ্য
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/economy"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   অর্থনীতি
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/tourism"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   পর্যটন
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-bold text-xl">অন্যান্য</h2>
//             <div className="flex justify-center lg:justify-start">
//               <hr className="my-4  w-[100px] lg:w-[150px]" />
//             </div>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/about-us"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   আমাদের সম্পর্কে
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact-us"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   যোগাযোগ

//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/terms-condition"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   শর্তাবলি ও নীতিমালা
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/privacy-policy"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   গোপনীয়তা নীতি
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-bold  text-xl">যোগাযোগ</h2>
//             <div className="flex justify-center lg:justify-start">
//               <hr className="my-4  w-[100px] lg:w-[150px]" />
//             </div>
//             <ul className="space-y-2">
//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">
//                   {" "}
//                   প্রধান সম্পাদক ও প্রকাশক:
//                 </span>{" "}
//                 মোঃ আদনান আরিফ
//               </li>
//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">
//                   সম্পাদক ও প্রকাশক:
//                 </span>{" "}
//                 মোঃ শাহরিয়ার মাহমুদ শিহাব
//               </li>

//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">ই-মেইল:</span>{" "}
//                 sarabelanews24@gmail.com
//               </li>
//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">ফোন:</span>{" "}
//                 01957713249, 01604249971
//               </li>
//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">বিজ্ঞাপন:</span>{" "}
//                 01724502183
//               </li>
//               <li className="text-gray-200">
//                 {" "}
//                 <span className="font-bold text-gray-100">ঠিকানা:</span> স্বপ্ন
//                 ডাঙ্গা, হাজারীবাগ শাহজাহান শাহ রোড, পশ্চিম ধানমন্ডি, ঢাকা-১২০৫
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="py-4 lg:py-8 mt-12 border-t border-gray-800 font-sans">
//           <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
//             <p className="mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} sarabelanews24. All Rights
//               Reserved.
//             </p>
//             <p>
//               Develop & Maintenance by{" "}
//               <Link
//                 href="https://softypy.com"
//                 className="text-red-500 hover:text-white transition-colors duration-300"
//               >
//                 SoftyPy IT
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../src/assets/logo/logoblue.png";
import google from "../../../src/assets/Google-Play.png";
import apple from "../../../src/assets/appstore.png";
import { FaFacebookF, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  {
    id: "01",
    icon: <FaFacebookF size={20} />,
    link: "https://facebook.com",
    label: "Facebook",
    hoverColor: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    id: "02",
    icon: <FaXTwitter size={20} />,
    link: "https://twitter.com",
    label: "Twitter",
    hoverColor: "hover:bg-[#1DA1F2] hover:text-white",
  },
  {
    id: "03",
    icon: <FaLinkedin size={20} />,
    link: "https://linkedin.com",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0077B5] hover:text-white",
  },
  {
    id: "04",
    icon: <FaYoutube size={20} />,
    link: "https://youtube.com",
    label: "YouTube",
    hoverColor: "hover:bg-[#FF0000] hover:text-white",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-400 text-black border-t">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center md:justify-start mb-6">
          <Image src={logo} alt="Logo" width={200} height={40} />
        </div>

        {/* Links Section */}
        <div className="text-center lg:text-left text-[19px] px-4 py-3">
          <p>সারা বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, সরাসরি লাইভ নিউজ, রাজনীতি, খেলাধুলা, বাণিজ্য ও বিনোদনসহ সকল সংবাদ আগে পড়তে ক্লিক করুন সারাবেলা নিউজ ২৪ ডট কম</p>
        </div>
        {/* <div className="lg:grid lg:grid-cols-6 text-center lg:text-left text-[19px] px-4">
          <Link href="#" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300"> সর্বশেষ </Link>
          <Link href="/national" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300 ">জাতীয়</Link>
          <Link href="/politics" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300 "> রাজনীতি</Link>
          <div className="lg:hidden py-[4px]" />
          <Link href="/international" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300">আন্তর্জাতিক</Link>
          <Link href="/technology" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300">প্রযুক্তি</Link>
          <Link href="/health" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300">স্বাস্থ্য</Link>
          <div className="lg:hidden py-[4px]" />
          <Link href="/economy" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300">অর্থনীতি</Link>
          <Link href="/tourism" className="mr-[16px] py-2 hover:text-red-500 transition-colors duration-300"> পর্যটন</Link>
       
        </div> */}
        <div className="lg:flex justify-between border-t py-2 lg:py-3 text-[17px] px-4 text-center ">
          <p>সম্পাদক: মোঃ আদনান আরিফ</p>
          <p>প্রকাশক:  মোঃ শিহাব মাহমুদ ও আরোহী মীম </p>
          <p>বিভাগীয় প্রধান (অনলাইন): মিজানুর রহমান শিমুল</p>
        </div>
        {/* Social & App Download */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <span className="text-sm md:text-[19px]">অনুসরণ করুন:</span>

            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.label} page`}
                  className={`bg-white text-black p-2 rounded-full transition-all duration-300 ${link.hoverColor}`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* App Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="border rounded-lg p-[3px]">
              <Image src={google} alt="Google Play" width={130} height={40} />
            </Link>
            <Link href="#" className="border rounded-lg">
              <Image src={apple} alt="App Store" width={130} height={40} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 dark:bg-gray-400 text-xs text-center py-4 px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-0 text-[19px]">
          <Link href="/about-us" className="hover:text-red-500 transition-colors duration-300">আমাদের সম্পর্কে</Link>|
          <Link href="/contact-us" className="hover:text-red-500 transition-colors duration-300">যোগাযোগ</Link>|
          <Link href="/terms-condition" className="hover:text-red-500 transition-colors duration-300">শর্তাবলি ও নীতিমালা</Link>|
          <Link href="/privacy-policy" className="hover:text-red-500 transition-colors duration-300">গোপনীয়তা নীতি</Link>
        </div>


        <div className="py-4 lg:py-5 mt-5 border-t border-gray-800 font-sans mb-5">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} sarabelanews24. All Rights
              Reserved.
            </p>
            <p>
              Develop & Maintenance by{" "}
              <Link
                href="https://softypy.com"
                className="text-red-500 hover:text-white transition-colors duration-300"
              >
                SoftyPy IT
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


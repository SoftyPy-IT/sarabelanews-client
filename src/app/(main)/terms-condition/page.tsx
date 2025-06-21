"use client";

import Link from "next/link";
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">
        ব্যবহারের শর্তাবলি – সারাবেলা নিউজ
      </h1>

      <section className="space-y-6 text-gray-800 leading-relaxed text-justify">
        <p className="text-lg">
          সারাবেলা নিউজ-এর ওয়েবসাইট বা অ্যাপ ব্যবহার করে আপনি নিচের সব শর্ত মেনে চলতে সম্মত হচ্ছেন। এই শর্তাবলিগুলো নিয়মিত হালনাগাদ হতে পারে, তাই সময় সময় দেখে নেওয়া আপনার দায়িত্ব।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">১. গ্রহণযোগ্য ব্যবহার</h2>
        <p className="text-lg">
          সারাবেলা নিউজ কেবলমাত্র ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারকারীদের জন্য। কোনোভাবেই আমাদের কনটেন্ট হ্যাক, মডিফাই বা অন্যায়ভাবে ব্যবহার করা যাবে না।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">২. মেধাসম্পদ অধিকার</h2>
        <p className="text-lg">
          আমাদের কনটেন্ট, লোগো, ডিজাইন, ছবি ও ভিডিও–সবকিছুই কপিরাইট আইনে সংরক্ষিত। অনুমতি ছাড়া কোনো ধরনের ব্যবহার সম্পূর্ণ নিষিদ্ধ।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৩. তৃতীয় পক্ষের লিংক</h2>
        <p className="text-lg">
          আমাদের সাইটে অন্য সাইটের লিংক থাকতে পারে, কিন্তু সেগুলোর কনটেন্টের দায় সারাবেলা নিউজ বহন করবে না।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৪. বিজ্ঞাপন</h2>
        <p className="text-lg">
          সাইটে প্রদর্শিত বিজ্ঞাপনগুলো তৃতীয় পক্ষের হতে পারে এবং তারা আপনার তথ্য সংগ্রহ করতে পারে। আমরা এসব বিজ্ঞাপনের জন্য দায়ী থাকব না।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৫. মন্তব্য ও ইউজার কনটেন্ট</h2>
        <p className="text-lg">
          আপনি যে কোনো মন্তব্য বা কনটেন্ট জমা দিলে তার দায়িত্ব আপনার। অশালীন, অবমাননাকর বা অবৈধ কিছু পোস্ট করা যাবে না।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৬. কনটেন্ট পরিবর্তন</h2>
        <p className="text-lg">
          সারাবেলা নিউজ যেকোনো কনটেন্ট বা ফিচার পূর্ব ঘোষণা ছাড়াই পরিবর্তন বা সরিয়ে নিতে পারে।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৭. গোপনীয়তা</h2>
        <p className="text-lg">
          আমরা কেবলমাত্র প্রয়োজনীয় ব্যক্তিগত তথ্য সংগ্রহ করি এবং তা তৃতীয় পক্ষের কাছে শেয়ার করি না। বিস্তারিত জানতে <Link href="/privacy-policy" className="text-blue-600 underline">গোপনীয়তা নীতি</Link> দেখুন।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৮. সুরক্ষা</h2>
        <p className="text-lg">
          আপনার ডিভাইসের নিরাপত্তা নিশ্চিত করা আপনার দায়িত্ব। ভাইরাস বা হ্যাকিংজনিত সমস্যার জন্য সারাবেলা নিউজ দায়ী থাকবে না।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">৯. আইনগত নির্দেশনা</h2>
        <p className="text-lg">
          এই শর্তাবলি বাংলাদেশের প্রচলিত আইন দ্বারা পরিচালিত হবে। কোনো বিরোধ হলে তা ঢাকায় সালিসের মাধ্যমে নিষ্পত্তি হবে।
        </p>

        <h2 className="text-xl font-semibold text-purple-800">১০. সংশোধনী নীতি</h2>
        <p className="text-lg">
          যদি কোনো ভুল থাকে এবং আমরা সেটা জানি বা আপনাদের থেকে জানানো হয়, আমরা সংশোধন করি। <br />
          ইমেইল: <Link href="mailto:sarabelanews24@gmail.com" className="text-blue-600 underline">sarabelanews24@gmail.com</Link>
        </p>

        <h2 className="text-xl font-semibold text-purple-800">১১. যোগাযোগ</h2>
        <p className="text-lg">
          কোনো প্রশ্ন বা মতামতের জন্য যোগাযোগ করুন:<br />
          📧 <Link href="mailto:sarabelanews24@gmail.com" className="text-blue-600 underline">sarabelanews24@gmail.com</Link>
        </p>

        <p className="italic text-sm text-gray-600 pt-6">
          সর্বশেষ আপডেট: ২১ জুন ২০২৫
        </p>
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;

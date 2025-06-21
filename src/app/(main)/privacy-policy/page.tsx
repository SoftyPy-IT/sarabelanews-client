// app/privacy-policy/page.tsx or pages/privacy-policy.tsx
"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-[#3C016F] to-[#DC25FF] py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">গোপনীয়তা নীতি</h1>
        <p className="mt-2 text-lg font-medium">সারাবেলা নিউজ</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 text-gray-800 space-y-8 leading-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">ব্যক্তিগত তথ্য সংগ্রহ</h2>
          <p>
            আমাদের ওয়েবসাইট বা অ্যাপ ব্যবহার করার সময় আপনি যে তথ্য প্রদান করেন,
            তা নিরাপদে সংরক্ষণ করা হয়। আমরা নাম, ইমেইল, মোবাইল নম্বর, ডিভাইস
            ইনফরমেশন ইত্যাদি সংগ্রহ করতে পারি।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">তথ্য ব্যবহারের উদ্দেশ্য</h2>
          <p>
            আপনার দেওয়া তথ্য আমরা কেবল সারাবেলা নিউজের পরিষেবা উন্নয়নে ও
            গ্রাহকসেবা প্রদানে ব্যবহার করি। কখনোই তৃতীয় পক্ষের কাছে বিক্রি বা
            অপ্রাসঙ্গিকভাবে হস্তান্তর করা হয় না।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">কুকিজ ও ট্র্যাকিং</h2>
          <p>
            আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে আমরা কুকিজ ব্যবহার করতে পারি। আপনি
            চাইলে কুকি নিষ্ক্রিয় করতে পারেন ব্রাউজার সেটিংস থেকে।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">তৃতীয় পক্ষের বিজ্ঞাপন</h2>
          <p>
            আমাদের সাইটে তৃতীয় পক্ষের বিজ্ঞাপন প্রদর্শিত হতে পারে, যেগুলোর গোপনীয়তা
            নীতির জন্য আমরা দায়ী নই। অনুগ্রহ করে বিজ্ঞাপনদাতার নীতিমালা পড়ুন।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">তথ্য সুরক্ষা</h2>
          <p>
            আপনার ব্যক্তিগত তথ্য আমরা এনক্রিপশন ও নিরাপদ সার্ভারের মাধ্যমে
            সংরক্ষণ করি যাতে কোনো অননুমোদিত অ্যাক্সেস না ঘটে।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">নীতিমালার পরিবর্তন</h2>
          <p>
            গোপনীয়তা নীতি যেকোনো সময় আপডেট হতে পারে। নীতিমালায় কোনো পরিবর্তন হলে
            তা ওয়েবসাইটে প্রকাশ করা হবে এবং ব্যবহারকারীকে অবহিত করা হবে।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">যোগাযোগ</h2>
          <p>
            যদি আপনার আমাদের গোপনীয়তা নীতির বিষয়ে কোনো প্রশ্ন থাকে, অনুগ্রহ করে
            আমাদের ইমেইল করুন:{" "}
            <a
              href="mailto:sarabelanews24@gmail.com"
              className="text-[#DC25FF] font-medium underline"
            >
              sarabelanews24@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

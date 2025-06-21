"use client";

import React from "react";

const ContactUsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-8">
        যোগাযোগ করুন – সারাবেলা নিউজ
      </h1>

      <section className="bg-gray-100 p-6 rounded-xl shadow-sm space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">প্রধান সম্পাদক ও প্রকাশক</h2>
          <p className="text-gray-700">মোঃ আদনান আরিফ</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">সম্পাদক ও প্রকাশক</h2>
          <p className="text-gray-700">মোঃ শাহরিয়ার মাহমুদ শিহাব</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">ই-মেইল</h2>
          <p className="text-blue-600">
            <a href="mailto:sarabelanews24@gmail.com">sarabelanews24@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">ফোন নম্বর</h2>
          <p className="text-gray-700">01957713249, 01604249971</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">বিজ্ঞাপন যোগাযোগ</h2>
          <p className="text-gray-700">01724502183</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">ঠিকানা</h2>
          <p className="text-gray-700">
            স্বপ্ন ডাঙ্গা, হাজারীবাগ শাহজাহান শাহ রোড, <br />
            পশ্চিম ধানমন্ডি, ঢাকা-১২০৫
          </p>
        </div>
      </section>

      <div className="mt-10 text-center text-sm text-gray-500">
        আমরা আপনার মতামত, অভিযোগ বা বিজ্ঞাপন সংক্রান্ত তথ্যের জন্য সবসময় প্রস্তুত।
      </div>
    </main>
  );
};

export default ContactUsPage;

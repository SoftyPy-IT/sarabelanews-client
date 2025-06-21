
import Head from 'next/head';

export default function AboutUs() {
    

    return (
        <div className="max-w-7xl mx-auto bg-gray-50 p-4">
            <Head>
                <title>আমাদের সম্পর্কে | সারা বেলা নিউজ</title>
                <meta name="description" content="সারা বেলা নিউজ - বাংলাদেশের শীর্ষস্থানীয় সংবাদ মাধ্যম সম্পর্কে জানুন" />
            </Head>

            {/* Hero Section */}
            <div className="relative py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">সারা বেলা নিউজ সম্পর্কে</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        ১৯৯৮ সাল থেকে নিরপেক্ষ, বস্তুনিষ্ঠ সাংবাদিকতার জন্য বাংলাদেশের আস্থাভাজন মাধ্যম
                    </p>
                </div>
            </div>

           

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">সারা বেলা নিউজ</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        সারা বেলা নিউজ বাংলাদেশের বৃহত্তম মিডিয়া প্রতিষ্ঠান যেখানে ১,০০০-এর বেশি কর্মী
                        সংবাদপত্র, ওয়েব পোর্টাল, মাসিক ম্যাগাজিন, বই প্রকাশনা, গোলটেবিল আলোচনা
                        এবং সামাজিক উদ্যোগে নিয়োজিত রয়েছেন।
                    </p>
                    <p className="text-gray-700 mb-6">
                        জাতীয় মিডিয়া জরিপ অনুযায়ী, প্রতিদিন ৫০ লাখের বেশি মানুষ সারা বেলা নিউজের
                        প্রিন্ট সংস্করণ পড়েন, যা আমাদেরকে বাংলাদেশের সর্বাধিক পঠিত সংবাদপত্রে পরিণত করেছে।
                        আমাদের ওয়েব পোর্টাল বিশ্বের শীর্ষ বাংলা ভাষার ওয়েবসাইট যেখানে মাসিক ১.৩ কোটি
                        ভিজিটর এবং ৩০ কোটি পেজ ভিউ রয়েছে।
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">আমাদের প্রভাব</h3>
                        <p className="text-blue-700 text-lg">
                            ২১ লাখ ফলোয়ার নিয়ে সারা বেলা নিউজের ফেসবুক পেজ বাংলাদেশের সবচেয়ে জনপ্রিয় প্রাতিষ্ঠানিক পেজ।
                        </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard number="৫০ লাখ+" label="দৈনিক পাঠক" />
                        <StatCard number="১.৩ কোটি+" label="মাসিক ভিজিটর" />
                        <StatCard number="৩০ কোটি+" label="মাসিক পেজ ভিউ" />
                        <StatCard number="২১ লাখ+" label="ফেসবুক ফলোয়ার" />
                    </div>
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">আমাদের সংস্করণ</h4>
                        <p className="text-gray-700 text-lg">
                            ঢাকা, চট্টগ্রাম ও বগুড়া থেকে দৈনিক ১০টি সংস্করণ প্রকাশিত হয়।
                        </p>
                    </div>
                </div>
            </div>

            <div className='my-10'>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-10">আমাদের মূল্যবোধ</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">রূপকল্প</h3>
                        <p className="text-gray-700 mb-2">
                            পাঠককে সত্য ও বিস্তারিত তথ্য পরিবেশন করা, বিশ্বকে জানতে ও সম্ভাবনার পথ খুঁজে নিতে সাহায্য করা
                            এবং সমাজে ইতিবাচক ও অন্তর্ভুক্তিমূলক পরিবর্তনের পক্ষে কাজ করা।
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">ব্রত</h3>
                        <p className="text-gray-700 mb-2">
                            আমরা সাংবাদিকতায় পেশাদারিত্ব ও ব্যবসায় নৈতিকতার সংস্কৃতিকে লালন করি। আমরা সম্ভাব্য পরিবর্তনকে
                            বিবেচনায় নিয়ে সৃজনশীলতা ও সক্ষমতা বাড়িয়ে সবচেয়ে সময়োপযোগী সংবাদমাধ্যম হিসেবে নিজেদের অবস্থান ধরে রাখি।
                        </p>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-6">মৌলিক মূল্যবোধ</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ValueCard
                        title="পেশাদারিত্ব"
                        content="আমরা নিরপেক্ষ ও অনুসন্ধানী সাংবাদিকতার ধারা অব্যাহত রাখি।"
                        icon="👔"
                    />
                    <ValueCard
                        title="স্বাধীনতা"
                        content="আমরা সত্যের সন্ধান করি, আর্থিক স্বাবলম্বিতা তার শক্তি জোগায়।"
                        icon="🕊️"
                    />
                    <ValueCard
                        title="জনমুখিতা"
                        content="আমরা মানুষের কথা বলি, মানুষের পাশে থাকি।"
                        icon="👥"
                    />
                    <ValueCard
                        title="ইতিবাচকতা"
                        content="আমরা ইতিবাচক পরিবর্তনকে উৎসাহ দিই, সমর্থন করি, এর সপক্ষে কথা বলি।"
                        icon="👍"
                    />
                    <ValueCard
                        title="সংহতি"
                        content="আমরা প্রতিশ্রুতি রক্ষা ও কর্তব্য পালনে আন্তরিক।"
                        icon="🤝"
                    />
                    <ValueCard
                        title="সৃজনশীলতা"
                        content="আমাদের দৃষ্টি ভবিষ্যতের দিকে প্রসারিত।"
                        icon="💡"
                    />
                </div>
            </div>

            {/* Main Content */}


            {/* Footer CTA */}
            <div className="bg-blue-800 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">সারা বেলা নিউজের সাথে যুক্ত থাকুন</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        সঠিক, নিরপেক্ষ সংবাদ ও গভীর বিশ্লেষণমূলক সাংবাদিকতার জন্য আমাদের পাঠক সম্প্রদায়ের অংশ হোন।
                    </p>
                    <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                        সাবস্ক্রাইব করুন
                    </button>
                </div>
            </div>
        </div>
    );
}

// Component for statistical cards
function StatCard({ number, label }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-1">{number}</p>
            <p className="text-gray-600 text-sm">{label}</p>
        </div>
    );
}

// Component for value cards
function ValueCard({ title, content, icon }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}
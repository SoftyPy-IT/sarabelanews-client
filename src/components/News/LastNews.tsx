"use client";
import { sortByDate } from "@/util/sort";
import truncateText from "@/util/truncate";
import Link from "next/link";
import parse from "html-react-parser";
import { formatDate } from "@/util/formateDate";

import Loading from "../Share/_components/Loading";
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData";



const LastNews = () => {

  const { newsData, loading, error } = useSpecificNewsData({  newsTag: 'latest' });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Oops! Data not found.</h3>;
  }

  const sortNewsData = sortByDate(newsData, "postDate");

  return (
    <div
      className="w-full max-h-[200px] lg:max-h-[700px] px-0 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <ul className="divide-y divide-gray-200">
        {sortNewsData?.map((news) => {


          return (
            <li
              key={news?._id}
              className="py-3 md:py-4 transition-colors duration-200"
            >
              <Link
                href={`/${news?.category?.slug ?? 'national'}/${news._id}`}
                className=" "
              >
                <h3
                  className="px-2 text-lg font-semibold line-clamp-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:dark:text-blue-600 transition-colors"
                >
                  {news?.newsTitle}
                </h3>
                <p className="px-2  text-[15px] md:text-[17px] line-clamp-3 text-gray-500">
                  {news?.description
                    ? parse(truncateText(news.description, 250))
                    : ""}
                </p>
                <div className="px-2 flex justify-between items-center text-xs md:text-sm">
                  <span>{formatDate(news?.postDate)}</span>
                  <span className="text-blue-500 hover:text-blue-700">
                    আরও পড়ুন
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LastNews;

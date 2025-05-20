import React from 'react';
import Link from "next/link";
import { TNews } from '@/types';
import Image from 'next/image';
import truncateText from '@/util/truncate';
import parse from 'html-react-parser'
import { sortByDate } from '@/util/sort';
type NewsProps = {
  newsData: TNews[]
}

const LeadNewsCard = ({ newsData }: NewsProps) => {

  const newsLocation3 = newsData.filter(news => news.newsLocation === "Lead-3");
  const sortedNews3 = sortByDate(newsLocation3, "postDate");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedNews3?.slice(0, 3).map((news) => (
        <Link
          key={news._id}
          href={`/${news?.category?.slug ?? 'national'}/${news._id}`}
          className="group flex lg:flex-col flex-row gap-1 md:gap-2"
        >
          <div className="w-full overflow-hidden">
            <div className="h-36 rouned-md w-full relative aspect-[3/2] transform transition-transform duration-500 hover:scale-105">
              <Image
                src={news.images?.[0] || "/placeholder.svg"}
                alt={news.newsTitle}
                className=" w-full h-full object-cover"
                width={300}
                height={200}
                placeholder="blur"
                blurDataURL="/placeholder.svg"
              />
            </div>
          </div>
          <div className="w-full ps-2 lg:pt-2">
            <h2 className="hidden md:block text-[20px] font-semibold  text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:dark:text-blue-600 transition-colors">
              {news.newsTitle }
            </h2>
            <p className="hidden md:block text-[17px] mt-2 text-gray-500">  {news?.description ? parse(truncateText(news.description, 120)) : ""}</p>
            
            
            <h2 className="md:hidden text-[18px] md:text-[20px] font-bold  text-gray-700 dark:text-gray-200 transition-colors">
              {news?.newsTitle ? parse(truncateText(news.newsTitle, 35)) : ""}
            </h2>
            <p className="md:hidden text-[16px] mt-2 text-gray-500">  {news?.description ? parse(truncateText(news.description, 85)) : ""}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeadNewsCard;
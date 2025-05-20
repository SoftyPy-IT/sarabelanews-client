/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { sortByDate } from "@/util/sort";
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData";
import Loading from "../Share/_components/Loading";
import LeadNewsCard from "./LeadNewsCard";

const NewsCard = () => {
  // const basePath = "/international";
  const { newsData, loading, error } = useSpecificNewsData({});




  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Oops! data not found.</h3>;
  }


  const sortNewsData3 = sortByDate(newsData, "postDate");

  const newsLocation = newsData.filter(news => news.newsLocation === "Lead-1");
  const sortNewsData = sortByDate(newsLocation, "postDate");

  const newsLocation2 = newsData.filter(news => news.newsLocation === "Lead-2");
  const sortedNews = sortByDate(newsLocation2, "postDate");


  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* left side */}
        <div className="hidden lg:flex flex-col gap-3 border-e border-gray-500 pe-1">
          {sortedNews?.slice(0, 4)?.map((news) => {
            return (
              <Link
                key={news._id}
                // href={`/${news?.category?.slug ?? 'national'}/${news._id}`}
                href={`/${news?.category?.slug ?? 'national'}/${news._id}`}
                className="flex gap-2 border-b  border-gray-200 pb-2"
              >

                <div className="">
                  <h2 className="text-[20px] font-semibold text-justify text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors leading-[1]">
                    {news.newsTitle}
                  </h2>
                </div>

                <div className="">
                  <div className="w-[100px] relative aspect-[3/2] transform transition-transform duration-500 hover:scale-105">
                    {news.images && news.images.length > 0 && (
                      <Image
                        src={news?.images[0] || "/placeholder.svg"}
                        alt={news?.newsTitle}
                        placeholder="blur"
                        blurDataURL="/placeholder.svg"
                        height={0}
                        width={100}
                        className=""
                      />
                    )}
                  </div>
                </div>

              </Link>
            )
          })}
        </div>


        {/* lead news */}
        <div className="lg:col-span-2">
          {sortNewsData?.slice(0, 1)?.map((news) => (
            <div key={news._id}>
              <Link href={`/${news?.category?.slug ?? 'national'}/${news._id}`} className="block group">
                {news?.images?.[0] && (
                  <Image
                    src={news?.images[0]}
                    alt={news?.newsTitle || "News Image"}
                    width={700}
                    height={100}
                  />
                )}
               
                <div className="p-2 md:p-4 w-full">
                  <h1 className="text-[28px] md:text-3xl lg:text-4xl font-bold  group-hover:text-blue-600 transition-colors leading-[1]">
                    {news.newsTitle}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-500" />

      {/* Bottom News Grid */}

      <LeadNewsCard newsData={sortNewsData3} />

    </div>
  );
};

export default NewsCard;

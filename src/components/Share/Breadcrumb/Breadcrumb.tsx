"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AiFillHome } from "react-icons/ai";

const DynamicBreadcrumb = ({ news }: any) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const validSegments = pathSegments.length > 1 ? [pathSegments[0]] : [];

  return (
    <Breadcrumb className="mb-2">
      <BreadcrumbList className="text-black flex items-center">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <AiFillHome className="w-[18px] lg:w-[17px] h-[18px] lg:h-[17px] dark:text-gray-300" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {validSegments.map((segment) => {
          const href = `/${segment}`;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator className="dark:text-gray-200"/>
              <BreadcrumbItem>
                <BreadcrumbLink href={href} className="dark:text-gray-300">
                  {news?.category?.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;

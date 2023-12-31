import React from "react";
import Link from "next/link";
import Date from "./Date";

const BlogCard = ({ item }) => {
  return (
    <div className="blog_container hover:bg-gray-100 shadow-md sm:w-2/3 lg:w-1/2 text-blue-900 rounded-xl m-2 px-4 mb-8 cursor-pointer flex gap-4  p-2 ">
      <div className="blog_info_container ">
        <h2 className="font-semibold text-xs sm:text-lg ">{item.title}</h2>
        <div className="blog_info flex justify-between mb-2 ">
          <div className="pt-1">
            <h4 className="text-black font-semibold text-[8px] sm:text-[15px]">
              {item.author}
            </h4>
            <p className="text-[6px] sm:text-xs text-slate-600 font-semibold">
              Published on: <Date dateString={item.publishedAt} />
            </p>
          </div>
          <Link href="/post_page">
            <button className="bg-slate-200 hover:bg-slate-700 hover:text-white shadow-lg rounded-lg px-3 py-1 mt-2 text-[6px] sm:text-xs font-bold">
              Read More
            </button>
          </Link>
        </div>
        <p className="pt-2 text-[9px] sm:text-sm text-slate-600 overflow-hidden text-ellipsis flex-nowrap">
          {item.description}
        </p>
      </div>
      <div className="blog_img_container max-w-[100px] lg:max-w-[200px] items-center">
        <img src={item.urlToImage} alt="img" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default BlogCard;

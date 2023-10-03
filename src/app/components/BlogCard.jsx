import React from "react";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <div className="bg-white/80 hover:bg-white text-blue-900 m-2 px-4 py-2 w-1/4 cursor-pointer">
      <div className="blog_img mb-4">
        <img src={item.urlToImage} alt="img" />
      </div>
      <div className="blog_content ">
        <div className="">
          <h4 className="text-black font-semibold">{item.author}</h4>
          <p className="text-xs ">{item.publishedAt}</p>
        </div>
        <h2 className="font-semibold text-xl ">{item.title}</h2>

        <p className="pt-2">{item.description}</p>
      </div>
      <div>
        <Link href="/post_page">
          <button className="bg-violet-950 text-white rounded-xl px-3 py-1 mt-2 text-xs">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import Link from "next/link";

const BlogPagePost = () => {
  return (
    <div className="w-1/2 pt-32 mx-auto text-center">
      <video src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/under-construction-page-4474473-3718727.mp4?h=700"></video>
      <Link href="/blog">
        <button className="shadow-lg text-[10px] sm:text-lg font-semibold text-blue-600 px-4 py-1 hover:bg-blue-950 hover:text-white rounded-lg pt-2">
          Check latest blogs
        </button>
      </Link>
    </div>
  );
};

export default BlogPagePost;

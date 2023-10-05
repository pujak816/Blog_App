import getBlogs from "../../libs/getBlogs";
import BlogCard from "../../components/BlogCard";

const Blog = async () => {
  const data = await getBlogs();
  const blogData = data.articles;
  // console.log(blogData);

  return (
    <>
      <div className="py-10 sm:w-2/3 lg:w-1/2 mx-auto pt-28 px-4">
        <h1 className="text-2xl font-bold tracking-widest">BLOG</h1>
        <p className="text-slate-500">Read our latest articles</p>
      </div>
      <section className="article_section flex flex-wrap justify-center ">
        {blogData &&
          Array.isArray(blogData) &&
          blogData.map((item) => <BlogCard key={item.source.id} item={item} />)}
      </section>
    </>
  );
};

export default Blog;

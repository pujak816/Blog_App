import getBlogs from "../libs/getBlogs";
import BlogCard from "../components/BlogCard";

const Blog = async () => {
  const data = await getBlogs();
  const blogData = data.articles;
  // console.log(blogData);

  return (
    <>
      <h1>All About Tech</h1>
      <section className="flex flex-wrap justify-center">
        {blogData &&
          Array.isArray(blogData) &&
          blogData.map((item) => <BlogCard key={item.source.id} item={item} />)}
      </section>
    </>
  );
};

export default Blog;

import { useEffect, useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState();
  console.log(blogs);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a72b29d753bc4bbc85fdf3ce698d42a8"
    );
    const json = await data.json();
    setBlogs(json);
  };
  return (
    <div>
      {blogs &&
        blogs.map((item) => (
          <div
            className="bg-blue-200 text-blue-900 m-2 px-4 py-2 w-20 aspect-square"
            key={item}
          >
            <p>hello</p>
            <h4>{item.title}</h4>
            <img src={item.urlToImage} alt="img" />
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default BlogsPage;

import getBlogs from "../libs/getBlogs";

const HomePage = async () => {
  const data = await getBlogs();
  const blogData = data.articles;

  return (
    <>
      <section className="main_section p-24">
        <div className="flex flex-wrap bg-white">
          {blogData &&
            Array.isArray(blogData) &&
            blogData.map((item) => (
              <div key={item.source.id} className="w-1/3 p-4">
                <img src={item.urlToImage}></img>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

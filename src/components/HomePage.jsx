import getBlogs from "../libs/getBlogs";

const HomePage = async () => {
  const data = await getBlogs();
  const blogData = data.articles;

  return (
    <>
      <section className="main_section px-24 pt-36 w-2/3 mx-auto">
        <div className="flex flex-wrap bg-white">
          {blogData &&
            Array.isArray(blogData) &&
            blogData.map((item) => (
              <div key={item.source.id} className="w-1/4 p-1">
                <img src={item.urlToImage}></img>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

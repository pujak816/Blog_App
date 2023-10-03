import React from "react";

async function getBlogs() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a72b29d753bc4bbc85fdf3ce698d42a8"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

export default getBlogs;

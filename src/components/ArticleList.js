import React from "react";
import Article from "./Article.js";

function ArticleList({ posts }) {
  const articleElements = posts.map(element => {
    return <Article key={element.id} post={element} />;
  });
  return <main>{articleElements}</main>;
}

export default ArticleList;

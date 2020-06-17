import React from "react";

const Posts = (props) => {
  const images = props.data.map((item) => {
    const { id, img_url } = item;
    return <img src={img_url} key={id}></img>;
  });
  return <div className="imageHolder">{images}</div>;
};

export default Posts;

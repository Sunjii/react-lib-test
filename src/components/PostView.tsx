import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getPost } from "../api/apis";

const id = 9;

const PostView = () => {
  const { isLoading, data } = useQuery(["getPost", id], async () => {
    const data = await getPost(id);
    return data;
  });

  useEffect(() => {
    const d1 = document.getElementById("toto");
    d1?.insertAdjacentHTML("afterend", `<div>${data.content}</div>`);
  }, [isLoading]);

  if (isLoading) return <></>;

  return (
    <div>
      <h1>제목: {data.title}</h1>
      <h2>내용</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: data.content }}></div> */}

      <div id="toto"></div>
    </div>
  );
};

export default PostView;

import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill, { Value } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../api/apis";

const Write = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef<any>();

  const ImageHandler = () => {
    // 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files![0];
      const formData = new FormData();
      formData.append("file", file); // file에 데이터 탑재
      console.log(formData);
      // 백엔드에 이미지를 보낸다.
      try {
        // FIXME: 이미지 업로드시 post 말고, 글 작성시 post 요청하도록 변경
        const result = await axios.post(
          "http://localhost:8000/api/file/images",
          formData
        );

        // URL로 가져오는 방법임..
        // blob 사용?
        console.log("성공::: ", result.data.file_url);
        const IMG_URL = result.data.file_url;
        console.log(result.data);

        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log("실패");
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(value.replace(/"/g, '\\"'));
    createPost({ title: "title", content: value });
  };

  const moduleOption = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image", "video"],
          ["clean"],
        ],
        handlers: {
          image: ImageHandler,
        },
      },
    };
  }, []);

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ReactQuill
          theme="snow"
          ref={quillRef}
          value={value}
          onChange={setValue}
          modules={moduleOption}
        />
        <button type="submit">wrwr</button>
      </form>
      <div>FooTTER</div>
    </div>
  );
};

export default Write;

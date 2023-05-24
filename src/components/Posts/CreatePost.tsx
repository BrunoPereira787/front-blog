import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  return (
    <div className="max-w-5xl mx-auto px-10 py-5">
      <form action="" className="flex flex-col gap-4">
        <Input name="title" text="Titulo" type="text" />
        <Input name="summary" text="Resumo" type="text" />
        <input
          className=" py-2 px-2 border-2 border-slate-400 rounded-lg"
          type="file"
        />
        <ReactQuill
          className=" py-2 px-2 border-2 border-slate-400 rounded-lg"
          modules={modules}
          formats={formats}
        />
        <Button children="criar Post" />
      </form>
    </div>
  );
};

export default CreatePost;

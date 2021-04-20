import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextEditor = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const editor = document.createElement("div");
    wrapperRef.current.append(editor);
    new Quill("#container", { theme: "snow" });

    // dskdsd

    return () => {
      wrapperRef.innerHTML = "";
    };
  }, []);

  return (
    <div id="container" ref={wrapperRef}>
      Text
    </div>
  );
};

export default TextEditor;

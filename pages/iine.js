import styles from "../styles/Home.module.css";
import React from "react";
export default function Home() {
  var pics_src = new Array("/image/1.png", "/image/2.png");
  var num = 0;
  function slideshow() {
    if (num == 1) {
      num = 0;
    } else {
      num++;
    }
    document.getElementById("mypic").src = pics_src[num];
    console.log(pics_src[num]);
  }
  return (
    <div>
      <img
        id="mypic"
        onClick={slideshow}
        src={"/image/1.png"}
        width="400"
        height="300"
      />
    </div>
  );
}


"use client"
import React, { useEffect, useState,useRef } from "react";
import placeholder from "./imagePlaceHolder";

function Image({ title, fotografUrl, marka, width, link }) {

    const imageEl = useRef(null);



  
    useEffect(() => {
      imageEl.current.src = placeholder;
      if (window.IntersectionObserver) {
        let observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
              }
            });
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
          }
        );
        observer.observe(imageEl.current);
      }
    }, [fotografUrl]);
  

  
    return (
  
      <img
        src={placeholder}

        className="image"
        style={{ width: 200, borderRadius: 0, cursor: "pointer" }}
        ref={imageEl}
        data-src={fotografUrl}
        alt={title}
      />
     
    );
  }


  export default Image
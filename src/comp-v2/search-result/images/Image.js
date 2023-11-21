
"use client"
import React, { useEffect,useRef } from "react";
import placeholder from "./imagePlaceHolder";


function Image({ title, src,  alt }) {

    const imageEl = useRef(null);

    function handleClick({ e, url }) {
      e.preventDefault();
      window.open(url, "_blank").focus();
    }
  
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
    }, []);
  

    return (
  
      <img
    
        src={placeholder}
 alt={alt}
        className="image"
        style={{ width: "100%", borderRadius: 10, cursor: "pointer" }}
        ref={imageEl}
        data-src={src}
     
      />
     
    );
  }


  export default Image
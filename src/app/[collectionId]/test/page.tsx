"use client";
import React, { IframeHTMLAttributes, useEffect, useRef } from "react";

const TestimonialWidget = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  let siteUrl = "";
  if (window?.location !== undefined) {
    siteUrl += `${window.location.protocol}//${window.location.hostname}`;
  }

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.origin !== "http://localhost:3000") return;

      if (event.data.type === "RESIZE_IFRAME") {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data.height}px`;
        }
      }

      if (event.data.type === "TESTIMONIAL_TIME_SPENT") {
        console.log(
          "Time spent in testimonial section: ",
          event.data.timeSpent / 1000,
          "seconds"
        );
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="testimonials-widget"
      src="http://localhost:3000/embeds/cm1rg9y2y0003cokjfycj39of/wall-of-fame"
      width="100%"
      height="500px"
      title="Testimonial Widget"
    ></iframe>
  );
};

export default TestimonialWidget;

// import React from "react";

// const page = () => {

//   return (

//   );
// };

// export default page;

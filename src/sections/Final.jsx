// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// import { useRef } from "react";

// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const Final = () => {
//   const videoRef = useRef(null);

//   useGSAP(() => {
//     gsap.set(".final-content", { opacity: 0 });

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".final",
//         start: "top top",
//         end: "90% top",
//         scrub: true,
//         pin: true,
//       },
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".final",
//         start: "top 80%",
//         end: "90% top",
//         scrub: true,
//       },
//     });

//     tl.to(".final-content", {
//       delay: 1,
//       duration: 1,
//       scale: 1,
//       ease: "power1.inOut",
//     });

//     videoRef.current.onloadedmetadata = () => {
//       tl.to(
//         videoRef.current,
//         {
//           currentTime: videoRef.current.duration,
//           duration: 3,
//           ease: "power1.inOut",
//         },
//         "<"
//       );
//     };
//   });

//   return (
//     <section className="final">
//       <div className="final-content size-full">
//         <video
//           ref={videoRef}
//           muted
//           playsInline
//           preload="auto"
//           src="/videos/output3.mp4"
//           className="size-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default Final;

// //*--------------------------------------------------------------
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Final = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(contentRef.current, {
      opacity: 0.8,
      scale: 1,
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "90% top",
        scrub: true,
        pin: true,
      },
    });

    // Content fade & scale in
    tl.to(contentRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    // Video scrub after metadata is ready
    const video = videoRef.current;

    const handleLoaded = () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };

    video.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, []);

  return (
    <section ref={sectionRef} className="final">
      <div ref={contentRef} className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default Final;

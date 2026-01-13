// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// // import { useMaskSettings } from "../../constants";
// import { useRef } from "react";

// const FirstVideo = () => {
//   const videoRef = useRef(null);

//   useGSAP(() => {
//     gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".first-vd-wrapper",
//         start: "top top",
//         end: "+=200% top",
//         scrub: true,
//         pin: true,
//       },
//     });

//     tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
//     tl.to(".first-vd-wrapper", { delay: 1, duration: 2, ease: "power1.inOut" });

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
//   }, []);

//   return (
//     <section className="first-vd-wrapper">
//       <div className="h-dvh">
//         <video
//           ref={videoRef}
//           muted
//           playsInline
//           preload="auto"
//           src="/videos/output1.mp4"
//           className="first-vd"
//         />
//       </div>
//     </section>
//   );
// };

// export default FirstVideo;

//*-------------------------------------------------------------------------------------------------------------------------------
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FirstVideo = () => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;

    // Initial state
    gsap.set(wrapper, {
      marginTop: "-150vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // Fade out hero
    tl.to(".hero-section", {
      delay: 0.5,
      opacity: 0,
      ease: "power1.inOut",
    });

    // Show video section
    tl.to(wrapper, {
      opacity: 1,
      delay: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    // Scrub video on scroll
    video.addEventListener("loadedmetadata", () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          ease: "power1.inOut",
          duration: 3,
        },
        "<"
      );
    });
  }, []);

  return (
    <section ref={wrapperRef} className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          src="/videos/output1.mp4"
          muted
          playsInline
          preload="auto"
          className="first-vd"
        />
      </div>
    </section>
  );
};

export default FirstVideo;

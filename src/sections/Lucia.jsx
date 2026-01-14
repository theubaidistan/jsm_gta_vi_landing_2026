import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
  useGSAP(() => {
    gsap.set(".lucia-life", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".lucia-life .img-box",
      {
        scrollTrigger: {
          trigger: ".lucia-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-4.webp" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-7.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Places</h1>
          <h2>
            Tour a few of the must-see destinations across the sunshine state.
          </h2>
          <p>
            Largest and most detailed map so far. The world includes Vice City
            (a modern Miami-inspired metropolis with South Beach–style
            coastlines, downtown skyscrapers, nightlife districts, ports, and
            highways), surrounding Vice City suburbs, Mall zones, and trailer
            parks.
          </p>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-5.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          The map blends dense urban life, crime-heavy rural zones, tropical
          coastlines, and remote wilderness into one continuous open world,
          making Leonida the most diverse GTA setting to date.
        </p>
      </div>
    </section>
  );
};

export default Lucia;

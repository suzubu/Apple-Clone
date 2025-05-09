/**
 * Highlights.jsx
 *
 * This component renders a section that introduces key product highlights.
 * It features a title, interactive links with icons, and a video carousel.
 * GSAP is used to fade in the title and link elements when the section loads.
 */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  // Fade in the title and stagger the link animations on mount
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 20 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    // Main highlights section with full width, padding, and background
    <section
      id="hightlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        {/* Top row: title on the left, interactive links on the right */}
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading ">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap justify-end gap-5">
            {/* Interactive link with icon */}
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            {/* Interactive link with icon */}
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>

        {/* Embedded carousel of video highlights */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

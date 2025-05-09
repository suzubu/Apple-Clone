// Imports and responsive video asset logic
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  // Detects screen width and sets video source accordingly
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // Update video source on window resize
  const handleVideoSrcSet = () => {
    setvideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  // GSAP fade-in animations for hero title and CTA
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        {/* Hero title */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* Responsive video */}
        <div className="md:w-10/12 w-9/12">
          <video
            id="hero-video"
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call-to-action block */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

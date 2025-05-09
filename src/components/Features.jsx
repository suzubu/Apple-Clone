/****
 * Features.jsx
 *
 * This section highlights the titanium design of the iPhone 15 Pro.
 * It includes a scroll-triggered video and two scroll-animated images and text blocks.
 * GSAP animations are used to fade/scale elements into view as the user scrolls.
 */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  // Reference to control video playback when it scrolls into view
  const videoRef = useRef();

  // Scroll-triggered animations for title, video, images, and text
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      // Fade in and play video when it reaches the viewport
      onComplete: () => {
        videoRef.current.play();
      },
    });

    // Slide in section title from below
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    // Scale in feature images with a smooth easing and scrub timing
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    // Fade and slide in supporting text paragraphs
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  // Render section with title, subheadings, video, and descriptive text/images
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          {/* Main heading for the feature section */}
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        {/* Device headline split into two large title lines */}
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>
          {/* Scroll-triggered promotional video */}
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                {/* Image showcasing titanium build – animated on scroll */}
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                {/* Image showcasing titanium build – animated on scroll */}
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                {/* Descriptive text for titanium features – animated on scroll */}
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is {""}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>
                {/* Descriptive text for titanium features – animated on scroll */}
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight rations of
                    any metal, making these our {""}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

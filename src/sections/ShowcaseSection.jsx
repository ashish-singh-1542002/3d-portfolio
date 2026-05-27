import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 2,
    image: "/images/project.png",
    alt: "Movie Recommendation System",
    title: "Movie Recommendation System",
    bg: "#FFEFDB",
    github: "https://github.com/ashish-singh-1542002/Recommendation-System.git",
    live: "https://dgdbp9uecfgjypwjnrazpx.streamlit.app/##movie-recommendation-system",
  },
  {
    id: 3,
    image: "/images/project.png",
    alt: "Loan Default Risk Analysis Dashboard ",
    title: "Loan Default Risk Analysis Dashboard ",
    bg: "#FFE7EB",
    live: "https://app.powerbi.com/links/MCZqgElWOu?ctid=edc5c3bf-4ab5-4697-84fa-41b44eb08b5e&pbi_source=linkShare",
  },
  {
    id: 4,
    image: "/images/project.png",
    alt: "Demand Forecasting Model",
    title: "Demand Forecasting Model",
    bg: "#E8FFE7",
    github: "https://github.com/ashish-singh-1542002/Demand-Forecasting-Model",
  },
  {
    id: 5,
    image: "/images/project.png",
    alt: "Custom Guns Object Detection",
    title: "Custom Guns Object Detection",
    bg: "#F3E8FF",
    github: "https://github.com/ashish-singh-1542002/Custom-Guns-object-detection/tree/main/Code",
  },
  {
    id: 6,
    image: "/images/project.png",
    alt: "Whatsapp Chat Analyzer",
    title: "Whatsapp Chat Analyzer",
    bg: "#F3E8FF",
    github: "https://github.com/ashish-singh-1542002/wassup-chat",
    live: "https://bmcnupw22p8wwdfcs8bi7i.streamlit.app/"
  }
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Helper to assign refs dynamically
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useGSAP(() => {
    // Section fade in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each card on scroll
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 md:px-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project"
              ref={(el) => setCardRef(el, index)}
            >
              <div
                className="image-wrapper"
                style={{ backgroundColor: project.bg }}
              >
                <img src={project.image} alt={project.alt} />
              </div>
              <h2>{project.title}</h2>
              <div className="flex gap-3 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded-lg bg-white text-black hover:bg-white/80 transition-all"
                >
                  Live ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
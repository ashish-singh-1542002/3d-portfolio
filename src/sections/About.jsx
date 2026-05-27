import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-photo",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      }
    );
  });

  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
            🙋‍♂️ Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col xl:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Photo - Passport Size */}
          <div className="about-photo flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/30 to-white/5" />
              <div className="relative w-[160px] h-[200px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/images/photoAsh.jpeg"
                  alt="Ashish Singh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-white font-semibold text-sm">Ashish Singh</p>
                <p className="text-white/50 text-xs">Data Scientist</p>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="about-text card-border rounded-2xl p-8 flex-1">
            <p className="text-white/80 text-base leading-relaxed">
              I'm an aspiring{" "}
              <span className="text-white font-medium">Data Scientist</span>{" "}
              with around 1–2 years of hands-on experience building and deploying machine learning
              models across domains like computer vision, time series forecasting, and NLP. I have
              a solid grip on the full ML workflow — from{" "}
              <span className="text-white font-medium">
                data cleaning and feature engineering
              </span>{" "}
              to model training, evaluation, and deployment. My core stack includes{" "}
              <span className="text-white font-medium">
                Python, Scikit-learn, TensorFlow, PyTorch, XGBoost, and Pandas
              </span>
              , and I'm comfortable working with both structured and unstructured data. On the
              backend side, I build lightweight inference APIs using{" "}
              <span className="text-white font-medium">FastAPI and PostgreSQL</span>, making models
              accessible in real-world applications. I'm driven by turning raw data into meaningful
              insights and scalable solutions that actually work in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
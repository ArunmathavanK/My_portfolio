import { RevealOnScroll } from "../RevealOnScroll";
import arunImage from "../../assets/AN.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        {/* <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-8 max-w-6xl mx-auto"> */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-12">

          
          {/* Left: Image */}
          <div className="hidden md:flex md:flex-1 justify-center">
            <img
              src={arunImage}
              alt="Arunmathavan"
              className="w-92 h-99 object-contain shadow-xl p-2"
            />
          </div>

          {/* Right: Text content */}
          <div className="md:flex-1">
            <h1 className="text-3xl lg:text-7xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I am Arunmathavan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I have a strong foundation in programming knowledge in Python and
              JavaScript. I am passionate about problem-solving and delivering
              efficient, user-focused solutions. I am also committed to
              continuous learning and contributing to impactful projects.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1B58OsFihEG__5BEDMbGUmVR3NNlV1oNg/view?usp=sharing"
                target="_blank"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll"

export const Home=() => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">

    <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-3xl lg:text-7xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hi, I am Arunmathavan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I have a strong foundation in Programming knowledge in Python and JavaScript. I am passionate about problem-solving and delivering efficient, user-focused
                solutions.And also I have committed to continuous learning and contributing to impactful projects.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                   hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>
                <a href="https://drive.google.com/file/d/1B58OsFihEG__5BEDMbGUmVR3NNlV1oNg/view?usp=sharing" target="_blank" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200                   
                   hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Get Resume
                </a>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}
import { Github } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow hover:shadow-blue-500/20 transition-shadow duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex justify-center items-center mt-4 gap-3">Blog Project
                    <a href="https://github.com/ArunmathavanK/Blog" target="_blank" rel="noopener noreferrer" className="text-black-400 hover:text-white-300 transition-colors" aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5"/>
                    </a>
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  Built a scalable blog engine using Django with multi-tenancy architecture, supporting user role-based access and custom domain handling.Implemented 
                  secure media storage via AWS S3, integrated email notifications, and
                  optimized per formance with pagination and NGINX.
                </p>

                <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                        {tech}
                    </span>
                     ))}
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow hover:shadow-blue-500/20 transition-shadow duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex justify-center items-center mt-4 gap-3">Schemify
                    <a href="https://github.com/ArunmathavanK/Schemify_chatbot" target="_blank" rel="noopener noreferrer" className="text-black-400 hover:text-white-300 transition-colors" aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5"/>
                    </a>
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  Built a user-friendly chatbot to help citizens navigate government schemes and eligibility criteria. Implemented a search-friendly interface, making 
                  information access 40% faster.It helped to increased accessibility for end users with simplified information retrieval
                </p>

                <div className="flex flex-wrap gap-2">
                    {['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                        {tech}
                    </span>
                     ))}
                </div>
              </div>

               <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow hover:shadow-blue-500/20 transition-shadow duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex justify-center items-center mt-4 gap-3">To_Do_list
                    <a href="https://github.com/ArunmathavanK/to__do" target="_blank" rel="noopener noreferrer" className="text-black-400 hover:text-white-300 transition-colors" aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5"/>
                    </a>
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                 A4 Class Survey is a simple, web-based survey system built for class members to vote and share their opinions on different topics through interactive survey questions.
                </p>

                <div className="flex flex-wrap gap-2">
                    {['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite'].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                        {tech}
                    </span>
                     ))}
                </div>
              </div>
            
            </div>
          </div>
        </RevealOnScroll>
    </section>
  );
}
            
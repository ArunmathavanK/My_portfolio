import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {

    const frontendSkills = ['React','TailwindCSS','JavaScript'];
    const backendsSkills = ['Python','Django','JavaScript','AWS','PostgreSql', 'Mysql']

    return (
    <section id='about' className="min-h-screen px-4 py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 About me</h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate deveoper with experetise in building calabel webs
                </p>
                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendsSkills.map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-2 text-white">
                        <span className="text-3xl">🎓</span>
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Education
                        </span>
                    </h3>

                    <ul className="space-y-6 text-gray-200">
                        <li className="border-l-4 border-blue-400 pl-4">
                           <h4 className="text-lg font-semibold text-white">B.E in Computer Science</h4>
                           <p className="text-sm">
                               Government College of Engineering, Tirunelveli <br />
                               <span className="text-cyan-400">2020 – 2024</span><br />
                               <span>Percentage: 78%</span>
                           </p>
                        </li>

                        <li className="border-l-4 border-blue-400 pl-4">
                            <h4 className="text-lg font-semibold text-white">Higher Secondary Certificate (HSC)</h4>
                            <p className="text-sm">
                                Grama Committee Higher Secondary School, Venkateswarapuram <br />
                                <span className="text-cyan-400">2020</span><br />
                                <span>Percentage: 80%</span>
                            </p>
                        </li>

                        <li className="border-l-4 border-blue-400 pl-4">
                            <h4 className="text-lg font-semibold text-white">Secondary School Leaving Certificate (SSLC)</h4>
                            <p className="text-sm">
                                Grama Committee Higher Secondary School, Venkateswarapuram <br />
                                <span className="text-cyan-400">2018</span><br />
                                <span>Percentage: 87%</span>
                            </p>
                        </li>
                    </ul>
                </div>
                                 

                <div className="p-6 rounded-xl border-white/10 border bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-2 text-white">
                        <span className="text-2xl">💼</span>
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                           Work Experience
                        </span>
                    </h3>

                    <div className="space-y-6 text-gray-200">
                        <div className="border-l-4 border-blue-400 pl-4">
                            <h4 className="text-lg font-semibold text-white">Intern - NSIC, Chennai</h4>
                                <p className="text-sm text-gray-300">
                                National Small Industries Corporation <br />
                                    <span className="text-blue-300">2023</span><br />
                                 Completed a 1-month internship focused on exploring mobile app development. Built 2-3 basic Android applications using <strong>Java</strong> in <strong>Android Studio</strong> with guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
);
}
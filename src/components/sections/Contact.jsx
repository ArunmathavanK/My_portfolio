import { useState,useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log(form.current);
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
               .then((result) =>{
                   alert("Message Sent");
                   setFormData({name: "", email: "", message: ""})
                }).catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Oops Something went wrong. Try again');
    });
}
    return (
      <section id ="contact" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="px-4 w-full max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {""}
                    Get In Touch
                </h2>
                <form  ref={form}  className="space-y-6" onSubmit={handleSubmit}>   
                   <div className="relative">
                       <input type="text" 
                              id="name" 
                              name="name" 
                              value={formData.name}
                              placeholder="Name..." 
                              required
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })
                            }
                              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       />
                   </div>

                   <div className="relative">
                       <input type="email" 
                              id="email" 
                              name="email" 
                              value={formData.email}
                              placeholder="abc@gmail.com" 
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })
                            }
                              required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       />
                   </div>

                   <div className="relative">
                       <textarea id="message" 
                                 name="message" 
                                 value={formData.message}
                                 placeholder="Your message..." 
                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })
                            }
                                 required rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                       />
                   </div>

                   <button type="submit" 
                           className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.4)]">
                           Send Message
                   </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
    );
}
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex justify-center items-center">
        
        {/* Left side - Name */}
        <p className="text-sm flex justify-center md:text-left">
          ©    Arunmathavan  {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

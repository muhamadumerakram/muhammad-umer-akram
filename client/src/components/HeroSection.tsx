import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [profileImage, setProfileImage] = useState<string>("/profile.jpg");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // We'll place the PDF in public assets
    link.download = 'Muhammad_Umer_Akram_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full"
          animate={{ y: [-15, 25, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full"
          animate={{ y: [-10, 30, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          className="glassmorphism rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Avatar */}
          <motion.div 
            className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-8 flex items-center justify-center relative group cursor-pointer overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => document.getElementById('profile-upload')?.click()}
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Muhammad Umer Akram" 
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <i className="fas fa-user text-4xl text-white"></i>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fas fa-camera text-white text-xl"></i>
            </div>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Muhammad Umer Akram
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-blue-100 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Quality Assurance Engineer | Test Automation Specialist
          </motion.h2>
          
          <motion.p 
            className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Ensuring software excellence through innovative testing strategies and automation frameworks. 
            2+ years of experience delivering quality solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              onClick={handleDownloadResume}
              className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center hover-lift"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-all hover-lift"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

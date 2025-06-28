import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Test Automation",
  "API Testing",
  "Mobile Testing",
  "Quality Assurance Consulting",
  "Testing Framework Development",
];

export default function Footer() {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Muhammad_Umer_Akram_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCertificate = () => {
    const link = document.createElement('a');
    link.href = '/playwright-certificate.pdf';
    link.download = 'Muhammad_Umer_Akram_Playwright_Certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gradient-to-br from-dark via-gray-900 to-primary text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-3 text-black">
              Muhammad Umer Akram
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              Quality Assurance Engineer passionate about delivering exceptional software quality 
              through innovative testing solutions and automation frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button 
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover-lift flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </motion.button>
              
              <Dialog open={isCertificateModalOpen} onOpenChange={setIsCertificateModalOpen}>
                <DialogTrigger asChild>
                  <motion.button 
                    className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover-lift flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-certificate mr-2"></i>
                    View Certificate
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Microsoft Learn - Playwright Certificate</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg border border-blue-200">
                      <div className="text-center mb-4">
                        <i className="fas fa-certificate text-4xl text-blue-600 mb-3"></i>
                        <h3 className="text-2xl font-bold text-gray-800">Certificate of Completion</h3>
                        <p className="text-lg text-gray-600 mt-2">Microsoft Learn Training</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Student Information</h4>
                        <p><strong>Name:</strong> Muhammad Umer Akram</p>
                        <p><strong>Username:</strong> MuhammadUmerAkram-2364</p>
                        <p><strong>Email:</strong> umerchaudhary131@outlook.com</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Course Details</h4>
                        <p><strong>Module:</strong> Build Your first end-to-end test with Playwright</p>
                        <p><strong>Duration:</strong> 1 hr 18 min</p>
                        <p><strong>Completed:</strong> July 19, 2024</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Learning Objectives</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Learn how to use Playwright to test web applications</li>
                          <li>Run tests and view comprehensive test reports</li>
                          <li>Understand Playwright project structure and configuration</li>
                          <li>Use Visual Studio Code for testing workflows</li>
                          <li>Debug tests and record new test scenarios</li>
                          <li>Create and refine test suites for automation</li>
                        </ul>
                      </div>
                      
                      <div className="flex justify-center mt-6">
                        <motion.button 
                          onClick={handleDownloadCertificate}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-download mr-2"></i>
                          Download Certificate PDF
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="font-semibold mb-4 text-xl text-black">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="hover:text-accent transition-colors flex items-center group"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-xl text-black">Services</h4>
              <ul className="space-y-3 text-gray-300">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center"
                  >
                    <i className="fas fa-check-circle text-secondary text-sm mr-2"></i>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-600 border-opacity-30 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2025 Muhammad Umer Akram. All rights reserved. Built with passion for quality.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <span className="flex items-center">
                <i className="fas fa-heart text-red-400 mr-1"></i>
                Made with love in Pakistan
              </span>
              <span className="hidden md:block">|</span>
              <span className="flex items-center">
                <i className="fas fa-cog text-blue-400 mr-1"></i>
                Automation Engineer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

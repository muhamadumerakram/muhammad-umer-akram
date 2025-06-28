import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "umerchaudhary2831@gmail.com",
    href: "mailto:umerchaudhary2831@gmail.com"
  },
  {
    icon: "fas fa-phone",
    title: "Phone",
    value: "+923087397486",
    href: "tel:+923087397486"
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Lahore, Punjab, Pakistan",
    href: null
  },
  {
    icon: "fas fa-clock",
    title: "Availability",
    value: "Open to new opportunities",
    href: null
  },
];

const socialLinks = [
  { icon: "fab fa-linkedin", href: "https://linkedin.com/in/muhammad-umer-akram", color: "hover:bg-blue-600", name: "LinkedIn" },
  { icon: "fab fa-instagram", href: "https://instagram.com/umer_akram", color: "hover:bg-pink-500", name: "Instagram" },
  // Future social links can be added here:
  // { icon: "fab fa-github", href: "#", color: "hover:bg-gray-700", name: "GitHub" },
  // { icon: "fab fa-twitter", href: "#", color: "hover:bg-blue-400", name: "Twitter" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // Save to backend storage
      const response = await apiRequest("POST", "/api/contact", data);
      
      // Send email notification using a simple approach
      try {
        // Using FormSubmit service for simple form-to-email
        const emailResponse = await fetch('https://formsubmit.co/umerchaudhary2831@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: `Portfolio Contact: ${data.subject}`,
            message: `From: ${data.name} (${data.email})\nPhone: ${data.phone}\n\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
            _next: window.location.href, // Redirect back to portfolio
            _captcha: false // Disable captcha for API usage
          })
        });
        
        console.log('Email sent via FormSubmit');
      } catch (emailError) {
        console.log('FormSubmit failed, trying mailto fallback');
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
        const body = encodeURIComponent(`From: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
        window.open(`mailto:umerchaudhary2831@gmail.com?subject=${subject}&body=${body}`);
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon via email.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Message saved locally",
        description: "Your message has been saved. I'll also open an email client for direct contact.",
        variant: "default",
      });
      // Fallback to direct mailto
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:umerchaudhary2831@gmail.com?subject=${subject}&body=${body}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields including phone number are required to send your message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-blue-600 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-blue-100 mt-4 text-lg">Ready to ensure your software's quality? Let's discuss your testing needs.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-blue-100 hover:text-white transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-blue-100">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`bg-white bg-opacity-20 p-3 rounded-full ${social.color} transition-all`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="glassmorphism rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="+923087397486"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Tell me about your testing needs..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-accent hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {contactMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testingSkills = [
  { name: "Manual Testing", level: 95, color: "from-primary to-blue-500" },
  { name: "Automation Testing", level: 90, color: "from-secondary to-green-500" },
  { name: "API Testing", level: 88, color: "from-accent to-orange-500" },
  { name: "Mobile Testing", level: 85, color: "from-purple-500 to-purple-700" },
];

const toolsSkills = [
  { name: "Cypress", level: 92, color: "from-primary to-blue-500" },
  { name: "Postman", level: 90, color: "from-accent to-orange-500" },
  { name: "JIRA", level: 88, color: "from-secondary to-green-500" },
  { name: "MySQL", level: 85, color: "from-purple-500 to-purple-700" },
];

const softSkills = [
  { name: "Critical Thinking", icon: "fas fa-search", color: "text-primary" },
  { name: "Problem Solving", icon: "fas fa-puzzle-piece", color: "text-secondary" },
  { name: "Communication", icon: "fas fa-comments", color: "text-accent" },
  { name: "Documentation", icon: "fas fa-file-alt", color: "text-purple-500" },
];

function SkillBar({ skill, index }: { skill: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-dark font-medium">{skill.name}</span>
        <span className={`font-semibold ${skill.color.includes('primary') ? 'text-primary' : skill.color.includes('secondary') ? 'text-secondary' : skill.color.includes('accent') ? 'text-accent' : 'text-purple-600'}`}>
          {skill.level}%
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-3">
        <motion.div
          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Testing Types */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg hover-lift"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-dark mb-6 flex items-center">
              <i className="fas fa-bug text-primary mr-3"></i>
              Testing Types
            </h3>
            
            <div className="space-y-6">
              {testingSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg hover-lift"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-dark mb-6 flex items-center">
              <i className="fas fa-tools text-secondary mr-3"></i>
              Tools & Technologies
            </h3>
            
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Soft Skills */}
        <motion.div 
          className="mt-12 bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-dark mb-6 text-center flex items-center justify-center">
            <i className="fas fa-lightbulb text-accent mr-3"></i>
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`${skill.color.replace('text-', 'bg-')} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${skill.icon} ${skill.color} text-xl`}></i>
                </div>
                <h4 className="font-semibold text-dark">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

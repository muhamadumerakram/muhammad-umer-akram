import { motion } from "framer-motion";

const achievements = [
  { 
    icon: "fas fa-chart-line", 
    value: "95%", 
    label: "Bug Detection Rate",
    color: "from-primary to-blue-600",
    textColor: "text-blue-100"
  },
  { 
    icon: "fas fa-clock", 
    value: "70%", 
    label: "Reduced Testing Time",
    color: "from-secondary to-green-600",
    textColor: "text-green-100"
  },
  { 
    icon: "fas fa-calendar-alt", 
    value: "2+", 
    label: "Years Experience",
    color: "from-accent to-orange-600",
    textColor: "text-orange-100"
  },
  { 
    icon: "fas fa-robot", 
    value: "100+", 
    label: "Test Cases Automated",
    color: "from-purple-500 to-purple-700",
    textColor: "text-purple-100"
  },
];

const traits = [
  { label: "Analytical", color: "bg-primary" },
  { label: "Detail-Oriented", color: "bg-secondary" },
  { label: "Collaborative", color: "bg-accent" },
  { label: "Problem Solver", color: "bg-gray-600" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">Professional Summary</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Software Quality Assurance Engineer with 2+ years of experience at MailMunch, 
              specializing in test automation, API testing, and comprehensive QA processes. My analytical mindset 
              and attention to detail drive me to ensure software excellence in every project.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Lahore, Punjab, Pakistan, I hold a BS in Computer Science from MNS University of Agriculture, 
              Multan. I'm passionate about transforming manual testing processes into efficient automated solutions 
              that deliver measurable business impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {traits.map((trait, index) => (
                <motion.span
                  key={trait.label}
                  className={`${trait.color} text-white px-4 py-2 rounded-full text-sm`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {trait.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className={`bg-gradient-to-br ${achievement.color} p-6 rounded-xl text-white text-center hover-lift`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <i className={`${achievement.icon} text-3xl mb-4`}></i>
                <h4 className="text-2xl font-bold mb-2">{achievement.value}</h4>
                <p className={achievement.textColor}>{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

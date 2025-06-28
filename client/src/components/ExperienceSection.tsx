import { motion } from "framer-motion";

const responsibilities = [
  "Developed comprehensive test automation frameworks",
  "Conducted thorough API testing using Postman",
  "Implemented CI/CD testing with GitHub Actions",
  "Managed bug tracking and reporting in JIRA",
];

const technologies = [
  "Cypress", "Postman", "JIRA", "MySQL", "GitHub Actions", "Confluence"
];

const achievements = [
  { value: "95%", label: "Bug Detection Rate", color: "text-secondary" },
  { value: "70%", label: "Reduced Testing Time", color: "text-accent" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* MailMunch Experience */}
          <motion.div 
            className="relative pl-8 pb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
            {/* Timeline Dot */}
            <motion.div 
              className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            
            <motion.div 
              className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white shadow-lg hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Software Quality Assurance Engineer</h3>
                  <h4 className="text-xl text-blue-100 mb-2">MailMunch</h4>
                  <p className="text-blue-200">December 2022 - Present</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Current Role</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold mb-3 text-blue-100">Key Responsibilities:</h5>
                  <ul className="space-y-2 text-blue-50">
                    {responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <i className="fas fa-check-circle text-secondary mr-2 mt-1"></i>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-blue-100">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white border-opacity-20 pt-6">
                <h5 className="font-semibold mb-4 text-blue-100">Key Achievements:</h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      className="bg-white bg-opacity-10 p-4 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className={`text-2xl font-bold ${achievement.color} mb-1`}>{achievement.value}</div>
                      <div className="text-blue-100 text-sm">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

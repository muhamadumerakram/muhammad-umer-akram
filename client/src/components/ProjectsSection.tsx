import { motion } from "framer-motion";

const projects = [
  {
    title: "MailMunch Platform",
    category: "Web Testing",
    icon: "fas fa-envelope",
    color: "from-primary to-blue-600",
    description: "End-to-end testing of email marketing platform including form builders, email campaigns, and analytics dashboard with automated testing frameworks.",
    approaches: [
      "Automated E2E testing with Cypress",
      "API testing with Postman collections",
      "Cross-browser compatibility testing",
    ],
    tags: ["Cypress", "API Testing", "Automation"],
    tagColor: "bg-primary text-white"
  },
  {
    title: "Shopbae Mobile App",
    category: "Mobile Testing",
    icon: "fas fa-shopping-bag",
    color: "from-accent to-orange-600",
    description: "Comprehensive mobile application testing for e-commerce platform focusing on payment integration, user flows, and performance across various mobile devices.",
    approaches: [
      "Device compatibility testing",
      "Payment gateway integration testing",
      "User journey and usability testing",
    ],
    tags: ["Mobile", "TestFlight", "E-commerce"],
    tagColor: "bg-accent text-white"
  },
  {
    title: "Farm Data Analytical System",
    category: "Android Testing",
    icon: "fas fa-seedling",
    color: "from-secondary to-green-600",
    description: "Comprehensive testing of agricultural data management system focusing on data accuracy, user experience, and performance optimization across Android devices.",
    approaches: [
      "Functional testing across multiple Android versions",
      "Performance testing with large datasets",
      "UI/UX validation and accessibility testing",
    ],
    tags: ["Android", "Manual Testing", "Performance"],
    tagColor: "bg-secondary text-white"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Projects Showcase</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <motion.i 
                  className={`${project.icon} text-white text-3xl mb-4`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                />
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Testing Approaches:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {project.approaches.map((approach, approachIndex) => (
                      <motion.li
                        key={approachIndex}
                        className="text-gray-700 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: approachIndex * 0.1 }}
                      >
                        • {approach}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className={`${project.tagColor} px-2 py-1 rounded text-xs`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

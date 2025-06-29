import { motion } from "framer-motion";

const tools = [
  { name: "Cypress", icon: "fas fa-cog", color: "text-primary" },
  { name: "Postman", icon: "fas fa-mail-bulk", color: "text-accent" },
  { name: "TestFlight", icon: "fas fa-plane", color: "text-blue-500" },
  { name: "JIRA", icon: "fas fa-tasks", color: "text-blue-600" },
  { name: "MySQL", icon: "fas fa-database", color: "text-yellow-600" },
  { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
  { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
  { name: "Docker", icon: "fab fa-docker", color: "text-blue-400" },
  { name: "Confluence", icon: "fas fa-book", color: "text-blue-700" },
  { name: "Slack", icon: "fab fa-slack", color: "text-purple-600" },
  { name: "Terminal", icon: "fas fa-terminal", color: "text-gray-700" },
  { name: "Loom", icon: "fas fa-video", color: "text-red-500" },
];

export default function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Tools & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="bg-light-gray p-6 rounded-xl text-center hover-lift group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className={`${tool.icon} ${tool.color} group-hover:text-secondary text-3xl mb-3 transition-colors`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              <h3 className="font-semibold text-dark text-sm">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

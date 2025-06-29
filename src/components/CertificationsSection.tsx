import { motion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft Playwright",
    description: "Certified in end-to-end testing automation",
    icon: "fas fa-certificate",
    color: "bg-blue-600",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-600"
  },
  {
    title: "QA Professional Development",
    description: "Advanced testing methodologies and best practices",
    icon: "fas fa-graduation-cap",
    color: "bg-secondary",
    status: "In Progress",
    statusColor: "bg-green-100 text-secondary"
  },
  {
    title: "Continuous Learning",
    description: "Staying updated with latest testing trends and tools",
    icon: "fas fa-book-open",
    color: "bg-accent",
    status: "Ongoing",
    statusColor: "bg-orange-100 text-accent"
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Certifications & Learning</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <i className={`${cert.icon} text-white text-xl`}></i>
              </motion.div>
              <h3 className="text-lg font-semibold text-dark mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
              <motion.span 
                className={`${cert.statusColor} px-3 py-1 rounded-full text-xs`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                {cert.status}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

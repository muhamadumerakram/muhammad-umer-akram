import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-cog",
    color: "bg-secondary",
    text: "20+ Test Suites covering critical user journeys"
  },
  {
    icon: "fas fa-robot",
    color: "bg-primary",
    text: "100+ Automated Test Cases with POM architecture"
  },
  {
    icon: "fas fa-sync-alt",
    color: "bg-accent",
    text: "GitHub Actions CI/CD pipeline integration"
  },
  {
    icon: "fas fa-cloud",
    color: "bg-purple-500",
    text: "AWS integration for comprehensive reporting"
  },
];

const codeSnippet = `// Cypress Test Suite Example
describe('User Authentication', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('user@test.com')
    cy.get('[data-cy=password]').type('password123')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})`;

export default function AutomationFrameworkSection() {
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
          <h2 className="text-4xl font-bold text-dark mb-4">Automation Framework</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">Cypress Test Framework</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Built a comprehensive test automation framework using Cypress with Page Object Model (POM) architecture, 
              integrated with GitHub Actions for continuous testing and AWS for detailed reporting.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`${feature.color} w-4 h-4 rounded-full mr-4 flex items-center justify-center`}>
                    <i className={`${feature.icon} text-white text-xs`}></i>
                  </div>
                  <span className="text-dark">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Framework Documentation
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <pre className="whitespace-pre-wrap">
              <code>
                <span className="text-blue-400">// Cypress Test Suite Example</span>
                {'\n'}
                <span className="text-purple-400">describe</span>
                <span className="text-white">(</span>
                <span className="text-yellow-300">'User Authentication'</span>
                <span className="text-white">, () =&gt; {'{'}</span>
                {'\n  '}
                <span className="text-purple-400">it</span>
                <span className="text-white">(</span>
                <span className="text-yellow-300">'should login successfully'</span>
                <span className="text-white">, () =&gt; {'{'}</span>
                {'\n    '}
                <span className="text-blue-400">cy</span>
                <span className="text-white">.visit(</span>
                <span className="text-yellow-300">'/login'</span>
                <span className="text-white">)</span>
                {'\n    '}
                <span className="text-blue-400">cy</span>
                <span className="text-white">.get(</span>
                <span className="text-yellow-300">'[data-cy=email]'</span>
                <span className="text-white">).type(</span>
                <span className="text-yellow-300">'user@test.com'</span>
                <span className="text-white">)</span>
                {'\n    '}
                <span className="text-blue-400">cy</span>
                <span className="text-white">.get(</span>
                <span className="text-yellow-300">'[data-cy=password]'</span>
                <span className="text-white">).type(</span>
                <span className="text-yellow-300">'password123'</span>
                <span className="text-white">)</span>
                {'\n    '}
                <span className="text-blue-400">cy</span>
                <span className="text-white">.get(</span>
                <span className="text-yellow-300">'[data-cy=submit]'</span>
                <span className="text-white">).click()</span>
                {'\n    '}
                <span className="text-blue-400">cy</span>
                <span className="text-white">.url().should(</span>
                <span className="text-yellow-300">'include'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'/dashboard'</span>
                <span className="text-white">)</span>
                {'\n  '}
                <span className="text-white">{'}'}</span>
                {'\n'}
                <span className="text-white">{'}'}</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Backend & Frameworks',
        skills: ['Java', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Redis', 'C++']
      },
      {
        title: 'Frontend & Full Stack',
        skills: ['React.js', 'MERN Stack', 'ServiceNow']
      },
      {
        title: 'AI/ML & Tools',
        skills: ['LLM', 'AI Agents', 'Agentic Workflows', 'MCP Server', 'Postman', 'Swagger', 'GitHub', 'DSA']
      }
    ];

    return (
      <section id="skills" className="perspective-container transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)'}} data-name="skills" data-file="components/Skills.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card slide-up-3d" style={{animationDelay: `${index * 0.15}s`}}>
                <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: 'var(--bg-light)', color: 'var(--primary-color)'}}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
function Projects() {
  try {
    const projects = [
      {
        title: 'Scalable Backend System',
        description: 'Secure and efficient backend architecture with Redis caching, session handling, and horizontal scaling capabilities.',
        tech: ['Node.js', 'Redis', 'REST APIs', 'MongoDB'],
        link: '#'
      },
      {
        title: 'AI Agent Integration',
        description: 'Built agentic workflows and MCP server implementation for real-world AI/ML solutions.',
        tech: ['LLM', 'AI Agents', 'Node.js', 'Python'],
        link: '#'
      },
      {
        title: 'ServiceNow Integration',
        description: 'Integrated backend APIs with ServiceNow for business process automation and workflow management.',
        tech: ['Java', 'ServiceNow', 'REST APIs', 'Swagger'],
        link: '#'
      }
    ];

    return (
      <section id="projects" className="bg-[var(--bg-light)] perspective-container" data-name="projects" data-file="components/Projects.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card flip-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 rounded text-sm" style={{backgroundColor: 'var(--bg-light)', color: 'var(--primary-color)'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-[var(--primary-color)] font-semibold hover:underline flex items-center gap-2">
                  View Project
                  <div className="icon-arrow-right text-lg"></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
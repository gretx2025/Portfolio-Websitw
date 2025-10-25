function Experience() {
  try {
    const experiences = [
      {
        title: 'Backend Developer',
        company: 'IT4YOURBUSINESS',
        location: 'Hyderabad',
        period: 'June 2024 - Present',
        description: 'Developed secure and scalable backend systems with Redis caching and session handling. Applied horizontal scaling techniques to support growing user load. Collaborated with frontend, DevOps, and QA teams in Agile sprints to ensure production-ready deployments.'
      }
    ];

    return (
      <section id="experience" className="bg-[var(--bg-light)] perspective-container" data-name="experience" data-file="components/Experience.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card rotate-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <span className="text-[var(--primary-color)] font-semibold">{exp.period}</span>
                </div>
                <p className="text-lg text-[var(--text-secondary)] mb-2">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                <p className="text-[var(--text-secondary)]">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}
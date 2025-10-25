function About() {
  try {
    return (
      <section id="about" className="perspective-container transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)'}} data-name="about" data-file="components/About.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card flip-in" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--bg-light)'}}>
                <div className="icon-server text-2xl text-[var(--primary-color)]"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-[var(--text-secondary)]">
                Expert in building secure and scalable backend systems using Java and Node.js with REST APIs.
              </p>
            </div>
            
            <div className="card flip-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--bg-light)'}}>
                <div className="icon-database text-2xl text-green-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-[var(--text-secondary)]">
                Implementing Redis caching and horizontal scaling to improve application speed and reliability.
              </p>
            </div>
            
            <div className="card flip-in" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--bg-light)'}}>
                <div className="icon-brain text-2xl text-purple-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">AI/ML Integration</h3>
              <p className="text-[var(--text-secondary)]">
                Passionate about using AI/ML, LLM, and AI agents to build real-world solutions and agentic workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}

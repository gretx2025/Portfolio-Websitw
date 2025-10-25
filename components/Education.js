function Education() {
  try {
    const education = [
      {
        degree: 'B.Tech in Information Technology',
        institution: 'GMR Institute of Technology',
        period: '2020 - 2024',
        cgpa: '7.17 CGPA'
      },
      {
        degree: 'Intermediate in M.P.C',
        institution: 'Naryana Jr College',
        period: '2018 - 2020',
        cgpa: '7.54 CGPA'
      },
      {
        degree: '10th Standard',
        institution: 'Sri Chaitanya Techno School',
        period: '2017 - 2018',
        cgpa: '9.7 CGPA'
      }
    ];

    const certifications = [
      {
        title: 'Java Full Stack Development',
        issuer: 'Tech Mahindra SMART Academy for Digital Technology',
        location: 'Hyderabad'
      }
    ];

    return (
      <section id="education" className="perspective-container transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)'}} data-name="education" data-file="components/Education.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">Education & Certifications</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)] slide-up">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card rotate-in-3d" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <span className="text-[var(--primary-color)] font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-2">{edu.institution}</p>
                  <p className="text-[var(--text-primary)] font-medium">{edu.cgpa}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)] slide-up" style={{animationDelay: '0.3s'}}>Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card rotate-in-3d" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                  <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
                  <p className="text-[var(--text-secondary)]">
                    {cert.issuer} • {cert.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}
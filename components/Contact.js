function Contact() {
  try {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    };

    return (
      <section id="contact" className="perspective-container transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)'}} data-name="contact" data-file="components/Contact.js">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in">Get In Touch</h2>
          <div className="max-w-2xl mx-auto slide-up-3d">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-primary)'}}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-light)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--text-secondary)',
                    borderWidth: '1px'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-primary)'}}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-light)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--text-secondary)',
                    borderWidth: '1px'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: 'var(--text-primary)'}}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-light)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--text-secondary)',
                    borderWidth: '1px'
                  }}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
              {status && <p className="text-green-600 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
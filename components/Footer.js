function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Mohammed Zakir Nooraj</h3>
              <p className="text-gray-400">Backend Developer</p>
              <p className="text-gray-400 text-sm mt-1">Hyderabad | +91-7780166523</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/mdnooraj14" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                <div className="icon-github text-xl"></div>
              </a>
              <a href="https://linkedin.com/in/mohammed-zakir-nooraj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                <div className="icon-linkedin text-xl"></div>
              </a>
              <a href="mailto:mdnooraj14@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                <div className="icon-mail text-xl"></div>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Mohammed Zakir Nooraj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
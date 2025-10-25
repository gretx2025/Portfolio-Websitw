function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 shadow-md z-50 transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)'}} data-name="header" data-file="components/Header.js">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">MZN</div>
          
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Skills</button>
            <button onClick={() => scrollToSection('education')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Education</button>
            <button onClick={() => scrollToSection('projects')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="icon-menu text-2xl text-[var(--text-primary)]"></div>
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t transition-colors duration-300" style={{backgroundColor: 'var(--bg-white)', borderColor: 'var(--bg-light)'}}>
            <div className="flex flex-col px-6 py-4 gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Contact</button>
            </div>
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
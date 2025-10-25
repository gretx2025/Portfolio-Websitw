function ThemeToggle() {
  try {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDark(true);
        document.body.classList.add('dark-mode');
      }
    }, []);

    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      
      if (newTheme) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    };

    return (
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{backgroundColor: 'var(--bg-light)'}}
        aria-label="Toggle theme"
        data-name="theme-toggle"
        data-file="components/ThemeToggle.js"
      >
        {isDark ? (
          <div className="icon-sun text-xl" style={{color: 'var(--primary-color)'}}></div>
        ) : (
          <div className="icon-moon text-xl" style={{color: 'var(--primary-color)'}}></div>
        )}
      </button>
    );
  } catch (error) {
    console.error('ThemeToggle component error:', error);
    return null;
  }
}
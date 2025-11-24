const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 bg-clip-text text-transparent">
          Abhay Kamble
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          AI/ML Engineer | Software Engineer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          f
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-all"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

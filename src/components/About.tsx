const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Text content */}
          <div className="flex-1">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm an AI/ML Engineer specializing in Agentic systems, LLM-based applications, large-scale model deployment, and quantum-inspired machine learning.
                I build intelligent systems that solve complex real-world problems through automation, reasoning, and data-driven insights.
                I love working with cutting-edge technologies and creating user-friendly experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Currently, I'm focused on full-stack development using React, TypeScript, Node.js, and
                various cloud technologies. I enjoy solving complex problems and continuously learning
                new tools and techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-cat-mauve">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor of Engineering (B.E.) in Computer Science<br />
                  BITS, Pilani, K.K. Birla Goa Campus<br />
                  2019 - 2023
                </p>
              </div>
              <div className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-cat-mauve">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bengaluru, India<br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cat-blue via-cat-mauve to-cat-pink rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cat-blue/20 to-cat-mauve/20 dark:from-cat-blue/10 dark:to-cat-mauve/10">
                  <img
                    src="/profile-pic.png"
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

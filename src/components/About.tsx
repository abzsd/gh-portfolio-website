const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate software developer with expertise in building modern web applications.
            I love working with cutting-edge technologies and creating user-friendly experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Currently, I'm focused on full-stack development using React, TypeScript, Node.js, and
            various cloud technologies. I enjoy solving complex problems and continuously learning
            new tools and techniques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your Degree<br />
                Your University<br />
                Year - Year
              </p>
            </div>
            <div className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your City, Country<br />
                Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { useState } from 'react'

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      location: 'City, Country',
      period: '2023 - Present',
      description: [
        'Led development of key features for the main product',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40%',
        'Implemented automated testing and CI/CD pipelines',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Another Company',
      location: 'City, Country',
      period: '2021 - 2023',
      description: [
        'Developed and maintained web applications',
        'Collaborated with cross-functional teams',
        'Implemented new features based on user feedback',
        'Participated in agile development processes',
      ],
      technologies: ['JavaScript', 'React', 'Python', 'PostgreSQL'],
    },
  ]

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-secondary-light dark:bg-secondary-dark rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-accent-light dark:text-accent-dark font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedId === exp.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedId === exp.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

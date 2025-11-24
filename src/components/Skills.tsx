interface SkillCategory {
  category: string
  skills: Array<{
    name: string
    years?: string
    level?: string
  }>
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', years: '3 years', level: 'Advanced' },
        { name: 'TypeScript', years: '2 years', level: 'Advanced' },
        { name: 'JavaScript', years: '4 years', level: 'Expert' },
        { name: 'HTML/CSS', years: '5 years', level: 'Expert' },
        { name: 'Tailwind CSS', years: '2 years', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', years: '3 years', level: 'Advanced' },
        { name: 'Python', years: '2 years', level: 'Intermediate' },
        { name: 'Express.js', years: '3 years', level: 'Advanced' },
        { name: 'REST APIs', years: '3 years', level: 'Advanced' },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MongoDB', years: '2 years', level: 'Intermediate' },
        { name: 'PostgreSQL', years: '2 years', level: 'Intermediate' },
        { name: 'Git', years: '4 years', level: 'Advanced' },
        { name: 'Docker', years: '1 year', level: 'Beginner' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', years: '1 year', level: 'Intermediate' },
        { name: 'Vercel', years: '2 years', level: 'Intermediate' },
        { name: 'CI/CD', years: '1 year', level: 'Beginner' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary-light dark:bg-secondary-dark rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent-light dark:text-accent-dark">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.years}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 ${
                          skill.level === 'Expert'
                            ? 'w-full'
                            : skill.level === 'Advanced'
                            ? 'w-4/5'
                            : skill.level === 'Intermediate'
                            ? 'w-3/5'
                            : 'w-2/5'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

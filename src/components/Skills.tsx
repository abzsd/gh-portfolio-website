interface Skill {
  name: string
  years?: number
  gradient: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'AI/ML & Programming',
      skills: [
        { name: 'Python', years: 5, gradient: 'bg-gradient-to-r from-sky-500 to-sky-400 shadow-sky-500' },
        { name: 'TensorFlow', years: 3, gradient: 'bg-gradient-to-r from-orange-500 to-orange-400 shadow-orange-500' },
        { name: 'PyTorch', years: 2, gradient: 'bg-gradient-to-r from-red-500 to-red-400 shadow-red-500' },
        { name: 'LangChain', years: 4, gradient: 'bg-gradient-to-r from-green-600 to-yellow-500 shadow-green-500' },
      ],
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'GCP', years: 2, gradient: 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-blue-500' },
        { name: 'AWS', years: 2, gradient: 'bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-500' },
         {name: 'PostgreSQL', years: 2, gradient: 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-500' },
        { name: 'Docker', years: 1, gradient: 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-500' },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', years: 3, gradient: 'bg-gradient-to-r from-sky-600 to-sky-500 shadow-sky-500' },
        { name: 'TypeScript', years: 2, gradient: 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-500' },
        { name: 'Node.js', years: 3, gradient: 'bg-gradient-to-r from-green-600 to-green-500 shadow-green-500' },
        { name: 'Tailwind CSS', years: 2, gradient: 'bg-gradient-to-r from-slate-900 to-slate-800 shadow-slate-900' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Skills</h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-3xl font-semibold mb-6 text-center text-cat-mauve">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <div className={`skill-badge ${skill.gradient} text-white font-semibold min-w-[10rem]`}>
                      <span>{skill.name}</span>
                    </div>
                    {skill.years && skill.years > 0 && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </p>
                    )}
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

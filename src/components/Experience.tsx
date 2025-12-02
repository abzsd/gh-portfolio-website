import { useState } from 'react'

interface TimelineItem {
  time: string
  title: string
  description: string
  details?: string
}

interface TimelineItemProps extends TimelineItem {
  isExpanded: boolean
  onToggle: () => void
}

const TimelineItem = ({ time, title, description, details, isExpanded, onToggle }: TimelineItemProps) => {
  return (
    <li className="mb-8 ml-4 last:mb-4 font-inter">
      <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cat-teal" />
      <div className="opacity-100 translate-x-0">
        <time className="prose ml-0.5 mb-1 text-sm font-medium uppercase leading-none dark:prose-invert">
          {time}
        </time>
        <div className="w-full py-3 px-4 mt-1 bg-secondary-light dark:bg-secondary-dark rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {details ? (
            <div>
              <button
                onClick={onToggle}
                className="w-full text-left flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="text-xl font-[900] text-transparent bg-clip-text font-inter tracking-wide bg-gradient-to-r from-cat-blue via-cat-mauve to-cat-pink pb-2">
                    {title}
                  </div>
                  <div className="prose prose-slate text-base font-normal dark:prose-invert">
                    {description}
                  </div>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {isExpanded ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {isExpanded && (
                <div className="mt-4 p-4 bg-primary-light dark:bg-primary-dark rounded-xl prose prose-slate dark:prose-invert shadow-inner">
                  {details}
                </div>
              )}
            </div>
          ) : (
            <div className="py-1 px-1">
              <div className="text-xl font-[900] text-transparent bg-clip-text font-inter tracking-wide bg-gradient-to-r from-cat-blue via-cat-mauve to-cat-pink pb-2">
                {title}
              </div>
              <div className="prose prose-slate text-base font-normal dark:prose-invert">
                {description}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const workExperience: TimelineItem[] = [
    {
      time: 'June 2024 - Nov 2024',
      title: 'Research Mentor, Google Summer of Code 2024 @ ML4SCI',
      description: 'Mentored 4 research projects at the intersection of quantum computing and machine learning for high-energy physics under ML4SCI as part of Google Summer of Code 2024.',
      details: 'Guided students in developing Quantum GAN implementations and quantum machine learning applications for high-energy physics data analysis. Provided technical mentorship on quantum computing frameworks and ML integration.',
    },
    {
      time: 'June 2023 - Oct 2024',
      title: 'Software Engineer - Applied AI, Searce India Pvt. Ltd.',
      description: 'Developed 8+ end-to-end ML systems on GCP & AWS using LLMs and prompt engineering, and worked with multi-GPU model training, to create scalable AI solutions for finance, healthcare & GenAI use cases.',
      details: '• Developed and optimized RESTful backend APIs for LLM-based conversational chatbots, to extract and process data from PostgreSQL databases, & achieving 30% reduction in processing time through parallelized API calls\n\n• Achieved 10x times faster training time by distributed multi-GPU model training pipeline using PyTorch & GCE\n\n• Engineered large-scale CI/CD pipeline for Intelligent Document Processing system using LLM & AWS Lambda, reducing API calls by 5x while maintaining 88% accuracy',
    },
    {
      time: 'June 2022 - Sept 2022',
      title: 'Open Source Contributor, Google Summer of Code 2022',
      description: 'Worked as an open source contributor for the ML4SCI organization, and developed a project to demonstrate the potential of Quantum Generative Adversarial Network (QGAN) in High Energy Physics events data generation.',
      details: 'Developed an open-source, modular Python codebase achieving 90% accuracy in data generation. Implemented fully quantum QGAN pipeline with LHC datasets using Tensorflow, Cirq, Qiskit, and CUDA.',
    },
  ]

  const projects: TimelineItem[] = [
    {
      time: 'Nov 2025 - Present',
      title: 'CareAgents - Agentic Healthcare Platform',
      description: 'Built Agentic healthcare platform using Google Gemini+FastAPI for automated doctor matching & medical record analysis. Secured 4th Rank at Google Build and Blog Marathon - Bengaluru.',
      details: 'Designed cloud-native architecture on Google Cloud Run with WebSocket streaming & Agentic RAG based record access. Tech Stack: Google Cloud Platform, PostgreSQL, Cloud Run, Firebase, FastAPI, LangChain.',
    },
    {
      time: 'June 2022 - Jan 2023',
      title: 'Implementation of QGANs to Perform HEP Analysis at the LHC',
      description: 'Google Summer of Code 2022 project - Developed an open-source, modular Python codebase for Quantum Generative Adversarial Networks (QGAN) to generate and classify high-energy physics event data.',
      details: 'Implemented a fully quantum QGAN pipeline with LHC datasets, achieving data generation with 90% accuracy. Demonstrated quantum ML potential in high-energy physics domain. Tech Stack: Python, Tensorflow, Cirq, Qiskit, CUDA, C/C++.',
    },
    {
      time: 'June 2022 - Jan 2023',
      title: 'QChess - Quantum Mechanical Chess Game',
      description: 'Developed game combining Quantum Mechanical properties and the game of Chess and testing on real Quantum backend.',
      details: 'Created an innovative chess variant that incorporates quantum mechanics principles, allowing pieces to exist in superposition states. Implemented and tested on real IBM quantum hardware using Qiskit framework.',
    },
  ]

  const education: TimelineItem[] = [
    {
      time: 'Aug 2019 - Aug 2023',
      title: 'B.E in Computer Science, Birla Institute of Technology and Science, Pilani',
      description: 'CGPA: 7.8/10. Coursework: Object Oriented Programming, Databases, Data Structures and Algorithms, Operating Systems.',
    },
  ]

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Experience</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 px-4">
            Wherever you see a plus icon, click to expand the tile and learn more!
          </p>
          <h3 className="text-3xl font-semibold mb-6 text-center text-cat-mauve">Work</h3>
          <ol className="relative mx-4 border-l-2 border-indigo-400 dark:border-cat-teal">
            {workExperience.map((item, index) => (
              <TimelineItem
                key={`work-${index}`}
                {...item}
                isExpanded={expandedId === `work-${index}`}
                onToggle={() => toggleExpand(`work-${index}`)}
              />
            ))}
          </ol>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-cat-mauve">Projects</h3>
          <ol className="relative mx-4 border-l-2 border-indigo-400 dark:border-cat-teal">
            {projects.map((item, index) => (
              <TimelineItem
                key={`project-${index}`}
                {...item}
                isExpanded={expandedId === `project-${index}`}
                onToggle={() => toggleExpand(`project-${index}`)}
              />
            ))}
          </ol>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-cat-mauve">Education</h3>
          <ol className="relative mx-4 border-l-2 border-indigo-400 dark:border-cat-teal">
            {education.map((item, index) => (
              <TimelineItem
                key={`education-${index}`}
                {...item}
                isExpanded={expandedId === `education-${index}`}
                onToggle={() => toggleExpand(`education-${index}`)}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience

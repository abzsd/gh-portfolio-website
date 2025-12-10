interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
  image?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'CareAgents',
      description: 'Built Agentic healthcare platform using Google Gemini+FastAPI for automated doctor matching, & medical record analysis. Designed cloud-native architecture on Google Cloud Run with WebSocket streaming & Agentic RAG based record access.',
      technologies: ['Google Gemini', 'Google ADK', 'PostgreSQL', 'FastAPI'],
      githubLink: 'https://github.com/abzsd/careagents',
      liveLink: 'https://careagents-frontend-346759294104.europe-west1.run.app/',
    },
    {
      id: 2,
      title: 'Implementation of QGANs to Perform HEP Analysis at the LHC',
      description: 'Developed an open-source, modular Python codebase for Quantum Generative Adversarial Networks (QGAN) to generate and classify high-energy physics event data from images, demonstrating quantum ML potential. Implemented a fully quantum QGAN pipeline with LHC datasets, achieving data generation with 90 % accuracy',
      technologies: ['Python', 'Tensorflow', 'Cirq', 'Qiskit', 'CUDA', 'C/C++'],
      githubLink: 'https://github.com/abzsd/GSoC-ML4SCI',
    },
    {
      id: 3,
      title: 'QChess',
      description: 'Developed game combining Quantum Mechanical properties and the game of Chess and testing on real Quantum backend',
      technologies: ['Python','Qiskit'],
      githubLink: 'https://github.com/SEDSCelestiaBPGC/quantum-chess',
    },
    {
      id: 4,
      title: 'Fidelity of CX gates using QEC',
      description: 'Under James Wootton (Zurich Research Laboratory, Zurich Switzerland) - Researched on developing a novel benchmarking technique for finding fidelity and performance of CX gates, as part of the Spring cohort of Qiskit IBM Advocate Mentorship Program\'22',
      technologies: ['Python', 'Qiskit', 'Tensorflow', 'Cirq'],
      githubLink: "https://github.com/qiskit-advocate/qamp-spring-22/issues/14"
    },
    {
      id: 5,
      title: 'Rigid Body Rotation Simulation using Qiskit',
      description: 'Worked on a Quantum Machine Learning research project related to simulating Rigid Body Rotations using the Rodrigues rotation formula and using Qiskit under the Qiskit IBM Adovcate Mentorship programme.',
      technologies: ['Python', 'Qiskit', 'Tensorflow'],
      githubLink: "https://github.com/qiskit-advocate/qamp-fall-21/issues/7"
    },
    {
      id: 6,
      title: 'Automated Evaluation System(AES): Samatulyata 2',
      description: 'Worked on implementation of AES i.e. Samatulayata-II software using C/C++. Developed software for efficient code translation into CPN model and for verifying equivalence of translated and original code.',
      technologies: ["C","C++","Python"],
      githubLink: "https://gitlab.com/EQuioMaX/samatulyata2"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary-light dark:bg-primary-dark rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {project.image && (
                <div className="mb-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              )}
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-cat-blue to-cat-mauve text-white rounded-full text-sm font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

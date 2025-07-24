import { useState, useEffect } from "react";

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    status: string;
    metrics?: string;
  }>;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const defaultData: PortfolioData = {
  name: "JOHN DEVELOPER",
  title: "Full Stack Developer",
  bio: "Passionate software engineer with expertise in modern web technologies. Building innovative solutions and crafting exceptional user experiences in the digital realm.",
  email: "john@developer.io",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  skills: [
    "javascript", "typescript", "react", "nodejs", "python", "postgresql",
    "docker", "amazonwebservices", "git", "mongodb", "redux", "tailwindcss"
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "Present",
      responsibilities: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented real-time data processing with 99.9% uptime",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      startDate: "2020",
      endDate: "2022",
      responsibilities: [
        "Built MVP from scratch using React and Node.js",
        "Designed and implemented RESTful APIs",
        "Reduced load times by 40% through optimization"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      startDate: "2018",
      endDate: "2020",
      responsibilities: [
        "Developed responsive web applications for Fortune 500 clients",
        "Collaborated with design teams to implement pixel-perfect UIs",
        "Improved website performance scores by 60%"
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      status: "Production",
      metrics: "Users: 50K+"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses, sentiment analysis, and multi-language support.",
      technologies: ["Python", "Flask", "OpenAI"],
      status: "Beta",
      metrics: "MAU: 10K"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with Kanban boards, time tracking, and team analytics.",
      technologies: ["Vue.js", "Express", "MongoDB"],
      status: "Live",
      metrics: "Teams: 500+"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with advanced charting, alerts, and P&L analysis.",
      technologies: ["TypeScript", "React", "Redis"],
      status: "Alpha",
      metrics: "Downloads: 5K"
    }
  ],
  socialLinks: {
    linkedin: "#",
    twitter: "#",
    github: "#"
  }
};

const techIconMap: Record<string, string> = {
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  amazonwebservices: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
};

const getTechColor = (tech: string) => {
  const colors = ["terminal-green", "terminal-cyan", "terminal-amber", "terminal-pink"];
  return colors[tech.length % colors.length];
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("info");
  const [data] = useState<PortfolioData>(defaultData);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const tabs = ["info", "skills", "experience", "projects", "contact"];
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

  const TabButton = ({ tabName, label }: { tabName: string; label: string }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`tab-button px-4 py-2 text-sm rounded-t-lg ${
        activeTab === tabName ? "active" : ""
      }`}
    >
      [{label}]
    </button>
  );

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl h-[90vh] crt-screen border-4 border-crt-gray shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-crt-gray px-4 py-2 flex items-center justify-between border-b border-crt-gray">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="terminal-green text-sm">portfolio.exe - Terminal v2.1</div>
          <div className="terminal-amber text-xs animate-flicker">●REC</div>
        </div>

        <div className="p-6 h-full flex flex-col">
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6">
            <TabButton tabName="info" label="INFO" />
            <TabButton tabName="skills" label="SKILLS" />
            <TabButton tabName="experience" label="EXPERIENCE" />
            <TabButton tabName="projects" label="PROJECTS" />
            <TabButton tabName="contact" label="CONTACT" />
          </div>

          {/* Content Areas */}
          <div className="flex-1 bg-crt-dark border border-crt-gray rounded-lg p-6 content-area relative overflow-hidden">
            
            {/* INFO TAB */}
            {activeTab === "info" && (
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold terminal-cyan neon-text mb-2">{data.name}</h1>
                <div className="terminal-amber text-lg">
                  &gt; {data.title}
                </div>
                <div className="terminal-green text-sm max-w-2xl mx-auto leading-relaxed">
                  {data.bio}
                </div>
                <div className="flex justify-center space-x-8 text-xs terminal-amber mt-8">
                  <div>EMAIL: {data.email}</div>
                  <div>PHONE: {data.phone}</div>
                  <div>LOCATION: {data.location}</div>
                </div>
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <div>
                <h2 className="text-2xl font-bold terminal-cyan mb-6 text-center neon-text">TECHNOLOGY STACK</h2>
                <div className="grid grid-cols-6 gap-6 max-w-4xl mx-auto">
                  {data.skills.map((skill, index) => (
                    <div key={skill} className="tech-logo bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      <img 
                        src={techIconMap[skill]} 
                        alt={skill} 
                        className="w-10 h-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <div>
                <h2 className="text-2xl font-bold terminal-cyan mb-6 text-center neon-text">WORK HISTORY</h2>
                <div className="space-y-6 max-w-4xl mx-auto">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-terminal-green pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold terminal-amber">{exp.title}</h3>
                        <span className="terminal-cyan text-sm">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="terminal-green text-sm mb-2">{exp.company} | {exp.location}</div>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <div>
                <h2 className="text-2xl font-bold terminal-cyan mb-6 text-center neon-text">PROJECT SHOWCASE</h2>
                <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {data.projects.map((project, index) => (
                    <div key={index} className="project-card rounded-lg p-4">
                      <h3 className="text-lg font-bold terminal-pink mb-2">{project.title}</h3>
                      <p className="text-xs text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className={`bg-${getTechColor(tech)} text-black text-xs px-2 py-1 rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="terminal-amber text-xs">
                        Status: {project.status} {project.metrics && `| ${project.metrics}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === "contact" && (
              <div>
                <h2 className="text-2xl font-bold terminal-cyan mb-8 text-center neon-text">GET IN TOUCH</h2>
                <div className="max-w-2xl mx-auto text-center space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold terminal-amber">DIRECT CONTACT</h3>
                      <div className="space-y-2 text-sm">
                        <div className="terminal-green">
                          <span className="terminal-cyan">EMAIL:</span> {data.email}
                        </div>
                        <div className="terminal-green">
                          <span className="terminal-cyan">PHONE:</span> {data.phone}
                        </div>
                        <div className="terminal-green">
                          <span className="terminal-cyan">LOCATION:</span> {data.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold terminal-amber">SOCIAL PROFILES</h3>
                      <div className="space-y-3">
                        <a href={data.socialLinks.linkedin} className="flex items-center justify-center space-x-2 terminal-green hover:terminal-cyan transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span>LinkedIn Profile</span>
                        </a>
                        <a href={data.socialLinks.twitter} className="flex items-center justify-center space-x-2 terminal-green hover:terminal-cyan transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                          <span>X / Twitter</span>
                        </a>
                        <a href={data.socialLinks.github} className="flex items-center justify-center space-x-2 terminal-green hover:terminal-cyan transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-crt-gray pt-6">
                    <div className="terminal-amber text-sm">
                      &gt; System Status: ONLINE | Response Time: &lt; 24hrs
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      Available for freelance projects and full-time opportunities
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="mt-4 text-xs terminal-amber flex justify-between items-center">
            <div>portfolio.exe | Active Session</div>
            <div className="animate-flicker">_</div>
          </div>
        </div>
      </div>
    </div>
  );
}

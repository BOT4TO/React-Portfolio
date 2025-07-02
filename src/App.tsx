import React, { useState, useEffect } from 'react';
import { Twitter, Github, Code, Globe, Bot, ExternalLink, Zap, Users, Award, BotIcon,} from 'lucide-react';
import {Link} from "react-router-dom";
import SkillCategory from './SkillsPage/skillCategories';
import SkillStats from './SkillsPage/SkillStates';
import profileImage from './assets/3.png'; 





const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; dx: number; dy: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.dx,
        y: particle.y + particle.dy,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-900/20"></div>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute bg-blue-700/70 rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const sections = ['Home','About Me', 'Technologies' ,'Skills', 'Projects', 'Contact'];

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10 font-[Poppins] ">
      <div className="max-w-6xl mx-auto px-6 py-4 ">
        <div className="flex justify-between items-center ">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-transparent">
            
          </div>
          <div className="flex space-x-8 ">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 capitalize ${
                  activeSection === section
                    ? 'text-red-6=400'
                    : 'text-gray-200 hover:text-blue'
                }`}
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About Me' : section}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-200 rounded-full "></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
    return(
        <div className="fixed 0-top 0-left w-full h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                           Hi, I'm {' '}
                           <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">BOT4TO</span>
                            </h1>
                            <div className="text-2xl md:text-3xl text-gray-500">
                              <span className="text-blue-500">Front End Developer</span> & {' '}
                              <span className="text-purple-500">WEB3 Enthusiasts.</span>
                            </div>
                            <span className="block bg-gradient-to-r from-blue-400 via-red-600 to-green-400 bg-clip-text text-transparent"></span>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                Passionate about creating exceptional web experiences with modern technologies. 
              Specialized in Web3 integration and building powerful, professionel creator servers discord, and discord bots from scratch.
                            </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/BOT4TO"  target="_blank" className="group p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110">
                        <Github className="w-7 h-7 text-gray-300 group-hover:text-purple-700 transition-color"/>
                        </a>
                        <a href="https://x.com/xBOT4TO" target="_blank" className="group p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110">
                        <Twitter className="w-7 h-7 text-gray-200 group-hover:text-blue-700 transition-color"/>
                        </a>
                        <a href="https://discord.com/.bot4to" target='_blank' className="group p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110">
                        <BotIcon className="w-7 h-7 text-gray-200 group-hover:text-red-700 transition-color"/>
                        </a>
                        </div>
                        <div className="flex space-x-5">
                          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                           View Projects
                          </button>
                           <button className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            Download CV
                           </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative">
                        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-green-300 p-1 animate-pulse">
                          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                            <img src={profileImage} alt="Profile" className="w-72 h-72 rounded-full object-cover"/>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
        
    );
};



const MyWorkPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">About</span> Me {''}
           </h2>
        <img
          src={profileImage} 
          alt="Profile"
          className="w-36 h-36 rounded-full border-6 border-white shadow-lg mx-auto mb-6"
        />

        <div className="w-full border-t border-blue-300 my-6" />
        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto px-4 font-[Poppins]">
          I'm Bot4to, With over 1 year experience of Front End Developement, and 4years of be active in discord , I'm passionate about staying at the forefront of technology, constantly learning and adapting to new frameworks, tools, and methodologies. Whether it's building scalable React applications, or creating custom Discord bots, I bring creativity and technical excellence to every project.
        </p>
      </div>
    </div>
  );
};



const TechnologiesPage = () => {
  const technologies = [
    {
      name: "React JS",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L19,8L21,9M15,4.5V2.5L13,3.5L15,4.5M9,4.5L11,3.5L9,2.5V4.5M3,9L5,8L3,7V9M7.5,12C7.5,10.61 8.61,9.5 10,9.5H14C15.39,9.5 16.5,10.61 16.5,12C16.5,13.39 15.39,14.5 14,14.5H10C8.61,14.5 7.5,13.39 7.5,12M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5M12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22M3,15V17L5,16L3,15M9,19.5V21.5L11,20.5L9,19.5M15,19.5L13,20.5L15,21.5V19.5M21,15L19,16L21,17V15Z" fill="#61DAFB"/>
        </svg>
      ),
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      name: "JavaScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M7.5 15.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-7h-2v7c0 .5-.5 1-1 1s-1-.5-1-1h-2zm7-7h2v2h1.5c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5h-3.5v-7zm2 5h1.5c.5 0 1-.5 1-1s-.5-1-1-1h-1.5v2z" fill="#000"/>
        </svg>
      ),
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
       name: "TypeScript",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <path d="M9.5 8.5h5v1.5h-1.75v6h-1.5v-6h-1.75v-1.5zm6.5 2h1.5v1h1v3.5c0 .5-.5 1-1 1h-1.5v-1h1v-2.5h-1v-2z" fill="white"/>
        </svg>
      ),
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z" fill="#339933"/>
          <path d="M12 22.15c-.27 0-.55-.07-.78-.2l-2.44-1.41c-.37-.21-.19-.28-.07-.32.5-.17.6-.21 1.13-.51.06-.03.13-.02.19.02l1.87 1.11c.07.04.17.04.24 0l7.3-4.21c.07-.04.12-.12.12-.2V7.71c0-.09-.05-.17-.12-.21l-7.3-4.21c-.07-.04-.17-.04-.24 0L3.6 7.5c-.07.04-.12.12-.12.21v8.58c0 .08.05.16.12.2l2 1.15c1.08.54 1.75-.1 1.75-.74V8.5c0-.13.1-.23.23-.23h1.01c.13 0 .23.1.23.23v8.4c0 1.46-.8 2.3-2.19 2.3-.43 0-.76 0-1.69-.46l-1.91-1.1c-.48-.28-.78-.8-.78-1.36V7.71c0-.56.3-1.08.78-1.36l7.44-4.3c.47-.27 1.09-.27 1.56 0l7.44 4.3c.48.28.78.8.78 1.36v8.58c0 .56-.3 1.08-.78 1.36l-7.44 4.3c-.23.13-.51.2-.78.2z" fill="#339933"/>
        </svg>
      ),
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
       name: "HTML5",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#E34F26"/>
        </svg>
      ),
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
       name: "CSS3",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716H9.811l.24 2.573h5.117l-.366 3.523-2.91.804-2.956-.81-.188-2.11H6.138l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
        </svg>
      ),
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/30"
    },
    {
      name: "Discord",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
        </svg>
      ),
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      name: "Git",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F05032"/>
        </svg>
      ),
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
       name: "Tailwind CSS",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4"/>
        </svg>
      ),
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30"
    },
    {
       name: "GitHub",
     logo: (
       <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.743.083-.728.083-.728 1.204.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.306.762-1.605-2.665-.3-5.466-1.335-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.302-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.242 2.874.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.37.814 1.096.814 2.21 0 1.595-.015 2.878-.015 3.268 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
       </svg>
      ),
      bgColor: "bg-gray-800/10",
      borderColor: "border-gray-800/30"
    },
  ];
 
  return (
    <div className="fixed 0-top 0-left w-full h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Technologies</span> I use {''}
           </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative p-6 ${tech.bgColor} backdrop-blur-sm rounded-xl border ${tech.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-white font-medium text-center group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
  

const SkillsPage  = () => {
  const skills = [
    {
      title: 'Front end developer',
      skills: [
        {name: 'React-Next.JS', level: 60 },
        {name: 'TypeScript', level: 40 },
        {name: 'JavaScript', level: 65 },
        {name: 'HTML&CSS3', level: 93 },
      ],
    },
    {
      title: 'Other Skills.',
      skills: [
        {name: 'Editing', level: 14},
        {name: 'WEB3 Enthusiasts', level: 69},
        {name: 'Computer Repair', level: 46},
        {name: 'Design & Photoshop.', level: 17 },
      ],
    },
    {
      title: 'Discord Activities',
      skills: [
        {name: 'Community Manager & Moderator', level: 85},
        {name: 'Management Big Servers', level: 90 },
        {name: 'Developement Bots Discord', level: 85 },
        {name: 'Available on Discord.', level: 96 },
      ],
    }, 
    {
      title: 'Tools & Technologies',
      skills: [
        {name: 'Github', level: 85},
        {name: 'Vercel', level: 78},
        {name: 'Node JS', level: 62},
        {name: 'Vistual Studio Code', level: 95},
      ],
    },
  ];

    return (
    <section id="skills" className="py-20 relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           This about all of my skills with a different technologies and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skills.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

        <SkillStats />
      </div>
    </section>
  );
}

const ProjectPage = () => {
    return (
    <div className="fixed top-0 left-0  w-full h-screen flex items-center justify-center overflow-hidden bg-transparent px-2">
      <h1 className="text-5xl  md:text-7xl font-extrabold text-white  tracking-wide font-[Poppins]">
       <span className="bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent"> Coming Soon... </span> ⏳  {''}
      </h1>
    </div>
  );
}


  
const ContactPage = () => {
  return(
    <div className="fixed 0-top 0-left w-full h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
       <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Contact</span> Me {''}
           </h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to bring your ideas, Let's discuss to give my ideas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
          <BotIcon className="w-8 h-8 text-blue-400 mx-auto mb-4"/>
          <h3 className="text-white font-semibold mb-2">Discord</h3>
          <p className="text-gray-300">.bot4to</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
          <ExternalLink className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">
            Portfolio
          </h3>
          <p className="text-gray-300">
            View my Work
          </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                          Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
  


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <HomePage />;
      case 'About Me':
        return<MyWorkPage/>
      case 'Technologies':
        return <TechnologiesPage />;    
      case 'Skills':
        return <SkillsPage />;
       case 'Projects':
        return<ProjectPage/>  
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <ParticleBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10 pt-20">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;





import { useState } from "react";
import SkillMatchImg from "./SkillMatch.png";
import CricScoreImg from "./CricScore.png";
import Resume from "./BhavyaResume.pdf";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Check,
  MessageCircle,
  Heart,
  Moon,
  Sun,
  Download,
  Code
} from "lucide-react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,

  SiMongodb,
  SiFigma,
  SiMysql
} from "react-icons/si";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import SpotlightBox from "@/components/spotlight-box";
import HaloCursor from "@/components/halo-cursor";

const Home = () => {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Scroll just above the section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const skills = {
    "Languages": [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
      { name: "CSS", icon: SiCss3, color: "text-blue-400" },
      { name: "C++", icon: SiCplusplus, color: "text-purple-400" },
      { name: "C", icon: SiC, color: "text-purple-400" },
    ],
    "Frameworks": [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
    ],
    "Tools": [
      { name: "Git", icon: SiGit, color: "text-red-400" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
      { name: "VS Code", icon: Code, color: "text-blue-400" },
      { name: "Figma", icon: SiFigma, color: "text-purple-400" },
    ],
    "Databases": [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "SQL", icon: SiMysql, color: "text-blue-500" },
    ],
  };

  const achievements = [
    { emoji: "🎓", title: "Student Director", description: "Unstop", detail: "Leading student community engagement and organizing tech events" },
    { emoji: "🚀", title: "Top 20 Finalist", description: "Standard Chartered Hackathon (India-wide)", detail: "Developed a project after clearing the coding test for inclusion among top 20 teams" },
    { emoji: "🧠", title: "PWC Launchpad Trainee", description: "Professional Development Program", detail: "Completed Technology and Transformation Launchpad Program" },
    { emoji: "🗣️", title: "Management Head", description: "Public Speaking Society", detail: "Organized workshops and competitions to enhance communication skills" },
    { emoji: "💻", title: "Executive Member", description: "Google Developer Groups", detail: "Contributing to open-source projects and mentoring junior developers" },
    { emoji: "🏅", title: "Academic Scholar", description: "Mody University", detail: "Recognized each year with a scholarship for outstanding academic performance." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HaloCursor />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Introduction Section */}
        <section id="intro" className="py-8">
          <SpotlightBox className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-heading">
                Hi, I'm <span className="text-primary">Bhavya Jamar</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 font-heading">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I’m driven to create seamless and engaging digital experiences using React and Node.js. With a keen eye for detail and a love for clean, efficient code, I bring ideas to life in the browser. Every project is an opportunity to craft something meaningful and impactful. </p>
            </div>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1Gk1U_joquP8-Nn2w1LPGcIR00VYwV0S_/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-testid="button-view-resume"
              >
                View My Resume
              </a>
            </div>


          </SpotlightBox>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8">
          <SpotlightBox>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Skills I Have</h2>
              <p className="text-lg text-muted-foreground">Technologies and tools I've worked with and enjoy using</p>
            </div>

            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-card flex items-center gap-3 px-4 py-3 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-all duration-300"
                        data-testid={`skill-${skill.name.toLowerCase()}`}
                      >
                        <skill.icon className={`text-xl ${skill.color}`} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightBox>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8">
          <SpotlightBox>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">My Projects</h2>
              <p className="text-lg text-muted-foreground">Explore some of the projects I've worked on. These showcase my skills and expertise in various domains of software development.</p>
            </div>

            <div className="grid gap-8 md:gap-12">
              {/* Project 1: SkillMatch */}
              <div className="project-card grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src={SkillMatchImg}
                    alt="SkillMatch project interface"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    data-testid="image-skillmatch"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <h3 className="text-2xl font-bold font-heading">SkillMatch</h3>
                  <p className="text-muted-foreground text-lg">A job portal platform connecting students and recruiters. It allows students to create and update profiles, browse jobs, and apply, while recruiters can post jobs and filter candidates.</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-gray-900/30 text-gray-400 rounded-full text-sm">Express</span>
                      <span className="px-3 py-1 bg-teal-900/30 text-teal-400 rounded-full text-sm">Tailwind</span>
                    </div>

                    {/* GitHub Button */}
                    <a
                      href="https://github.com/jbhavyaa/Skill-Match"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors duration-300"
                        data-testid="link-skillmatch-github"
                      >
                        <Github className="text-xl" />
                      </Button>
                    </a>

                  </div>

                </div>
              </div>

              {/* Project 2: CricScore */}
              <div className="project-card grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2">
                  <img
                    src={CricScoreImg}
                    alt="CricScore project interface"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    data-testid="image-cricscore"
                  />
                </div>
                <div className="order-1 space-y-4">
                  <h3 className="text-2xl font-bold font-heading">CricScore</h3>
                  <p className="text-muted-foreground text-lg">
                    A web application that provides live cricket scores, match updates, player statistics, and upcoming fixtures.
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Node.ts</span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">Drizzle</span>
                      <span className="px-3 py-1 bg-teal-900/30 text-teal-400 rounded-full text-sm">Tailwind</span>
                    </div>

                    {/* GitHub Button */}
                    <a
                      href="https://github.com/shavik/Boxcricket"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors duration-300"
                        data-testid="link-skillmatch-github"
                      >
                        <Github className="text-xl" />
                      </Button>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </SpotlightBox>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8">
          <SpotlightBox>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Work Experience</h2>
              <p className="text-lg text-muted-foreground">Companies I've worked with</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div
                className={`experience-card bg-secondary/30 border border-border rounded-xl p-6 cursor-pointer ${isExperienceExpanded ? 'expanded' : ''}`}
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                data-testid="card-experience"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold font-heading">Nandishi Software Pvt. Ltd.</h3>
                    <p className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
                      React Developer Intern
                      <ArrowRight
                        className={`text-sm transition-opacity duration-300 ${isExperienceExpanded ? 'opacity-100' : 'opacity-0'}`}
                        size={16}
                      />
                    </p>
                  </div>
                </div>

                <div className="experience-details mt-6 pt-6 border-t border-border">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Check className="text-primary mt-1 text-sm" size={16} />
                      <span>Developed dynamic frontend interfaces using React.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary mt-1 text-sm" size={16} />
                      <span>Integrated REST APIs and improved UI responsiveness.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-primary mt-1 text-sm" size={16} />
                      <span>Collaborated in a full-stack environment with designers and backend devs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SpotlightBox>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-8">
          <SpotlightBox>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Achievements</h2>
              <p className="text-lg text-muted-foreground">Milestones and recognitions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-item flex items-start gap-4 p-4 bg-secondary/30 border border-border rounded-lg hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
                  data-testid={`achievement-${index}`}
                >
                  <div className="text-2xl flex-shrink-0">{achievement.emoji}</div>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                    <p className="text-muted-foreground/80 text-xs">{achievement.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightBox>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8">
          <SpotlightBox className="text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8">I'm always excited to collaborate on interesting projects or just have a great tech conversation!</p>
              <h3 className="text-xl font-semibold mb-8">Ready to start a conversation?</h3>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-secondary/30 border border-border rounded-xl p-6 mb-8">
                <div className="flex justify-center items-center gap-4">
                  <Mail className="text-primary text-xl" />
                  <a
                    href="mailto:bhavyajamar2004@gmail.com"
                    className="text-lg text-white-500 hover:underline"
                    data-testid="email-address"
                  >
                    bhavyajamar2004@gmail.com
                  </a>
                </div>
                <br></br>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/jbhavyaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-3 bg-muted hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110"
                      data-testid="link-github"
                    >
                      <Github className="text-xl" />
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bhavya-jamar-938500248"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-3 bg-muted hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110"
                      data-testid="link-linkedin"
                    >
                      <Linkedin className="text-xl" />
                    </Button>
                  </a>

                </div>

              </div>

              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                I typically respond within 30 minutes!
              </p>
            </div>
          </SpotlightBox>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Made with <Heart className="inline text-red-500" size={16} /> by <span className="text-foreground font-semibold">Bhavya</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

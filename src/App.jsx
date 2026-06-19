import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import ProjectModal from "./components/ProjectModal";

import Tilt from "react-parallax-tilt";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";

import deepfakeImg from "./assets/deepfake.jpeg";
import objImg from "./assets/object-detection.jpeg";
import signImg from "./assets/sign-language.jpeg";
import netflixImg from "./assets/netflix.png";
import financeImg from "./assets/finance.png";

// 🔥 PROJECT DATA
const projects = [
  {
    title: "Multimodal Deepfake Detection",
    desc: "Deep learning system using CNN and RNN for detecting deepfakes using facial and voice features.",
    img: deepfakeImg,
    github: "https://github.com/Samyuktha0508/Multimodal-Deepfake-Detection-System-final"
  },
  {
    title: "Object Detection for Blind",
    desc: "Real-time object detection with voice feedback using TensorFlow.",
    img: objImg,
    github: "https://github.com/Samyuktha0508/Object-Detection-For-Blind"
  },
  {
    title: "Sign Language Interpreter",
    desc: "Gesture recognition system converting sign language into text.",
    img: signImg,
    github: "https://github.com/Samyuktha0508/Sign-language-interpreter"
  },
  {
    title: "Netflix Clone",
    desc: "Full-stack streaming platform using React & Spring Boot.",
    img: netflixImg,
    github: "https://github.com/Samyuktha0508/Netflix-clone"
  },
  {
    title: "Financial Manager",
    desc: "Expense tracking application with visual insights.",
    img: financeImg,
    github: "https://github.com/Samyuktha0508/Finance-app"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-gradient-to-br from-black via-[#0a0a1a] to-black text-white overflow-hidden">

      {/* 🔥 SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <CursorGlow />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-28">

        {/* ================= HERO ================= */}
        <section id="home" className="text-center space-y-4 pt-20">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Samyuktha Vijayakumar
          </h1>

          <p className="text-lg text-gray-300">
            Full Stack Developer | AI & ML Engineer
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com/Samyuktha0508" target="_blank">
              <button className="px-6 py-2 bg-purple-600 rounded-lg hover:scale-105 transition">
                GitHub
              </button>
            </a>

            <a href="https://linkedin.com/in/samyuktha-rv" target="_blank">
              <button className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
                LinkedIn
              </button>
            </a>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a passionate<span className="text-purple-400 font-semibold"> Full Stack Developer and AIML enthusiast </span>focused on building intelligent and user-centric applications. As a fresher, I bring a strong foundation in modern web development along with machine learning, enabling me to create solutions that are not only functional but also smart and impactful.
            <br /><br />
            I have hands-on experience developing responsive and dynamic applications using technologies such as React, JavaScript, Django, and Python. I also have experience designing intuitive user interfaces that enhance user experience and usability. Alongside this, I work with machine learning frameworks like TensorFlow to develop systems that address real-world challenges.
            <br /><br />
            My projects reflect a strong interest in combining AI with practical applications, particularly in areas like accessibility and automation. I enjoy transforming complex ideas into simple, efficient, and user-friendly solutions that deliver meaningful value.
            <br /><br />
            I am continuously learning, experimenting, and pushing myself to grow as a developer, with the goal of building scalable and innovative solutions at the intersection of Full Stack Development and Artificial Intelligence.
          </p>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Tilt key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProject(p)}
                  className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden"
                >
                  <img src={p.img} className="h-48 w-full object-cover" />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{p.desc}</p>

                    <a href={p.github} target="_blank">
                      <button className="mt-3 text-purple-400 hover:underline">
                        View GitHub →
                      </button>
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">Languages<br/>Java, Python, HTML, CSS, JS</div>
            <div className="bg-white/10 p-6 rounded-xl">Frameworks<br/>React, Spring Boot</div>
            <div className="bg-white/10 p-6 rounded-xl">Database<br/>MySQL</div>
            <div className="bg-white/10 p-6 rounded-xl">Tools<br/>Git, VS Code, IntelliJ, Jupyter</div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Education</h2>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h3 className="font-semibold">B.Tech Artificial Intelligence & Machine Learning</h3>
            <p>SNS College of Technology</p>
            <p>CGPA: 8.6</p>
            <p>2022 - 2026</p>
          </div>
        </section>

        {/* ================= INTERNSHIPS ================= */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Internships</h2>

          <div className="space-y-6">

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold">Techvolt Software</h3>
              <p className="text-gray-300 mt-2">
                Developed RideWave ride-sharing app with dashboard, booking flow and tracking system.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold">NxtLogic Solutions</h3>
              <p className="text-gray-300 mt-2">
                Built Netflix clone using React, Spring Boot and MySQL with authentication.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold">Cognifyz Software</h3>
              <p className="text-gray-300 mt-2">
                Designed portfolio website focusing on UI and user interaction.
              </p>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Email: samyukthavijayakumar23@gmail.com</p>
          <p>Phone: 9791689182</p>
          <p>GitHub: github.com/Samyuktha0508</p>
          <p>LinkedIn: linkedin.com/in/samyuktha-rv</p>
        </section>

      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
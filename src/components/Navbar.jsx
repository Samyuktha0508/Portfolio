import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const linkStyle = (id) =>
    `cursor-pointer transition ${
      active === id
        ? "text-purple-400 border-b-2 border-purple-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <div className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-purple-400">Samyuktha</h1>

        <div className="flex gap-6 text-sm">

          <a href="#home" className={linkStyle("home")}>Home</a>
          <a href="#projects" className={linkStyle("projects")}>Projects</a>
          <a href="#about" className={linkStyle("about")}>About</a>
          <a href="#contact" className={linkStyle("contact")}>Contact</a>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
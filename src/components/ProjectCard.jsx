import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, img, tech, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden"
    >
      <img src={img} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-400 text-sm">{desc}</p>
        <p className="text-purple-400 text-xs mt-2">{tech}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
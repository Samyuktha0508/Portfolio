import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <motion.div
        className="bg-gray-900 p-6 rounded-xl max-w-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-400 mt-3">{project.desc}</p>

        <a href={project.github} target="_blank">
          <button className="mt-4 bg-purple-600 px-4 py-2 rounded">
            View GitHub
          </button>
        </a>

        <button
          onClick={onClose}
          className="mt-4 ml-3 text-red-400"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
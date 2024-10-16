import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-[#161617]">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <img
          src="/assets/icons/icon.webp"
          alt="Loader Image"
          className="object-contain w-20 h-20"
        />
      </motion.div>

      <div className="w-40 bg-white mt-10 overflow-hidden rounded">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-indigo-600 h-1 w-40 rounded"
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;

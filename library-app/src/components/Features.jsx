import { FaBookOpen, FaUsers, FaRocket } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="features" ref={ref}>
      <motion.div
        className="features-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2>Top 3 Reasons Why Choose Inkspire</h2>
      </motion.div>

      <div className="features-content">
        {[
          {
            icon: <FaBookOpen size={50} className="feature-icon" />,
            title: "Curated for Curiosity",
            desc: "Thousands of handpicked titles to inspire every reader.",
          },
          {
            icon: <FaUsers size={50} className="feature-icon" />,
            title: "Community First",
            desc: "Join events, book clubs, and a thriving creative network.",
          },
          {
            icon: <FaRocket size={50} className="feature-icon" />,
            title: "Seamless Access",
            desc: "Browse, borrow, and grow with an experience designed around you.",
          },
        ].map((item, index) => (
          <motion.div
            className="feature-item"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;

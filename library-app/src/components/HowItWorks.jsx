import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: "🔍",
      title: "Search",
      desc: `Looking for your next adventure? Search by title, author, or genre and let 
      Inkspire lead you to unforgettable stories, hidden gems, and endless knowledge — one click away.`,
    },
    {
      icon: "📚",
      title: "Use Inkspire For",
      desc: `Discover new books, research topics, fuel your imagination, 
      and grow your passions — all in one place.`,
    },
    {
      icon: "🛒",
      title: "Buy or Borrow",
      desc: `Choose to borrow or own your next great read.`,
      button: true,
    },
  ];

  return (
    <section className="how-it-works-section" ref={ref}>
      <motion.div
        className="how-it-works-section-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>How Inkspire Works</h2>
        <p>
          Your journey into stories, knowledge, and inspiration begins in just a few easy steps.
        </p>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              className="step-card"
              key={i}
              initial={{ opacity: 0, x: -30 * i, y: 30 * i }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.7, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.span
                className="step-icon text-4xl"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.1 * i,
                }}
              >
                {step.icon}
              </motion.span>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>

              {step.button && (
                <motion.button
                  className="get-card-btn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get Your Card
                </motion.button>
              )}

              {step.title === "Buy or Borrow" && (
                <span className="badge-new">NEW!</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default HowItWorks;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <motion.div
            className="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="hero-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <img src='/images/Book lover-amico.svg' alt="Library" className="hero-img" />
            </motion.div>

            <motion.div
                className="hero-content"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <h1>Inkspire is a place to grow, work, connect, learn, explore, play, read, make.</h1>
                <p>
                    Here, between the ink and the air,
                    you will find wonder stitched into every line.
                    Grow roots in wisdom, soar through imagination — 
                    at Inkspire, the journey is yours to create.
                </p>

                <motion.div
                    className="hero-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <Link to="/books">
                        <motion.button
                            className="button-link"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#3b82f6", // Tailwind blue-500
                                color: "#fff",
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See All Books
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Hero;

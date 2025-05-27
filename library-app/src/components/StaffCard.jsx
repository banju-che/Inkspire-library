import { motion } from "framer-motion";

function StaffCard({ image, name, role, book, comment }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="staff-card "
    >
      <div className="card-staff-content">
        <img
            src={image}
            alt={name}
            className="staff-image"
        />
        <div className="staff-content">
          <h3>{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="picked-book">
        <img className="staff-pickbook" alt={book} />
        <div className="picked-book-content">
            <p className="font-bold mt-2">{book}</p>
            <p className="text-sm italic mt-1">"{comment}"</p>
        </div>
      </div>
    </motion.div>
  );
}

export default StaffCard;

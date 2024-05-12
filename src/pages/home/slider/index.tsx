import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

type Props = {
  reviews: {
    id: number;
    name: string;
    img: string;
    description: string;
  }[];
};

const Reviews: React.FC<Props> = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { id, name, img, description } = reviews[index];

  const next = () => {
    let ind = index + 1;
    if (ind === reviews.length) {
      ind = 0;
    }
    setIndex(ind);
  };

  const previous = () => {
    let ind = index - 1;
    if (ind < 0) {
      ind = reviews.length - 1;
    }
    setIndex(ind);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let ind = index + 1;
      if (ind === reviews.length) {
        ind = 0;
      }
      setIndex(ind);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, reviews.length]);
  return (
    <div className="container mt-5">
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ boxShadow: "5px 35px 55px black" }}
          className="col-8 bg-danger p-4  rounded-top "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ color: "white" }}
              >
                {name}
              </motion.h1>
              <motion.img
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded img-fluid mt-2 mb-4"
                src={img}
                alt={name}
                style={{ margin: "0 auto" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {description}
              </motion.p>
              <h4 style={{ color: "wheat" }}>{id}</h4>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "55px",
          }}
        >
          <button className="btn btn-warning " onClick={previous}>
            <img
              className="img-fluid w-25 "
              src="https://cdn-icons-png.flaticon.com/128/2723/2723003.png"
              alt="previous"
            />
          </button>
          <button className="btn btn-warning" onClick={next}>
            <img
              className="img-fluid w-25"
              src="https://cdn-icons-png.flaticon.com/128/2722/2722998.png"
              alt="next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

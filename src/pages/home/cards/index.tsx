import { motion } from "framer-motion";
import React, { useState } from "react";

interface CardItem {
  id: number;
  name: string;
  description: string;
  img: string;
  bool: boolean;
}

const Cards: React.FC = () => {
  const cardItems: CardItem[] = [
    {
      id: 1,
      name: "Khinkali",
      description:
        "Khinkali is a Georgian dumpling filled with spiced meat. It is a popular dish in Georgian cuisine. It is traditionally made with minced beef or pork, mixed with onions, herbs, and spices, then wrapped in a thin dough and boiled. Khinkali is typically eaten by hand, and it's important to slurp the broth trapped inside before taking a bite.",
      img: "https://cdn-icons-png.flaticon.com/128/13506/13506029.png",
      bool: false,
    },
    {
      id: 2,
      name: "Sushi",
      description:
        "Sushi is a Japanese dish consisting of vinegared rice combined with various ingredients such as seafood, vegetables, and occasionally tropical fruits. It is often served with pickled ginger, wasabi, and soy sauce. There are numerous types of sushi, including nigiri (hand-pressed sushi), maki (sushi rolls), and sashimi (sliced raw fish or seafood).",
      img: "https://cdn-icons-png.flaticon.com/128/3183/3183425.png",
      bool: false,
    },
    {
      id: 3,
      name: "Pizza",
      description:
        "Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature. It originated in Naples, Italy, and has become one of the most popular foods worldwide. Common toppings include mozzarella cheese, tomato sauce, pepperoni, mushrooms, onions, and peppers.",
      img: "https://cdn-icons-png.flaticon.com/128/706/706934.png",
      bool: false,
    },
    {
      id: 4,
      name: "Tacos",
      description:
        "Tacos are a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling, often made with a variety of ingredients such as beef, chicken, pork, seafood, vegetables, and cheese, and commonly garnished with salsa, guacamole, cilantro, onions, and lettuce.",
      img: "https://cdn-icons-png.flaticon.com/128/8688/8688563.png",
      bool: false,
    },
  ];

  const [updatedCardItems, setUpdatedCardItems] =
    useState<CardItem[]>(cardItems);

  const showMoreOrLess = (id: number) => {
    setUpdatedCardItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, bool: !item.bool } : item
      )
    );
  };

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (_custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: _custom * 0.2 },
    }),
  };

  return (
    <div className="container-fluid" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center align-items-center ">
        {updatedCardItems.map((elem) => (
          <div key={elem.id} className="col-lg-5 col-md-10 col-sm-12 g-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={elem.id}
              variants={textAnimation}
              viewport={{ amount: 0.2, once: true }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "15px",
                backgroundColor: "brown",
                borderRadius: "21px",
                padding: "20px",
                boxShadow: "0px 50px 30px black",
              }}
            >
              <h1 style={{ color: "white" }}>{elem.name}</h1>
              <img
                className="img-fluid"
                style={{ width: "80px" }}
                src={elem.img}
                alt="card-logo"
              />
              <p
                className="card-description"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "monospace",
                }}
              >
                {elem.bool
                  ? elem.description
                  : elem.description.slice(0, 140) + "..."}
                <span
                  style={{ cursor: "pointer", color: "yellowGreen" }}
                  onClick={() => showMoreOrLess(elem.id)}
                >
                  {elem.bool ? " Show Less" : " Show More"}
                </span>
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

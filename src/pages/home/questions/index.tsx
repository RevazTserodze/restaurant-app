import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleActive = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const questionsWithAnswers: Question[] = [
    {
      id: 1,
      question: "What type of cuisine does Rezi's Restaurant specialize in?",
      answer:
        "Rezi's Restaurant specializes in Mediterranean cuisine, offering a variety of dishes inspired by the flavors of the Mediterranean region.",
    },
    {
      id: 2,
      question: "Can you describe the ambiance of Rezi's Restaurant?",
      answer:
        "Rezi's Restaurant boasts a cozy and elegant ambiance, with warm lighting, comfortable seating, and tasteful decor that reflects the Mediterranean theme. It provides a welcoming atmosphere perfect for intimate dinners or gatherings with friends and family.",
    },
    {
      id: 3,
      question: "Are there any signature dishes at Rezi's Restaurant?",
      answer:
        "Yes, Rezi's Restaurant is renowned for its signature dish, the 'Mediterranean Seafood Platter,' which features a delightful assortment of fresh seafood sourced from local markets and prepared with traditional Mediterranean spices and flavors. Additionally, their 'Lamb Tagine' is also highly recommended, showcasing tender lamb slow-cooked with aromatic spices and served with couscous.",
    },
    {
      id: 4,
      question: "Does Rezi's Restaurant offer vegetarian options?",
      answer:
        "Certainly! Rezi's Restaurant offers a variety of vegetarian options, including delicious salads, falafel plates, and vegetable-based pasta dishes. These options are prepared with fresh, high-quality ingredients to ensure a delightful dining experience for vegetarians.",
    },
  ];

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
        {questionsWithAnswers.map((elem) => (
          <div
            style={{ cursor: "pointer" }}
            className="m-3 col-lg-9 col-md-12 bg-dark text-info"
            key={elem.id}
          >
            <div>
              <p
                style={{ fontSize: "25px", textAlign: "center" }}
                onClick={() => toggleActive(elem.id)}
              >
                {elem.question}
              </p>
              <AnimatePresence initial={false}>
                {activeId === elem.id && (
                  <motion.p
                    transition={{ duration: 0.2 }}
                    key={elem.id}
                    initial={{
                      opacity: 0,
                      y: -50,
                      fontSize: "0px",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      fontSize: "20px",
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      fontSize: "0px",
                    }}
                    style={{ overflow: "hidden", textAlign: "center" }}
                  >
                    {elem.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

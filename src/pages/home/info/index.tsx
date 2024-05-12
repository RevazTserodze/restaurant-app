import { motion } from "framer-motion";

const Info = () => {
  const textAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (_custom: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: _custom * 0.2 },
    }),
  };
  return (
    <div className="container-fluid  mt-5">
      <motion.div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          viewport={{ amount: 0.2, once: true }}
          style={{
            marginLeft: "10px",
            fontSize: "20px",
            textAlign: "center",
          }}
          className="col-lg-7 col-md-10 col-sm-12  bg-success text-white p-5 rounded-top"
        >
          The menu at Rezi's is a culinary journey through Georgia's diverse
          flavors, featuring an array of classic dishes prepared with the finest
          ingredients and traditional cooking techniques. From hearty stews and
          succulent grilled meats to delicate dumplings and vibrant salads, each
          dish is a celebration of Georgia's rich culinary heritage. Signature
          dishes such as khachapuri, a cheesy bread boat filled with molten
          cheese and topped with a golden egg, and khinkali, juicy dumplings
          bursting with savory fillings, are sure to delight even the most
          discerning palate. Pair your meal with a selection of Georgian wines
          or traditional spirits for the perfect complement to your dining
          experience.
        </motion.div>
        <div className="col-lg-4 col-md-8 col-sm-12">
          <motion.img
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textAnimation}
            viewport={{ amount: 0.2, once: true }}
            className="img-fluid"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            src="https://www.logoground.com/uploads10/dv10y2022312132022-01-134925486Minimal%20Chef%20Logo.jpg"
            alt="chef-logo"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;

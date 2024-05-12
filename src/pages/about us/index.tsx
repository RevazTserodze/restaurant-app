import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      {/* This is a first about us */}
      <div className="container mt-5">
        <div
          className="row"
          style={{
            backgroundColor: "brown",
            display: "flex",
            alignItems: "center",
            borderTopRightRadius: "40%",
            borderBottomRightRadius: "50%",
          }}
        >
          <div
            className="col-lg-6 col-md-10 col-sm-12 text-white p-5"
            style={{ fontSize: "20px" }}
          >
            <p>
              Ah, Rezi's Restaurant is a delightful Georgian culinary haven
              situated in the heart of the city. Georgian cuisine is renowned
              for its rich flavors, aromatic spices, and hearty dishes, and
              Rezi's stays true to this tradition while also adding its own
              unique twist. Upon entering Rezi's, guests are welcomed by the
              warm and inviting atmosphere, adorned with touches of Georgian
              culture and hospitality. The décor might feature traditional
              Georgian motifs, vibrant colors, and perhaps even a touch of
              rustic charm, evoking a sense of being transported to the
              beautiful Caucasus region. Now, let's delve into the culinary
              delights that await at Rezi's. The menu is a celebration of
              Georgian cuisine, showcasing an array of dishes that highlight the
              diverse flavors and culinary techniques of the region. From
              classic favorites like khachapuri (cheese-filled bread) and
              khinkali (dumplings), to hearty stews bursting with tender meats
              and aromatic spices, every dish at Rezi's is a true taste of
              Georgia. One of the signature dishes you might find at Rezi's is
              the indulgent khachapuri, featuring perfectly baked bread filled
              with gooey melted cheese and topped with a golden egg yolk. It's a
              dish that's both comforting and utterly irresistible. And let's
              not forget about the tantalizing array of kebabs, grilled to
              perfection and served with a side of fragrant rice or freshly
              baked bread.
            </p>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-12">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                type: "spring",
              }}
              style={{ boxShadow: "20px 10px 10px black" }}
              className="img-fluid rounded-top"
              src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
              alt="burger-logo"
            />
          </div>
        </div>
      </div>
      {/* This is a second about us */}
      <div className="container  mt-5 ">
        <div
          className="row"
          style={{
            backgroundColor: "brown",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
        >
          <div
            className="col-lg-6 col-md-10 col-sm-12 text-white pt-1"
            style={{
              fontSize: "25px",
              textAlign: "center",
              fontFamily: "serif",
            }}
          >
            <p>
              Of course, no Georgian meal is complete without a toast of wine or
              chacha, Georgia's famous grape brandy. Rezi's offers a curated
              selection of Georgian wines, allowing guests to experience the
              rich and complex flavors of this ancient winemaking region. But
              beyond the delectable cuisine, what truly sets Rezi's apart is its
              warm and welcoming atmosphere, reminiscent of a traditional
              Georgian supra, or feast. Whether you're dining with family,
              friends, or colleagues, you're sure to feel at home at Rezi's,
              surrounded by good food, good company, and good cheer. So, if
              you're in the mood for an authentic taste of Georgia in a cozy and
              inviting setting, look no further than Rezi's Restaurant. It's a
              culinary journey you won't soon forget.
            </p>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-12">
            <img
              style={{ boxShadow: "0px 10px 10px black" }}
              className="img-fluid rounded-top "
              src="https://png.pngtree.com/png-clipart/20230910/original/pngtree-khinkali-vector-icon-fast-food-sign-stuffed-cooked-traditional-vector-png-image_11027496.png"
              alt="burger-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

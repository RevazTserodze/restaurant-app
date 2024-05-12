import menu from "../../menu/menu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StoreItems from "./CartItems";
import StoreButtons from "./FilterButtons";
import { useShoppingCart } from "../../context";
const Store = () => {
  const allButtons = ["all", ...new Set(menu.map((item) => item.category))];
  const [store, setStore] = useState(menu);

  const filter = (category: string) => {
    if (category === "all") {
      setStore(menu);
    } else {
      const filtered = menu.filter((elem) => elem.category === category);
      setStore(filtered);
    }
  };
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="container-fluid">
      <div
        className="row mt-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {allButtons.map((buttons) => (
          <div className="col-xl-1 col-lg-3 col-md-5 g-3">
            <StoreButtons filter={filter} buttons={buttons} />
          </div>
        ))}
      </div>
      <div className="row" style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait" initial={false}>
          {store.map((elem) => (
            <motion.div
              key={elem.id}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: -0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: "0.3" }}
            >
              <StoreItems {...elem} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.button
        onClick={openCart}
        whileTap={{ scale: 0.2 }}
        style={{
          borderRadius: "50%",
          boxShadow: "0px 20px 10px black",
          position: "sticky",
          bottom: "20px",
          right: "20px",
          zIndex: 2,
        }}
        className="btn btn-success p-3"
      >
        <img
          style={{ width: "80px" }}
          src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png"
          alt="cart-button"
        />
        {cartQuantity > 0 && (
          <div
            style={{
              color: "white",
              width: "2rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          >
            {cartQuantity}
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default Store;

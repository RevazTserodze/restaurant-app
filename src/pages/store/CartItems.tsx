import React from "react";
import { useShoppingCart } from "../../context";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const StoreItems: React.FC<StoreItemsProps> = ({
  id,
  name,
  price,
  img,
}: StoreItemsProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div
      className="p-3 mt-5"
      style={{
        backgroundColor: "brown",
        boxShadow: "0px 20px 10px black",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      }}
    >
      <img
        style={{ borderRadius: "21px" }}
        className="img-fluid"
        src={img}
        alt="menu-item-logo"
      />
      <h1 style={{ fontFamily: "cursive" }} className="text-white">
        {name}
      </h1>
      <p style={{ fontFamily: "monospace" }} className="text-white">
        price: {price}
        <img
          style={{ width: "25px", marginLeft: "5px", marginTop: "-3px" }}
          src="https://cdn-icons-png.flaticon.com/128/3444/3444339.png"
          alt="dollar"
        />
      </p>
      {quantity === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => increaseCartQuantity(id)}
            style={{ fontFamily: "fantasy" }}
            className="btn btn-warning w-50"
          >
            Add Me
            <img
              style={{ width: "25px", marginLeft: "5px" }}
              src="https://cdn-icons-png.flaticon.com/128/13736/13736424.png"
              alt="hungry-face"
            />
          </button>
        </div>
      ) : (
        <div
          style={{ gap: ".5rem" }}
          className="d-flex align-items-center flex-column"
        >
          <div
            style={{ gap: ".5rem" }}
            className="d-flex align-items-center justify-content-center"
          >
            <button onClick={() => decreaseCartQuantity(id)}>-</button>
            <div className="text-white">
              <span style={{ marginRight: "5px" }} className="fs-3">
                {quantity}
              </span>
              In Cart
            </div>
            <button onClick={() => increaseCartQuantity(id)}>+</button>
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className="btn btn-warning"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreItems;

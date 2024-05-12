import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="container-fluid  bg-dark rounded-5 rounded-top-0"
      style={{ marginTop: "-1px" }}
    >
      <div className="row">
        <div
          className="col-12 p-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center" }}>
            Your Are Welcome To Rezo's Restaurant
          </h1>
          <p className="w-50 " style={{ color: "white", textAlign: "center" }}>
            Rezi's Georgian Restaurant is a culinary gem nestled in the heart of
            the city, offering an authentic taste of Georgia's rich gastronomic
            heritage. As you step through the doors, you're greeted by an
            inviting ambiance that seamlessly blends traditional Georgian decor
            with modern elegance. The aroma of savory spices and freshly baked
            bread wafts from the kitchen, tantalizing your senses and setting
            the stage for a memorable dining experience. The warm and welcoming
            atmosphere is complemented by attentive service, ensuring that every
            guest feels like a cherished member of the Rezi's family.
          </p>
          <Link
            className="w-50"
            style={{ color: "inherit", textDecoration: "none" }}
            to="/store"
          >
            <button
              className="btn btn-warning w-100"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Order Now !
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

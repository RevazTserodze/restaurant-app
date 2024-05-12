const Footer = () => {
  return (
    <footer
      className="bg-dark text-white p-5 mt-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Main St, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us On !</h5>
            <ul style={{ listStyleType: "none", display: "flex", gap: "30px" }}>
              <li>
                <img
                  style={{ width: "40px" }}
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook-logo"
                />
              </li>
              <li>
                <img
                  style={{ width: "40px" }}
                  src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                  alt="instagram-logo"
                />
              </li>
              <li>
                <img
                  style={{ width: "40px" }}
                  src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                  alt="twiter-logo"
                />
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

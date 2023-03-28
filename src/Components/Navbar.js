import("./Navbar.css");

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">EXPORT SHIPMENT MANAGER</div>
      <div className="navbar__content">
        <button className="navbar__add-button">+</button>
      </div>
    </div>
  );
};

export default Navbar;

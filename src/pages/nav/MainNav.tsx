import NoneResponsiveNav from "./NoneResponsiveNav";
import ResponsiveNav from "./ResponsiveNav";

const MainNav = () => {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
      <div className="none-responsive">
        <NoneResponsiveNav />
      </div>
      <div className="responsive">
        <ResponsiveNav />
      </div>
    </div>
  );
};

export default MainNav;

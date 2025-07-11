import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => (
  <header style={{ padding: "20px 200px", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div className="header-logo" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <img src={logo} alt="logo" width={63} height={34} style={{ display: "block" }} />
      <h1>MERN CLOUD</h1>
    </div>
    <nav className="header-login">
      <Link to="/login">Log In</Link>
      <Link to="/register" style={{ marginLeft: "27px" }}>Registration</Link>
    </nav>
  </header>
);

export default Header;
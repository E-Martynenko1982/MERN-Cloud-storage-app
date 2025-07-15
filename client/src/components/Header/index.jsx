import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/user/userSlice";
import logo from "../../assets/img/logo.png";
import "../../styles/globals.scss";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <header
      style={{
        padding: "20px 200px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="header-logo" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={logo} alt="logo" width={63} height={34} style={{ display: "block" }} />
        <h1>MERN CLOUD</h1>
      </div>

      <nav className="header-login">
        {isAuth ? (
          <button onClick={handleLogout} style={{ cursor: "pointer" }}>Log out</button>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/registration" style={{ marginLeft: "27px" }}>Registration</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
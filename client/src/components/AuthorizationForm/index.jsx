import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import "../../styles/register.scss";
import Input from "../Input";
import { login } from "../../store/user/userThunks";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дані форми:", formData);
    alert("Форма відправлена! Перевірте консоль для деталей.");
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="registration-container">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <Input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            setValue={(value) =>
              setFormData((prev) => ({ ...prev, email: value }))}
            required
          />
          <label htmlFor="email">Введіть електронну пошту</label>
        </div>
        <div className="input-group">
          <Input
            type="password"
            name="password"
            placeholder=" "
            value={formData.password}
            setValue={(value) =>
              setFormData((prev) => ({ ...prev, password: value }))}
            required
          />
          <label htmlFor="password">Введіть пароль</label>
        </div>
        <button type="submit" disabled={loading}>Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import Input from "../Input";
import { registerUser } from "../../store/user/userApi";
import "../../styles/register.scss";
import "../../styles/globals.scss";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дані форми:", formData);
    alert("Форма відправлена! Перевірте консоль для деталей.");
    registerUser(formData);
  };

  return (
    <div className="registration-container">
      <h2>Реєстрація</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;

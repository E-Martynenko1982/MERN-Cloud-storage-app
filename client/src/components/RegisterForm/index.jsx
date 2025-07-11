import React, { useState } from "react";
import "../../styles/register.scss";
import Input from "../../utils/Input";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дані форми:", formData);
    alert("Форма відправлена! Перевірте консоль для деталей.");
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Введіть пароль</label>
        </div>
        <button type="submit">Вхід</button>
      </form>
    </div>
  );
}

export default RegisterForm;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/user/userThunks";
import Layout from "./components/Layout";
import RegisterForm from './components/RegisterForm';
import Login from './components/AuthorizationForm';
import "./styles/main.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch])

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/registration" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            {/* Додай інші сторінки тут */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

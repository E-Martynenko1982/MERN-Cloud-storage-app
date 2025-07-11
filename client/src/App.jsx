import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/main.scss";
import Layout from "./components/Layout";
import RegisterForm from './components/RegisterForm';

function App() {


  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/register' element={<RegisterForm />} />
            {/* Додай інші сторінки тут */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

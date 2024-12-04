import { useEffect, useState } from 'react'
import './Main.scss'
import Header from './components/Header'
import RouteHandler from './router/router.jsx'
import Footer from './components/Footer'
import Aos from "aos";
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './pageStyles.scss'
import './responsive.scss'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <RouteHandler />
      <Footer />
      <ToastContainer autoClose={3000} position='top-right' />
    </>
  )
}

export default App

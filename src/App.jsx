import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import './index.css';
import Footer from './pages/Footer';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import ScrollToTop from './components/ScrollToTop';
import MockTest from './pages/MockTest';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import DocumentChecklist from './pages/DocumentChecklist';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
  useDocumentTitle();
  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/documents" element={<DocumentChecklist />} />
        <Route path="/mocktest" element={<MockTest />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;

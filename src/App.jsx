import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Overview from './Components/Overview/Overview';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} /> 
          <Route path="overview" element={<Overview />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

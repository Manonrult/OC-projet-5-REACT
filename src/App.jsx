import './sass/main.scss';
import {Routes, Route} from 'react-router-dom';

import Layout from './component/Layout/Layout.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import ErrorPage from './pages/ErrorPage';


function App() {
  
  return (
    <div>     
      <Layout>
        {/*routing*/}
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;

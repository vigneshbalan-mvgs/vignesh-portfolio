import './App.scss';
import Navbar from './components/Sidebar/Navbar'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Products from './Router/Products'
import ProductDetail from './Router/ProductDetail'
import Member from './Router/Member';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 안에 속성값이 두 개가 들어간다 path / element 
            1. path : 페이지의 주소 URL
            2. element : path 주소로 이동 했을 때 보여줄 페이지
            / : 기본 경로
        */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/member' element={<Member />} />

        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import AboutPage from './components/about-page/AboutPage';
import Button from './components/Button';
import ProductList from './components/ProductList';
import Profile from './components/profile/Profile';

function App() {
   const [bgColor, setBgColor] = useState('transparent')
    const [count, setCount] = useState(0)

    function handleClick(e) {
        console.log('ive been clicked!')

        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        setBgColor(color)
        setCount(count + 1)
    }
  return (
    <div className="App">
      <Button count={count} bgColor={bgColor} onClick={handleClick} />
      <Button count={count} bgColor={bgColor} onClick={ handleClick} />
      <AboutPage />
      <Profile />
      <ProductList/>
    </div>
  );
}

export default App;

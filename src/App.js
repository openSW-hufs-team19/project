import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const setVh =() => {
    const vh = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }

      function onResize(){
        setVh()
      }
      window.addEventListener('resize',onResize)
  
  },[])

  const [page,setPage] = useState(0)


  return (
    <div className="mbti-layout">
      {page===0?
        <div>
          시작페이지
        </div>
        :
        <div>
          테스트페이지
        </div>
      }
      mbti test
    </div>
  );
}

export default App;

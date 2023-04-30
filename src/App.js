import { useEffect, useState } from 'react';
import './App.css';
import Carousal from './components/Carousal';
import DATA from './data';
import Description from './components/Description';
import { Card } from '@mui/material';


function App() {

  const [index, setIndex] = useState(0)
  const [slideShow, setSlideShow] = useState(false)
  console.log(index)

  useEffect(() => {

    if (slideShow === false) return
    let playSlides = setInterval(next, 3000)
    return () => {
      clearInterval(playSlides)
    }

  }, [slideShow, index])


  const playSlides = () => {
    setSlideShow(prev => !prev)
  }

  const next = () => {

    if (index === DATA.length - 1) {
      setIndex(0)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  const prev = () => {

    if (index === 0) {
      setIndex(DATA.length - 1)
    } else {
      setIndex(prevIndex => prevIndex - 1)
    }
  }

  const setImg = (imgIndex) => {
    setIndex(imgIndex)
  }

  return (
    <Card elevation={5} className="App" sx={{ borderRadius: "10px" }}>
      <Carousal data={DATA} next={next} prev={prev} setImg={setImg} index={index} />
      <Description data={DATA} index={index} slideShow={slideShow} playSlides={playSlides} />
    </Card>
  );
}

export default App;

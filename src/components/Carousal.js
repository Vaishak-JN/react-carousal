// import { useState } from "react"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Carousal = ({ data, next, prev, setImg, index }) => {


    return (
        <div className="carousal">
            <div className="current-img" >
                <img src={data[index].img} alt="img" />
            </div>
            <div className="slider" >
                <ArrowLeftIcon onClick={prev} className='btn left-arrow' fontSize='x-large' />
                <span className="thumbnail-container">
                    {data.map((img, i) => <img key={i} className={`thumbnail ${index !== i && "gray-scale"}`} onClick={() => setImg(i)} src={img.img} alt={img.title} />)}
                </span>
                <ArrowRightIcon onClick={next} className='btn right-arrow' fontSize='x-large' />
            </div>
        </div>
    )
}

export default Carousal
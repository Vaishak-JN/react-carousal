import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Typography } from '@mui/material';

const Description = ({ data, index, slideShow, playSlides }) => {


    return (
        <div className="description">
            <Typography sx={{ mb: 3 }} variant="h3" component="h2">{data[index].title}</Typography>
            <Typography variant="p" component="p" color={"text.secondary"} sx={{ mb: 3 }} >{data[index].desc}</Typography>
            <div className="play-container">
                {slideShow ? <PauseCircleFilledIcon onClick={playSlides} className="play-btn" fontSize='x-large' /> : <PlayCircleFilledIcon onClick={playSlides} className="play-btn" fontSize='x-large' />}
            </div>
        </div>
    )
}

export default Description
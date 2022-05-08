// Components
import '../components/Movie.scss'
import PropTypes from "prop-types";

// React Router
import { Link } from 'react-router-dom';

function Movie({id, title, coverImg, summary}){
    const tempImg = 'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/18797.png'
    return(
        <div>
            {
                summary=="" ? 
                <Link to={`/movie/${id}`} >
                    <img src='https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/18797.png' alt={title}/>
                </Link> :
                <Link to={`/movie/${id}`}>
                    <img src={coverImg} alt={title}/>
                </Link>
            }
            
        </div>
    );
}


Movie.protoTypes ={
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
}

export default Movie;
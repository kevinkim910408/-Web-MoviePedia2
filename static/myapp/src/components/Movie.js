// Components
import '../components/Movie.scss'
import PropTypes from "prop-types";

// React Router
import { Link } from 'react-router-dom';

function Movie({id, title, coverImg}){
    return(
        <div>
            <Link to={`/movie/${id}`} className='Header-text'><img src={coverImg} alt={title}/></Link>
        </div>
    );
}

Movie.protoTypes ={
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
}

export default Movie;
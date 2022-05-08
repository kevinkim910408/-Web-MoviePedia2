// Components
import '../components/Movie.scss'
import PropTypes from "prop-types";

function Movie({title, coverImg}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
        </div>
    );
}

Movie.protoTypes ={
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
}

export default Movie;
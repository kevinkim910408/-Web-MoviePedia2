// Components
import '../components/Movie.scss'
import PropTypes from "prop-types";

function Movie({id, title, coverImg}){
    return(
        <div style={{ width: '13rem', backgroundColor: 'black'}}>
            <img src={coverImg} alt={title}/>
        </div>
    );
}

Movie.protoTypes ={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
}

export default Movie;
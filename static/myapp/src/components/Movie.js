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
                    <div style={{
                        width:'400px', 
                        height:'600px', 
                        backgroundImage:'url(https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/18797.png)',
                        backgroundSize:"cover"}} 
                        >
                           <div style={{width:'100%', textAlign:'center'}}><h1>Information Not Provided Yet</h1></div>
                        </div>
                </Link> :
                <Link to={`/movie/${id}`}>
                    <img style={{width:'400px', height:'600px'}} src={coverImg} alt={title}/>
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
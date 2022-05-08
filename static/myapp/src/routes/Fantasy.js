// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Fantasy
function Fantasy(){
    return(
        <div>
            <Header />
            <Genre _genre={"fantasy"}/>
        </div>
    )
}

export default Fantasy;
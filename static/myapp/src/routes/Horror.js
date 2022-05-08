// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Horror
function Horror(){
    return(
        <div>
            <Header />
            <Genre _genre={"horror"}/>
        </div>
    )
}

export default Horror;
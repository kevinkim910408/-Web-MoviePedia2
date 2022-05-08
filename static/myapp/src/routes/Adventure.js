// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Adventure
function Adventure(){
    return(
        <div>
            <Header />
            <Genre _genre={"adventure"}/>
        </div>
    )
}

export default Adventure;
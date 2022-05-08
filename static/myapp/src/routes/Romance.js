// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Romance
function Romance(){
    return(
        <div>
            <Header />
            <Genre _genre={"romance"}/>
        </div>
    )
}

export default Romance;
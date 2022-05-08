// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Crime
function Crime(){
    return(
        <div>
            <Header />
            <Genre _genre={"crime"}/>
        </div>
    )
}

export default Crime;
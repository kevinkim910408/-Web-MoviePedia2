// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Comedy
function Comedy(){
    return(
        <div>
            <Header />
            <Genre _genre={"comedy"}/>
        </div>
    )
}

export default Comedy;
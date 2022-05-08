// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Action
function Action(){
    return(
        <div>
            <Header />
            <Genre _genre={"action"}/>
        </div>
    )
}

export default Action;
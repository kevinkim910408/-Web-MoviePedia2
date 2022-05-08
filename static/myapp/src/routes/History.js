// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';

// Drama
function History(){
    return(
        <div>
            <Header />
            <Genre _genre={"history"}/>
        </div>
    )
}

export default History;
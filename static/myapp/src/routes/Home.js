// Components
import Genre from '../components/Genre.js';
import Header from '../components/Header.js';


// Home
function Home(){
    return(
        <div>
            <Header />
            <Genre 
            _genre={"drama"}/>
        </div>
    )
}

export default Home;
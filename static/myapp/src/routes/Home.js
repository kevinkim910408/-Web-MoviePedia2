// Components
import Header from '../components/Header.js';

// Css
import '../routes/Home.scss'

function Home(){


    return(
        <div>
            <Header />
                <div className='flexRow'>
                    <div className="imgs"></div>
                    <div className="imgs"></div>
                    <div className="imgs"></div>
                    <div className="imgs"></div>
                    <div className="imgs"></div>
                    <div className="imgs"></div>
                </div>
        </div>
    )   
}

export default Home;
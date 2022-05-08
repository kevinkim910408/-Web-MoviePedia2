// Components
import Header from '../components/Header.js';
import Loading from '../components/Loading.js';

// Effect, State
import { useEffect, useState } from 'react';

// Css
import '../routes/Home.scss'

function Home(){
    // loading이 true면 loading글 보여주고 false면 안보여주는 state
    const [loading, setLoading] = useState(true);

    return(
        <div>
            <Header />
            {loading ? <Loading /> : 
                <div>
                </div>
            }

        </div>
    )   
}

export default Home;
// Components
import Header from '../components/Header.js';
import Loading from '../components/Loading';

// CSS
import '../routes/Home.scss'

// React 
import { useEffect, useState } from 'react';

// Home
function Home(){
    // Loading State
    const [loading, setLoading] = useState(true);

    return(
        <div>
            <Header />
            {loading ? <Loading />:<div></div>}
        </div>
    )
}

export default Home;
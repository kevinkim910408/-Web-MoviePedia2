// Components
import Header from '../components/Header.js';
import Loading from '../components/Loading.js';
import Movie from '../components/Movie.js'

// CSS
import '../routes/Home.scss'

// React 
import { useEffect, useState } from 'react';

// Home
function Home(){
    // Loading State
    const [loading, setLoading] = useState(true);

    // API로 받아온 movie들 넣어줄 array state - superhero
    const [movies, setMovies] = useState([]);

    // async wait으로 api 가져오기
    const getMovies = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=crime&sort_by=year`)).json();
    // url
    setMovies(json.data.movies);
    setLoading(false);
  }

    // 한번만 실행시킬 코드 - API 받아오기
    useEffect(()=>{
        getMovies();
    }, []);

    return(
        <div>
            <Header />
            {loading ? <Loading />:
                    <div className='movieCardsGroup'>
                        {/* map을통해 response 들을 꺼내온다.
                        Component props를 통해서 data를 넘겨준다.*/}
                        {movies.map((movie)=>
                        <div className='movieCards'>
                            <Movie 
                            key = {movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            />
                        </div>
                        )}
                    </div>}
        </div>
    )
}

export default Home;
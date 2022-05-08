// Components
import Header from '../components/Header.js';
import Loading from '../components/Loading.js';
import Movie from '../components/Movie.js'

// CSS
import '../routes/Home.scss'

// React 
import { useEffect, useState } from 'react';

// Swiper.js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

// Home
function Home(){
    // Loading State
    const [loading, setLoading] = useState(true);

    // API로 받아온 movie들 넣어줄 array state - superhero
    const [crimeMovies, setCrimeMovies] = useState([]);

    // async wait으로 api 가져오기
    const getCrimeMovies = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=crime&sort_by=year`)).json();
    // url
    setCrimeMovies(json.data.movies);
    setLoading(false);
    }

    // 한번만 실행시킬 코드 - API 받아오기
    useEffect(()=>{
        getCrimeMovies();
    }, []);

    return(
        <div>
            <Header />
            {loading ? <Loading />:
                    <div className='cardGroups'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            >
                            <div>
                            {/* map을통해 response 들을 꺼내온다.
                            Component props를 통해서 data를 넘겨준다.*/}
                            {crimeMovies.map((movie)=>
                                <div>
                                <SwiperSlide>
                                <Movie 
                                    key = {movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image} 
                                    title={movie.title} 
                                />
                                </SwiperSlide>
                                </div>
                            )} 
                            </div>
                        </Swiper>
                    </div>}
        </div>
    )
}

export default Home;
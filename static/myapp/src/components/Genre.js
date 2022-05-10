// Components
import Loading from '../components/Loading.js';
import Movie from '../components/Movie.js'

// CSS
import "../components/Genre.scss"

// Swiper.js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

// React 
import { useEffect, useState } from 'react';



function Genre({_genre}){
    // Loading State
    const [loading, setLoading] = useState(true);

     // API로 받아온 movie들 넣어줄 array state - superhero
     const [Movies, setMovies] = useState([]);

     // Props에서 받은거 꺼내와서 URL에 넣어줄거
     const genre = _genre

     // async wait으로 api 가져오기
     const getMovies = async() => {
     const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=year`)).json();
     // url
     setMovies(json.data.movies);
     setLoading(false);
     }

     console.log(Movies);
 
     // 한번만 실행시킬 코드 - API 받아오기
     useEffect(()=>{
         getMovies();
     }, []);
    return(
        <div>
            {loading ? <Loading />:
                    <div className='cardGroups'>
                        <Swiper style={{width:'400px', height:'600px'}}
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            >
                            <div>
                            {/* map을통해 response 들을 꺼내온다.
                            Component props를 통해서 data를 넘겨준다.*/}
                            {Movies.map((movie)=>
                                <div>
                                <SwiperSlide>
                                <Movie 
                                    key={movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image} 
                                    title={movie.title} 
                                    summary={movie.summary}
                                />
                                </SwiperSlide>
                                </div>
                            )} 
                            </div>
                        </Swiper>
                    </div>
                }
         </div>
    )
}

export default Genre;
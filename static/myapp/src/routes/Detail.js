import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
// useParams() - url에서 바뀌는 부분을 캐치해낸다. 

import Header from '../components/Header.js';

function Detail(){
    // loading이 true면 loading글 보여주고 false면 안보여주는 state
    const [loading, setLoading] = useState(true);

    const {id} = useParams(); // id - app.js에서 url이 변경되는 부분을 캐치해낸걸 저장한 변수

    const [details, setDetail] = useState([]);
    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetail(json.data.movie)
    }; 

    console.log(details)
    useEffect(()=> {
      getMovie();
    }, [])

    return(
        <div>
            <Header />
            <p>DETAIL PAGE</p>
        </div>
    )   
}

export default Detail;
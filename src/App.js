import MovieList from "./components/movieList/MovieList"
import MovieDetails from "./components/movieDetails/MovieDetails";
import axios from 'axios'
import {useState, useEffect} from 'react'
import { movieArray } from "./components/utility/movieArray";
import { Routes, Route } from "react-router-dom";

function App() {

  const [list, setList] = useState([])  
  const [loading, setLoading]  = useState(true)
  const [index, setIndex]= useState(10)
  const [hasMore, setHasMore] = useState(true)
const fetchMovies = () => {
  //axios.get(`https://moviedatabase8.p.rapidapi.com/Random/${index}`,
    axios.get(`https://api.escuelajs.co/api/v1/products?offset=${index}&limit=12`,
    {
        headers: {
        'x-rapidapi-key': '4f9c3e2e2dmsh01df6c95eb4696dp1845f3jsn185e6beaba18',
        'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
      }
    }
  )
  .then( res => {
      console.log(res.data)
      //setList(res.data)
      setList((prevItems) => [...prevItems, ...res.data]);
      setLoading(false)
      setIndex(prevIndex => prevIndex + 1)
      res.data.length > 0 ? setHasMore(true) : setHasMore(false)
  })
  .catch( err => {
      console.log(err)
      setLoading(false)
  })
}

useEffect( ()=>{
    //fetchMovies(index)
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=12")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
}, [])


  return (<>
    { loading && <h1>Loading</h1>}
  <Routes>
    <Route path="/" element = {<MovieList list={list} fetchMovies={fetchMovies} hasMore={hasMore}/>} />
    <Route path="movie/:movieIndex" element = {<MovieDetails list={list} />} />
  </Routes>
  </>
  );
}

export default App;

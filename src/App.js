import {useState, useEffect} from 'react';
import { LoadImages, SearchImages } from './components/api'
import './App.css';
import Image from './components/image'

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages();
  console.log(query);
  const search = () => {
    setSearch(query)
   
  }
  const searchData = SearchImages(query);
  console.log(SearchImages(query))
  return (
    <div className="App">
      <div>
        <input type = "test" onChange={(event) => setQuery(event.target.value)}/>
        <button onClick = {search}>Search</button>
      </div>
      <div>
      {data.map((img,key) => (
        <Image src = {img.urls.thumb} key = {key}/>
    ))}
      </div>
    </div>
  );
}

export default App;

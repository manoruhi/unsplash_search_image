import { useState } from 'react';
import { LoadImages, SearchImages } from './components/api'
import './App.css';
import Image from './components/image';
function App() {
  const [query, setQuery] = useState();
  const [queryQ, setSearch] = useState();
  const data = LoadImages();
  // console.log(data);
  
  
  const search = () => {
    console.log(query);
    setSearch(query);
  }
  const searchData = SearchImages(queryQ);
  console.log(searchData);
  return (
    <div className="App">
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className='contain'>
      {queryQ ? searchData.map((img,key) => (
          <Image src={img.urls.thumb} key={key}></Image>
        ))
        :data.map((img,key) => (
          <Image src={img.urls.thumb} key={key}></Image>
        ))
        }
      </div>
    </div>
  );
}

export default App;

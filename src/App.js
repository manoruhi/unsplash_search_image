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
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div class="input-group m-2" style={{ width: 100 + "vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type="search" style={{ width: 10 + "vh" }} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(event) => setQuery(event.target.value)} />
        <button type="button" className="btn btn-outline-primary" onClick={search}>search</button>
      </div>
      <div className='contain'>
        {queryQ ? searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key}></Image>
        ))
          : data.map((img, key) => (
            <Image src={img.urls.thumb} key={key}></Image>
          ))
        }
      </div>
    </div>
  );
}

export default App;

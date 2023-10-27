import {useState, useEffect} from 'react';
import axios from 'axios';
const count = 1;

function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
     axios
    .get("https://api.unsplash.com/photos?client_id=oILi-_tRMnEzNnnHvTDkS-ot_DI8mrXUsM3PHRBz6Qo")
    .then((data) =>{
        setState(data.data.results)
    }
    
    )

    }, [count])
    
    return state;
}

function SearchImages(query){
    const [state, setState] = useState([])
    useEffect(() => {
     axios
    .get("https://api.unsplash.com//search/photos?query="+query+"&client_id=oILi-_tRMnEzNnnHvTDkS-ot_DI8mrXUsM3PHRBz6Qo")
    .then((data) =>{
        console.log(data)
    }
    
    )

    }, [query])
    
    return state;
}


export{LoadImages, SearchImages}
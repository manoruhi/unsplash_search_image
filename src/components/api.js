import { useState, useEffect } from 'react';
import axios from 'axios';

function LoadImages() {
    const count = 1;
    const [state, setState] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos?client_id=oILi-_tRMnEzNnnHvTDkS-ot_DI8mrXUsM3PHRBz6Qo")
            .then((data) => {
                console.log("DATA : ", data)
                setState(data.data)
            })
    }, [count]);
    return state;
}

function SearchImages(query) {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=oILi-_tRMnEzNnnHvTDkS-ot_DI8mrXUsM3PHRBz6Qo")
            .then((data) => {
                console.log("DATA : ", data)
                setState(data.data.results)
            })
    }, [query]);
    return state;
}
// function SearchImages(query) {
//     const [state, setState] = useState([])
//     useEffect(() => {
//         axios
//             .get("https://api.unsplash.com/search/photos?query=" + query + "&client_id=oILi-_tRMnEzNnnHvTDkS-ot_DI8mrXUsM3PHRBz6Qo")
//             .then((data) => {
//                 setState(data)
//             }

//             )

//     }, [query])

//     return state;
// }


export { LoadImages, SearchImages }
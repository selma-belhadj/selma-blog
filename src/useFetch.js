import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(res => {
              if (!res.ok){
                  throw Error('could not fetch the data from that resource')
              }
                  return res.json();})
            .then( data => {
              setData(data);
              setIsPending(false);
              setError(null);})
            .catch(err => {
              setIsPending(false);
              setError(err.message);})
    },[url]);
    return { data, IsPending, error }
}

export default useFetch;
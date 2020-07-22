import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState({date:null, loading:true, error: null});


    useEffect(() => {
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log('data', data);
                setState({
                    loading: false,
                    error:null,
                    data
                })
            })

        // return () => {
        //     cleanup
        // }
    }, [url])

    return state;

}

export default useFetch

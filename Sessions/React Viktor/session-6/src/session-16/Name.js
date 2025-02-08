import React, {useState, useEffect} from 'react'

function Name() {


    const [emri ,setEmri] = useState( localStorage.getItem('emri') ||'')


    useEffect(() => {
        localStorage.setItem('emri',emri)
    } , [emri])

    return <input value={emri} onChange={(e) => setEmri(e.target.value)}/>
}

export default Name
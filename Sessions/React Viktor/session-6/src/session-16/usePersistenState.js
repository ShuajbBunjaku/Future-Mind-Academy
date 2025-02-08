import { useEffect, useState } from "react";

function usePersistenState(key, intialValue){
    const [value ,setValue] = useState(localStorage.getItem(key) || intialValue)


    useEffect(() =>{
        localStorage.setItem(key , value)
    },[value])

    
}


export default usePersistenState
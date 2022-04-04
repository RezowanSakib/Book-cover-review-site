import React, { useEffect, useState } from 'react';

const useCustomar = () => {
    const [customar,setCustomar]=useState([]);
    useEffect(()=>{
        fetch('customar.json').then(res=>res.json().then(data=>setCustomar(data)));
    },)
    return (
       [customar,setCustomar]
    );
};

export default useCustomar;
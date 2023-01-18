import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([0,0]);
    const updateWindowSize = () => { setWindowSize([window.innerWidth, window.innerHeight]); }
    useLayoutEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    },[]);
    return [windowSize[0], windowSize[1]];
}
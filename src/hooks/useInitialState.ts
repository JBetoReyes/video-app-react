import { useState, useEffect } from 'react';

interface IMyState {
    mylist: any[],
    trends: any[],
    originals: any[],
}

const useInitialState = (API: string) => {
    const [videos, setVideos] = useState({} as IMyState);
    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
    }, []);
    return videos;
}

export default useInitialState;
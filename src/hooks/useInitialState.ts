import { useState, useEffect } from 'react';
import { MyProps as CarouselItemProps } from '../components/CarouselItem';

export interface MyState {
  [key: string]: CarouselItemProps[];
}

const useInitialState = (API: string) => {
  const [videos, setVideos] = useState({} as MyState);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;

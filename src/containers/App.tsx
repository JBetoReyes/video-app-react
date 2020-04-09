import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/containers/App.scss';
const API = 'http://localhost:3000/initialState';
const renderList = (data: {[key: string]: []}, keyName: string) => {
  return (
    data[keyName] && data[keyName].length &&
    data[keyName].map((entity) => (
      <CarouselItem key={(entity as any).id} {...entity}/>
    ))
  )
};
const App = () => {
  const videos = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {
        videos.mylist && videos.mylist.length &&
        <Categories title="My List">
          <Carousel>
          {
            renderList(videos as any, 'mylist')
          }
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencies">
        <Carousel>
          {
            renderList(videos as any, 'trends')
          }
        </Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>
          {
            renderList(videos as any, 'originals')
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;

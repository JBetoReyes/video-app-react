import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import CarouselItem, {
  MyProps as CarouselItemProps,
} from '../components/CarouselItem';
import useInitialState, {
  MyState as HomeState,
} from '../hooks/useInitialState';
import '../assets/styles/containers/Home.scss';

const API = 'http://192.168.1.70:3000/initialState';

const renderList = (data: HomeState, keyName: string) => {
  return (
    data[keyName] &&
    data[keyName].length &&
    data[keyName].map((entity: CarouselItemProps) => (
      <CarouselItem
        key={entity.id}
        title={entity.title}
        contentRating={entity.contentRating}
        duration={entity.duration}
        source={entity.source}
        cover={entity.cover}
        year={entity.year}
      />
    ))
  );
};
const Home = () => {
  const videos = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist && videos.mylist.length && (
        <Categories title="My List">
          <Carousel>{renderList(videos, 'mylist')}</Carousel>
        </Categories>
      )}
      <Categories title="Tendencies">
        <Carousel>{renderList(videos, 'trends')}</Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>{renderList(videos, 'originals')}</Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

type Categories = { [key: string]: [] };

export default Home;

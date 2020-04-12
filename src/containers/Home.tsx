import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import { CarouselItemState, HomeState } from '../typings/Containers/Home';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/containers/Home.scss';
import { AppState } from '../reducers';

const renderList = (data: CarouselItemState[], isList = false) => {
  return data.map(
    ({
      id,
      title,
      contentRating,
      duration,
      source,
      cover,
      year,
    }: CarouselItemState) => (
      <CarouselItem
        id={id}
        key={id}
        title={title}
        contentRating={contentRating}
        duration={duration}
        source={source}
        cover={cover}
        year={year}
        isList={isList}
      />
    )
  );
};
const Home = ({ mylist, trends, originals }: HomeState) => {
  return (
    <>
      <Search />
      <Categories title="My List">
        <Carousel>{renderList(mylist, true)}</Carousel>
      </Categories>
      <Categories title="Tendencies">
        <Carousel>{renderList(trends)}</Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>{renderList(originals)}</Carousel>
      </Categories>
    </>
  );
};

type Categories = { [key: string]: [] };

const mapStateToProps = ({ home }: AppState) => ({
  mylist: home.mylist,
  trends: home.trends,
  originals: home.originals,
});
export default connect(mapStateToProps, null)(Home);

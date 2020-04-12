import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import { CarouselItemState, HomeState } from '../typings/Containers/Home.d';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/containers/Home.scss';
import { AppState } from '../reducers';

const renderList = (
  data: CarouselItemState[],
  filterBy = '',
  isList = false
) => {
  return data
    .filter(({ title = '' }) => {
      const sanitizeTitle = title.replace(' ', '').toLowerCase();
      const sanitizeFilter = filterBy.replace(' ', '').toLowerCase();
      const filterRegex = new RegExp(`.*${sanitizeFilter}.*`);
      if (filterBy === '') {
        return true;
      }
      return filterRegex.test(sanitizeTitle);
    })
    .map(
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
const Home = ({ mylist, trends, originals, filterBy }: HomeState) => {
  return (
    <>
      <Search />
      <Categories title="My List">
        <Carousel>{renderList(mylist, filterBy, true)}</Carousel>
      </Categories>
      <Categories title="Tendencies">
        <Carousel>{renderList(trends, filterBy)}</Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>{renderList(originals, filterBy)}</Carousel>
      </Categories>
    </>
  );
};

type Categories = { [key: string]: [] };

const mapStateToProps = ({ home }: AppState) => ({
  mylist: home.mylist,
  trends: home.trends,
  originals: home.originals,
  filterBy: home.filterBy,
});
export default connect(mapStateToProps, null)(Home);

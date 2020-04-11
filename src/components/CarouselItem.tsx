/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import deleteIcon from '../assets/static/delete-icon.png';
import '../assets/styles/components/CarouselItem.scss';

export interface MyData {
  id: number;
  title: string;
  contentRating: string;
  duration: number;
  source?: string;
  cover: string;
  year: number;
}

interface MyProps extends MyData {
  setFavorite?: (payload: MyData) => { type: string; payload: any };
  deleteFavorite?: (id: number) => { type: string; payload: number };
}

const CarouselItem = (props: MyProps) => {
  const { id, title, cover, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    if (props.setFavorite) {
      props.setFavorite({
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
      });
    }
  };
  const handleDeleteFavorite = (menuId: number) => {
    if (props.deleteFavorite) {
      props.deleteFavorite(menuId);
    }
  };
  return (
    <div className="carousel-item" role="menu">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
            onKeyDown={handleSetFavorite}
          />
          <img
            className="carousel-item__details--img"
            src={deleteIcon}
            alt="Delete Icon"
            onClick={() => handleDeleteFavorite(id)}
            onKeyDown={() => handleDeleteFavorite(id)}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutes`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect<{}, {}, MyData>(null, mapDispatchToProps)(CarouselItem);

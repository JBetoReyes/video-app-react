/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import deleteIcon from '../assets/static/delete-icon.png';
import { CarouselItemState } from '../typings/Containers/Home.d';
import { setFavorite, deleteFavorite } from '../actions/Home.action';
import '../assets/styles/components/CarouselItem.scss';
import { AppState } from '../reducers';

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

type DispatchToPropsType = typeof mapDispatchToProps;

interface OwnProps {
  isList: boolean;
}

type Props = DispatchToPropsType & CarouselItemState & OwnProps;

const handleSetFavorite = (props: Props) => {
  props.setFavorite({
    id: props.id,
    cover: props.cover,
    title: props.title,
    year: props.year,
    contentRating: props.contentRating,
    duration: props.duration,
  });
};

const handleDeleteFavorite = (props: Props) => {
  props.deleteFavorite(props.id);
};

const CarouselItem = (props: Props) => {
  const { id, title, cover, year, contentRating, duration, isList } = props;

  return (
    <div className="carousel-item" role="menu">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {!isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={() => handleSetFavorite(props as Props)}
              onKeyDown={() => handleSetFavorite(props as Props)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete Icon"
              onClick={() => handleDeleteFavorite(props as Props)}
              onKeyDown={() => handleDeleteFavorite(props as Props)}
            />
          )}
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

export default connect<{}, DispatchToPropsType, OwnProps, AppState>(
  null,
  mapDispatchToProps
)(CarouselItem);

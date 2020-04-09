import * as React from 'react';
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import { MyProps } from './Categories';
import '../assets/styles/components/CarouselItem.scss';

interface IMyProps {
  title: string;
  contentRating: string;
  duration: number;
  source: string;
  cover: string;
  year: number
};

class CarouselItem extends React.Component<MyProps> {
  static propTypes: {};
  constructor(props: IMyProps) {
    super(props);
  }

  render() {
    const {
      title,
      contentRating,
      duration,
      cover,
      year
    } = (this.props as IMyProps);

    return (
      <div className="carousel-item">
        <img
          className="carousel-item__img"
          src={cover}
          alt=""
        />
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
            />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {year} {contentRating} {duration} minutos
          </p>
        </div>
      </div>
    );
  }
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  source: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number
}

export default CarouselItem;

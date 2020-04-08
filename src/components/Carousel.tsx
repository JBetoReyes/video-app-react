import * as React from 'react';
import { ICommonProps } from '../typings/Components';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }: ICommonProps) => {
  return (
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  );
};

export default Carousel;

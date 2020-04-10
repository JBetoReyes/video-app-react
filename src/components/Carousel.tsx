import * as React from 'react';
import { CommonProps } from '../typings/Components';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }: CommonProps) => {
  return (
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  );
};

export default Carousel;

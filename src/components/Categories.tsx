import * as React from 'react';
import { ICommonProps } from '../typings/Components';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }: ICommonProps) => {
  return (
    <div className="categories">
      <h3 className="categories__title">Mi lista</h3>
      {children}
    </div>
  );
};

export default Categories;

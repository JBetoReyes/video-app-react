import * as React from 'react';
import { CommonProps } from '../typings/Components';
import '../assets/styles/components/Categories.scss';

export interface MyProps extends CommonProps {
  title: string;
}

const Categories = ({ children, title }: MyProps) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
};

export default Categories;

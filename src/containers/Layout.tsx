import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CommonProps } from '../typings/Components';

const Layout = ({ children }: CommonProps) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

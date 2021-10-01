import React from 'react';
import 'antd/dist/antd.css';
import './styles/tailwind.css';
import './main.scss';
import Header from './Header';

export default function App() {
  return <Header userId="1587765" messageCount={10} />;
}

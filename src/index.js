import React from 'react';
import { ToastContainer } from 'react-toastify';
import { StatusBar } from 'react-native';

// import './config/ReactotronConfig';

import Routes from './routes';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
      <ToastContainer />
    </>
  );
}

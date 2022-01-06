import React from 'react';
import './App.css';
import Box from "./Styling/main";
import Main from './Responsive/Main';
import Rate from './RatingComponent/Ratings';
import Page from './withRedux/Main';
import { Provider } from 'react-redux';
import store from './withRedux/store';

function App() {
  return (
    <div className="App">
      <Box></Box>
      <Main></Main>
      <Rate></Rate>
      <Provider store={store}>
        <Page></Page>
      </Provider>
    </div>
  );
}

export default App;

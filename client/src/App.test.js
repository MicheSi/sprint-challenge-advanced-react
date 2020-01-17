import React from 'react';
import {render} from '@testing-library/react';

import App from './App';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';

test('App renders without crashing', () => {
  render(<App />);
});

test('playercard is rendering data', () => {
  const {getByTestId} = render(<PlayerCard />);

  getByTestId(/playername/i);
  getByTestId(/countryname/i);
  getByTestId(/searchnumber/i);
})

test('app title is rendering', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/apptitle/i);
})

test('search dates is rendering', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/searchdates/i);
})

test('button in nav is rendering', () => {
  const {getByTestId} = render(<Navbar />)

  getByTestId(/navbtn/i);
})



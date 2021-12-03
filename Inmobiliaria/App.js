//★
//♡  ♥

import React from 'react';
import {View} from 'react-native';
import Template from './src/components/HouseTemplate';

const App = () => {
  return (
    <View>
      <Template
        name="The Willows"
        direction="3517 W. Gray St. Utica"
        beds="3"
        baths="2"
        sqfeets="230"
        price="440"
        housePic={require('../Inmobiliaria/src/imgs/house-aubrey.jpg')}
      />
      <Template
        name="Quintana Roo"
        direction="253 Fco. I. Madero Cancún"
        beds="4"
        baths="3"
        sqfeets="755"
        price="975"
        housePic={require('../Inmobiliaria/src/imgs/beach-house.jpg')}
      />
      <Template
        name="Cuernavaca"
        direction="2864 Diaz Mirón Morelos"
        beds="5"
        baths="2"
        sqfeets="489"
        price="832"
        housePic={require('../Inmobiliaria/src/imgs/cabin.jpg')}
      />
      <Template
        name="Guanajuato"
        direction="1438 Lapis Lazulli Gto."
        beds="4"
        baths="3"
        sqfeets="389"
        price="1979"
        housePic={require('../Inmobiliaria/src/imgs/mexican-house.jpg')}
      />
    </View>
  );
};

export default App;

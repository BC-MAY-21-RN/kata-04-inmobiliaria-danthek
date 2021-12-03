import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles/Styles';

const Template = props => {
  return (
    <>
      <View style={[styles.container1, styles.shadowProp]}>
        <View style={styles.imageView}>
          <ImageBackground
            //source={require('../imgs/house-aubrey.jpg')}
            source={props.housePic}
            style={styles.image}
          />
          <Text style={styles.score}>★ 4.7</Text>
        </View>
        <View style={styles.dataView}>
          <View style={styles.dataFirst}>
            <Text style={styles.houseName}>{props.name}</Text>

            <Text style={styles.direction}>{props.direction}</Text>
            <Image
              style={styles.location}
              source={require('../imgs/location.png')}></Image>
          </View>
          <View style={styles.dataSecond}>
            <Image
              style={styles.bed}
              source={require('../imgs/bed.png')}></Image>
            <Image
              style={styles.bath}
              source={require('../imgs/bath.png')}></Image>
            <Image
              style={styles.bluePrint}
              source={require('../imgs/blueprint.png')}></Image>
            <Text style={styles.bedText}>{props.beds}</Text>
            <Text style={styles.bathText}>{props.baths}</Text>
            <Text style={styles.bluePrintText}>{props.sqfeets} ft²</Text>
          </View>
          <View style={styles.dataThird}>
            <Text style={styles.priceMeter}>{props.price}/m</Text>
            <Text style={styles.heart}>🤍</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Template;

//////////////////////////////////////////////////////////////////

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    width: '99%',
    height: '25%',
    marginBottom: 4,
  },

  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  imageView: {
    width: '33%',
    height: '70%',
    position: 'absolute',
    left: 10,
    top: 30,
  },
  image: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  score: {
    color: 'rgb(114, 91, 55)',
    backgroundColor: 'rgba(255, 212, 71, 0.8)',
    borderRadius: 14,
    paddingHorizontal: 7,
    paddingVertical: 3,
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    right: '25%',
    bottom: '13%',
    textAlign: 'center',
  },
  dataView: {
    //backgroundColor: 'pink',
    width: '60%',
    height: '80%',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  dataFirst: {
    height: '50%',
  },
  houseName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  direction: {
    color: 'grey',
    fontSize: 15,

    position: 'absolute',
    left: 42,
    top: 45,
  },
  location: {
    width: '10%',
    height: '40%',
    position: 'absolute',
    left: 10,
    top: 40,
  },

  dataSecond: {
    //backgroundColor: 'brown',
    height: '25%',
  },
  bed: {
    width: '10%',
    height: '40%',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bedText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,

    position: 'absolute',
    left: 50,
    top: 2,
  },

  bath: {
    width: '10%',
    height: '60%',
    position: 'absolute',
    top: 4,
    left: 85,
  },
  bathText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    left: 120,
    top: 2,
  },

  bluePrint: {
    width: '10%',
    height: '60%',
    position: 'absolute',
    top: 6,
    left: 150,
  },
  bluePrintText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    left: 180,
    top: 2,
  },

  dataThird: {
    height: '25%',
  },
  priceMeter: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: 4,
    left: 15,
  },

  heart: {
    borderRadius: 100,
    padding: 7,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    top: 6,
    left: 195,
  },
});

export default styles;

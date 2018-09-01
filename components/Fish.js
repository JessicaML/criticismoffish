import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {

const fish = require("../assets/1.jpeg")

const img = [
    require("../assets/0.jpeg"),
    require("../assets/1.jpeg"),
    require("../assets/2.jpeg"),
    require("../assets/4.jpeg"),
    require("../assets/5.jpeg"),
    require("../assets/6.jpeg"),
    require("../assets/7.jpeg"),
    require("../assets/8.jpeg"),
    require("../assets/9.jpeg"),
    require("../assets/10.jpeg"),
    require("../assets/11.jpeg"),
    require("../assets/12.jpeg"),
    require("../assets/13.jpeg"),
    require("../assets/14.jpeg"),
    require("../assets/16.jpeg"),
    require("../assets/17.jpeg"),
    require("../assets/18.jpeg")
  ];

    const { fishImg, fishText } = this.props;
    
    return (
      <View style={styles.container}>

       <Image style={styles.logo} source={img[fishImg]}/>
       
        <Text style={styles.paragraph}>
          {fishText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});

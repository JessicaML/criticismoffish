import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { getCritStatement } from './components/utils';

// You can import from local files
import Fish from './components/Fish';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json



export default class App extends React.Component {
 constructor(props, context) {
    super(props, context)
    this.state = {
      fishImg: require("/assets/1.jpeg"),
      fishText: null
    }

    this.getFish = this.getFish.bind(this);
  }


   getFish () {

      const randomFish = Math.floor(Math.random() * (15 - 1) + 1);
      const statement = getCritStatement(randomFish)
        this.setState({ fishText: statement, fishImg: randomFish });
   }


getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
  render() {
        const { fishImg, fishText } = this.state

getCritStatement()

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Criticism of Fish
        </Text>
                <Button title="Get Fish" onPress={this.getFish}>
        Get Fish
        </Button>

          <AssetExample 
           fishImg={fishImg}
           fishText={fishText}
           />



      </View>
    );
  }
}

//default props

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
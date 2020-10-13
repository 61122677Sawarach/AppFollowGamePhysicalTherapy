import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class GraphScreen extends React.Component {
  //Setting Screen to show in Setting Option
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Graph</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text>back</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
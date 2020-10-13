import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default class HomeScreen extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.18.132.107/FollowGamePT/Patient_List.php');
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
  }

  render() {
    return (
      
    <View style={styles.container}>

      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Profile')}>
        <View style={{backgroundColor:'#40E0D0',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>
            <Text style={{color:'#000'}}>ชื่อผู้ป่วย: {item.PName}</Text>{'\n'}อายุ: {item.PAge}</Text>
          <Text style={{color:'#000'}}>เบอร์โทร: {item.PTelephone}</Text>
          <Text style={{color:'#000'}}>Email: {item.PEmail}</Text>
        </View>
        </TouchableOpacity>

        } 
      />
      
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#0099CC',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
import React from 'react';
import { StyleSheet,View,Text, Image, TouchableOpacity } from 'react-native';

export default class ProfilePatien extends React.Component {

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
          <Image
            source={require('../asset/Patient.png')}
            style={{
              width: 100,
              height: 100,
            }} 
          />
          <Text style={{color:'#000', fontWeight:'bold'}}>
            <Text style={{color:'#000'}}>ชื่อผู้ป่วย: สมศรี เงินน้อย</Text>{'\n'}อายุ: 25</Text>
          <Text style={{color:'#000'}}>เบอร์โทร: 0624586512</Text>
          <Text style={{color:'#000'}}>Email: somsrii@gmail.com</Text>
          <Text style={{color:'#000'}}>ที่อยู่: 222/5 หมู่10 ตำบลไทยบุรี อำเภอท่าศาลา จังหวัดนครศรีธรรมราช 80160</Text>
          <Image
            source={require('../asset/score_table.png')}
            style={{
              width: 400,
              height: 250,
            }} 
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Graph')}>
            <Text>Tab to watch graph</Text>
          </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40E0D0',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 60 / 2,
  },
});

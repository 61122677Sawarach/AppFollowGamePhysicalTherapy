/*import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class AddPatientScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Patient!</Text>
      </View>
    );
  }
}*/


import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
 
export default class AddPatients extends React.Component
{
    constructor()
    {
        super();
 
        this.state = { 

          Patient_Name: '', 
 
          Patient_Age: '', 
 
          Patient_Telephone: '',

          Patient_Email: '',
 
          ActivityIndicator_Loading: false, 
 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://172.18.132.107/FollowGamePT/AddPatients.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  PName : this.state.Patient_Name,
 
                  PAge : this.state.Patient_Age,
 
                  PTelephone : this.state.Patient_Telephone,

                  PEmail : this.state.Patient_Email,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
 
                this.setState({ ActivityIndicator_Loading : false });
 
            }).catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(
 
            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Enter Patient Name"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Patient_Name: TextInputText })} />
 
                <TextInput 
                  placeholder = "Enter Patient Age"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Patient_Age: TextInputText })} />
 
                <TextInput  
                  placeholder = "Enter Patient Telephone" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Patient_Telephone: TextInputText })} />

                <TextInput  
                  placeholder = "Enter Patient Email" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Patient_Email: TextInputText })} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>
 
                    <Text style = { styles.TextStyle }>Insert</Text>
 
                </TouchableOpacity>
 
                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
 
    },
 
    TextInputStyleClass:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});
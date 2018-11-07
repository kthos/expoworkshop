import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
        title="Click"
        onPress={()=>{
          alert('Hello');
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row-reverse'
  },
  viewstyle :{
    height:100,
    width:100,
    backgroundColor:'red'
  },
    box1:{
      flex:2,
      width:100,
      height:100,
      backgroundColor:'blue'
    },
    box2:{
      flex:2,
      width:100,
      height:100,
      backgroundColor:'yellow'
    },
    box3:{
      flex:1,
      width:100,
      height:100,
      backgroundColor:'green'
    }
});

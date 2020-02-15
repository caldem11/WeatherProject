import React from 'react';
import { StyleSheet, Text, View,Platform,TextInput,KeyboardAvoidingView } from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
    <View style={styles.container}>
      <Text style={[styles.largeText, styles.textStyle]}>
        San Francisco
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Cloud
      </Text>
      <Text style={[styles.largeText, styles.textStyle]}>
        24°
      </Text>

      <TextInput
        autoCorrect={false}
        placeholder="search any city"
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode = "always"
      />
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStle:{
    textAlign:'center',
    fontFamily:
      Platform.OS ==='ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText:{
    fontSize:44,
  },
  smallText:{
    fontSize:18,
  },
  textInput:{
    backgroundColor:'#666',
    color:'white',
    height:40,
    width:300,
    marginTop:20,
    marginHorizontal:20,
    alignSelf:'center',
  },
});

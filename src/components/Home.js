import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';

export default class App extends Component<{}> {
    onStartExam = (user) => {
        this.props.navigation.navigate('Location', { });
      };

    render() {
      
      return (
        <View style={styles.container}>
         <Text style={styles.welcome}>
          Bienvenido al simulador del examen de licencia de conducir!
        </Text>
           <Button title="Comenzar" onPress={() => this.onStartExam()} style={styles.spacerTop} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';

export default class Finalize extends Component<{}> {
    
    onStartExam = (user) => {
        this.props.navigation.navigate('Home', { });
      };

    render() {
        let resultTotal = null;
        if (this.props.navigation.state.params.result >= 70) {
            resultTotal = "Felicitaciones!!! tu resultado fue " + this.props.navigation.state.params.result + "%";
        } else {
            resultTotal = "Esta vez fallaste. Tu resultado fue " + this.props.navigation.state.params.result +"%. Inténtalo nuevamente!";
        }
    
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {resultTotal}
                </Text>
                <Button title="Inicio" onPress={() => this.onStartExam()} style={styles.spacerTop} />
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
  
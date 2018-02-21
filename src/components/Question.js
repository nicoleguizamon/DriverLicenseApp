import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Image, Alert } from "react-native";
import { List, ListItem } from 'react-native-elements';
import { dataquestion } from '../config/dataquestion';

import QuestionUnit from './QuestionUnit';

  export default class Question extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            checkListOption: {},
            totalQuestions: this.length(dataquestion),
            selectedAnswers: []
        };

    }
    componentDidMount(){
        let selectedValues=[]; 

        dataquestion.map((data) => {
            var val = {};
            val.questionId = data.questionId;
            val.validAnswer = data.validAnswer;
            val.selectedAnswer = 0;
            selectedValues.push(val);
        });
        this.setState({selectedAnswers : selectedValues});       
    }

    onUpdate = (val, questionId) => {
        console.log("Question onUpdate");
        console.log(val);
        for (let answer of this.state.selectedAnswers) {

            if(answer.questionId == questionId){
                
                answer.selectedAnswer = val.answerId;
            }

            
        }
       
    };

    length(obj) {
        return Object.keys(obj).length;
    }

    handleFinishPress = () => {

        let amountValid = 0;
        let notAllCompleted= false;

        for (let answer of this.state.selectedAnswers) {
            if(answer.validAnswer == answer.selectedAnswer){
                amountValid = amountValid+1;
            }else if(answer.selectedAnswer==0){
                notAllCompleted=true;

            }
        }
        if(notAllCompleted==true){
            Alert.alert(
                'No tan rápido',
                'Primero debes responder todas las preguntas',
                [                 
                  {text: 'OK', onPress: () => console.log('')},
                ],
                { cancelable: false }
              )
        }else{
            let result = amountValid / this.state.totalQuestions * 100;
            this.props.navigation.navigate('Finalize', { result:result });

        }
       
      };

    render() {  
        let questions = dataquestion.map((val, key)=>{
            return <QuestionUnit key={key} keyval={key} val={val}
                onUpdate={this.onUpdate} />
        });
        
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    {questions}
                    <Button
                        title="Terminar"
                        buttonStyle={{ marginTop: 20 }}
                        onPress={this.handleFinishPress}
                    />
                </ScrollView>
            </View>
            
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 0
    }
  });
  
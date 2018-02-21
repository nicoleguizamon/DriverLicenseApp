import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

export default class QuestionUnit extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            checkListOption: {},
        };
    }

    handleClick = (checkListOption, questionId) => {
        console.log("handleClick");
        this.props.onUpdate(checkListOption, questionId);
    }

    render() {
          function setSelectedOption(checkListOption){
            
            this.setState({
              checkListOption,
            });
           
            this.handleClick(checkListOption, this.props.val.questionId);
          }
          
          function renderOption( answer, selected, onSelect, index) {

            const textStyle = {
              paddingTop: 10,
              paddingBottom: 10,
              color: 'black',
              flex: 1,
              fontSize: 14,
            };
            const baseStyle = {
              flexDirection: 'row',
            };
            var style;
            var checkMark;
      
            if (index > 0) {
              style = [baseStyle, {
                borderTopColor: '#eeeeee',
                borderTopWidth: 1,
              }];
            } else {
              style = baseStyle;
            }
      
            if (selected) {
              checkMark = <Text style={{
                flex: 0.1,
                color: '#007AFF',
                fontWeight: 'bold',
                paddingTop: 8,
                fontSize: 20,
                alignSelf: 'center',
              }}>✓</Text>;
            }
      
            return (
              <TouchableWithoutFeedback onPress={onSelect} key={index}>
                <View style={style}>
                  <Text style={textStyle}>{answer.description}</Text>
                  {checkMark}
                </View>
              </TouchableWithoutFeedback>
            );
          }
             
          function renderContainer(answers){
            return (
              <View style={{
                backgroundColor: 'white',
                paddingLeft: 20,
                borderTopWidth: 1,
                borderTopColor: '#cccccc',
                borderBottomWidth: 1,
                borderBottomColor: '#cccccc',
              }}>
                {answers}
              </View>
            );
          }

          function RenderQuestionImage(props) {
            if (props.imageUri!= '') {
                return <Image
                    style={styles.imageQuestion}
                    source={{uri: props.imageUri}}
                />;
            }else{
                  return null;
            }
          }
       
          let answers = this.props.val.answers;
        
        return (
            
            
            <View key={this.props.val.questionId} style={styles.note}>
                <View style={styles.imageView}>
                    <RenderQuestionImage imageUri={this.props.val.image} />
                </View>
                
                <Text style={styles.noteQuestion}>{this.props.keyval + 1} - {this.props.val.description}</Text>
                <View style={{flex: 1}}>
                    <View style={{marginTop: 10, backgroundColor: 'white'}}>
                    <View style={{
                        backgroundColor: '#eeeeee',
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}>
                        
                        <RadioButtons
                        options={ answers }
                        onSelection={ setSelectedOption.bind(this) }
                        selectedOption={ this.state.checkListOption }
                        renderOption={ renderOption }
                        renderContainer={ renderContainer }
                        />
                    </View>
                    <Text style={{
                        margin: 20,
                    }}>Opción seleccionada: {this.state.checkListOption.answerId || ''}</Text>
                    </View>
                </View>  
            </View>
        );
    }
}


const styles = StyleSheet.create({
    note: {
        
        padding: 20,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    noteQuestion: {
        paddingLeft: 0,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        fontWeight: 'bold',
    },
    noteAnswer: {
        paddingLeft: 30,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    imageQuestion: {
        width: 80, 
        height: 80,
        
    },
});
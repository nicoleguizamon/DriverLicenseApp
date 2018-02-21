import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { List, ListItem } from 'react-native-elements';
import { datalocations } from '../config/datalocations';

  export default class Location extends Component<Props> {
    
    onStartTest = (datalocation) => {
        this.props.navigation.navigate('Question', { ...datalocation });
      };

    render() {     
        return (
            <ScrollView>
              <List>
                {datalocations.map((datalocation) => (
                  <ListItem
                    key={datalocation.locationId}     
                    roundAvatar               
                    avatar={{ uri: datalocation.image }}
                    title={datalocation.name}
                    subtitle={datalocation.province}
                    onPress={() => this.onStartTest(datalocation)}
                  />
                ))}
              </List>
            </ScrollView>
          );
    }
  }

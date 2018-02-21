import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../components/Feed';
import Settings from '../components/Settings';
import UserDetail from '../components/UserDetail';
import Me from '../components/Me';
import Question from '../components/Question';
import QuestionUnit from '../components/QuestionUnit';
import Location from '../components/Location';
import Home from '../components/Home';
import Finalize from '../components/Finalize';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Inicio',
    },
  },
  Location: {
    screen: Location,
    navigationOptions: ({ navigation }) => ({
      title: 'Elija una ciudad',
    }),
  },
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      title: 'Preguntas',
    }),
  },
  Finalize: {
    screen: Finalize,
    navigationOptions: ({ navigation }) => ({
      title: 'Resultado',
    }),
  }
});

export const Tabs = TabNavigator({
  Home:{
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
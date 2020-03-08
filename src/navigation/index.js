import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesListScreen from '../screens/MoviesListScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
          <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="MoviesList" component={MoviesListScreen} options={{ headerShown : false}} />
              <Stack.Screen name="MovieDetails" options={{ headerBackTitle:'Back',  headerBackTitleVisible:true,   headerTitle: '' }} component={MovieDetailsScreen}   />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
    );
  }
}
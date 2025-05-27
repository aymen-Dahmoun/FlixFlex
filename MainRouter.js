import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesListScreen from './screens/MoviesListScreen';
import SeriesListScreen from './screens/SeriesListScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function MainRouter() {
    return (
      <Stack.Navigator initialRouteName="Movies" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Movies" component={MoviesListScreen} />
        <Stack.Screen name="Series" component={SeriesListScreen} />
        <Stack.Screen name="Favorites" component={MoviesListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={MoviesListScreen} />
        <Stack.Screen name="Signin" component={MoviesListScreen} />
      </Stack.Navigator>
    );
}
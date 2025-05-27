import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MoviesListScreen from './screens/MoviesListScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SeriesListScreen from './screens/SeriesListScreen';
import TopNavBar from './comps/TopNavBar';
import BottomNavBar from './comps/BottomNavBar';
import MainRouter from './MainRouter';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <SafeAreaProvider style={styles.container}>
          <SafeAreaView style={{ flex: 1, width: '100%' }}>
              <MainRouter />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
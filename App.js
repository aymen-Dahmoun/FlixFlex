import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MoviesListScreen from './screens/MoviesListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SeriesListScreen from './screens/SeriesListScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SeriesListScreen />
    </SafeAreaProvider>
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

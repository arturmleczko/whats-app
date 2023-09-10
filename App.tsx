import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>Hey everyone!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: 18,
  },
})

export default App

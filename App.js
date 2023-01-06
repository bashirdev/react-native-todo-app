import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import TodoList from './components/TodoList';

export default function App() {
  return (
   
    <View style={styles.container}>
      {/* <Text style={{fontSize:20}}>Hello Bashir  </Text>
      <Text style={{fontSize:20}}>My List  </Text> */}
      <TodoList />
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    top:50,
    
  },
  
});

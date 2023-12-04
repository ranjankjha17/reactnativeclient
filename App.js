import { ScrollView, StyleSheet, View } from 'react-native';
import { MasterForm } from './pages/MasterForm';

export default function App() {
  return (
    <ScrollView style={{marginTop:50}}>
      <MasterForm/>
    </ScrollView>
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

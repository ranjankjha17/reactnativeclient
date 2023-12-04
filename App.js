import { ScrollView, StyleSheet, View } from 'react-native';
import { MasterForm } from './pages/MasterForm';
import { NewGroup } from './pages/NewGroup';

export default function App() {
  return (
    <ScrollView style={{marginTop:50}}>
      {/* <MasterForm/> */}
      <NewGroup/>
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

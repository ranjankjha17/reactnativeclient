import { ScrollView, StyleSheet, View } from 'react-native';
import { MasterForm } from './pages/MasterForm';
import { NewGroup } from './pages/NewGroup';
import { Form2 } from './pages/Form2';
import { TestImage } from './pages/TestImage';
import { TestGetimage } from './components/TestGetimage';

export default function App() {
  return (
    <ScrollView style={{marginTop:50}}>
      {/* <MasterForm/> */}
      {/* <NewGroup/> */}
      {/* <Form2/> */}
      {/* <TestImage/> */}
      <TestGetimage/>
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

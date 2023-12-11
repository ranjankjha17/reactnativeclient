import { ScrollView, StyleSheet, View } from 'react-native';
import { MasterForm } from './pages/MasterForm';
import { NewGroup } from './pages/NewGroup';
import { Form2 } from './pages/Form2';
import { TestImage } from './pages/TestImage';
import { TestGetimage } from './components/TestGetimage';
import { TestImage2 } from './components/TestImage2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MasterForm} />
      <Tab.Screen name="Form" component={Form2} />
      <Tab.Screen name='New Group' component={NewGroup}/>
    </Tab.Navigator>
  </NavigationContainer>

    // <ScrollView style={{marginTop:50}}>
    //   <MasterForm/>
    //   {/* <NewGroup/> */}
    //   {/* <Form2/> */}
    //   {/* <TestImage/> */}
    //   {/* <TestGetimage/> */}
    //   {/* <TestImage2/> */}
    // </ScrollView>
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

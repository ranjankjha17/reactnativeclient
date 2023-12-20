import {StyleSheet} from 'react-native';
import { MasterForm } from './pages/MasterForm';
import { NewGroup } from './pages/NewGroup';
import { Form2 } from './pages/Form2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Form') {
              iconName = 'assignment';
            } else if (route.name === 'New Group') {
              iconName = 'group';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={MasterForm} />
        <Tab.Screen name="Form" component={Form2} />
        <Tab.Screen name='New Group' component={NewGroup} />
      </Tab.Navigator>
    </NavigationContainer>

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

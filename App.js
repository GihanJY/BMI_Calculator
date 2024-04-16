import React, { useState } from 'react';

import Welcome from './Screens/Welcome';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import HealthyScreen from './Screens/HealthyScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function App(){
  const size =20;
  const color = 'black';

  const [showWelcome, setShowWelcome] = useState(true);
  console.log(showWelcome);

  const navigate = () => {
    setShowWelcome(false);
    console.log(showWelcome);
  };
  

  return (
    <NavigationContainer>
      {showWelcome ? (
        <Welcome navigate={navigate} />
      ) :(
        <Tab.Navigator
        initialRouteName='Welcome' 
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {

          let iconName;
          if (route.name === 'Home'){
              iconName = 'home-outline'
          }
          else if (route.name === 'Healthy'){
              iconName = 'heart-outline'
          }
          else if (route.name === 'About'){
              iconName = 'alert-circle-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',

          headerTitleAlign: 'center',
          headerTitleStyle: {
              fontSize: 25,
          },
          headerTintColor: '#1a3f6a',
          headerStyle: {
            backgroundColor: '#AFC8E5',
          },
      })}>
          <Tab.Screen name='Home' component={HomeScreen} options={{title: 'BMI Calculator'}}/>
          <Tab.Screen name='Healthy' component={HealthyScreen} options={{title: 'Healthy'}}/>
          <Tab.Screen name='About' component={AboutScreen} options={{title: 'About'}}/>
      </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
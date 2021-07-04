import React from 'react';
import { Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './src/routes/tab';
import { colors } from './src/constants';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {routes.map(route => (
          <Tab.Screen key={route.path} name={route.path} component={route.component} options={{
            headerStyle: {
              backgroundColor: '#e7305b'
            },
            tabBarLabel: ({ focused }) => {
              return <Text style={{ color: focused ? colors.primary : colors.gray, fontSize: 12 }}>{route.name}</Text>
            },
            tabBarIcon: ({ focused }) => {
              return <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={{ uri: route.icon }} />
            }
          }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
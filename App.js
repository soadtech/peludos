import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './src/routes/tab';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {routes.map(route => (
          <Tab.Screen key={route.path} name={route.path} component={route.component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
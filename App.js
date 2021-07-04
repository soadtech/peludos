import React from 'react';
import { Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './src/routes/tab';
import routesStack from './src/routes/stack';
import { colors } from './src/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home () {
  return (
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
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        {routesStack.map(route => (
          <Stack.Screen key={route.path} name={route.path} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const LoginScreen = React.lazy(() => import('../Components/Authentication/SignIn/SignIn'));
const SignUpScreen = React.lazy(() => import('../Components/Authentication/SignUp/SignUp'));

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign-In">
                <Stack.Screen name="Sign-In" component={LoginScreen} />
                <Stack.Screen name="Sign-Up" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

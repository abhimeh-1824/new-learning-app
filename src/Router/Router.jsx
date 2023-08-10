import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../Components/Authentication/SignIn/SignIn';
import SignUp from '../Components/Authentication/SignUp/SignUp';
const Stack = createNativeStackNavigator();
// const LoginScreen = React.lazy(() => import('../Components/Authentication/SignIn/SignIn'));
// const SignUpScreen = React.lazy(() => import('../Components/Authentication/SignUp/SignUp'));

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

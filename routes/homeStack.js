import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import React from 'react';
import Header from "../shared/header";


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#bdb6b6', height: 60 },
                    headerTintColor: '#444',
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: () => <Header title="GameZone" />,
                    }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{
                        title: 'Review Details',
                    }}
                />
            </Stack.Navigator>
    )
}
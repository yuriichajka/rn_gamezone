import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from '../screens/about';
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#bdb6b6', height: 60 },
                    headerTintColor: '#444'
                }}
            >
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerTitle: () => <Header title="About GameZone"/>
                    }}
                />
            </Stack.Navigator>
    )
}
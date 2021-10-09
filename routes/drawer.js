import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
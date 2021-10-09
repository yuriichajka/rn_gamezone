import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import MyDrawer from "./routes/drawer";

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  if (fontsLoaded) {
    return (
        <MyDrawer />
    )
  } else {
    return <AppLoading />
  }
}

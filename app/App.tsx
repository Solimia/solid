import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DamageScreen from "./screens/DamageScreen";
import DateTimeScreen from "./screens/DateTimeScreen";
import DriverAScreen from "./screens/DriverAScreen";
import HomeScreen from "./screens/HomeScreen";
import LicenseAScreen from "./screens/LicenseAScreen";

export type RootStackParamList = {
  Home: undefined;
  DateTime: undefined;
  DriverA: undefined;
  LicenseA: undefined;
  Damage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Європротокол"}}/>
        <Stack.Screen name="DateTime" component={DateTimeScreen} options={{title:"Дата та час ДТП"}}/>
        <Stack.Screen name="DriverA" component={DriverAScreen} options={{title:"Водій А"}}/>
        <Stack.Screen name="LicenseA" component={LicenseAScreen} options={{title:"Посвідчення водія"}}/>
        <Stack.Screen name="Damage" component={DamageScreen} options={{title:"Пошкодження"}}/>
      </Stack.Navigator>
   
  );
}

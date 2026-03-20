import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Оформлення Європротоколу</Text>

      <Button
        title="Оформити протокол"
        onPress={() => navigation.navigate("DateTime")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:24,
    marginBottom:30
  }
});
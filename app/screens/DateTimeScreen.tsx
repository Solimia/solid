import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function DateTimeScreen({navigation}: any){

const [date,setDate] = useState("");
const [time,setTime] = useState("");

return(
<View style={styles.container}>

<Text>Дата ДТП</Text>
<TextInput
style={styles.input}
placeholder="ДД.ММ.РРРР"
value={date}
onChangeText={setDate}
/>

<Text>Час ДТП</Text>
<TextInput
style={styles.input}
placeholder="HH:MM"
value={time}
onChangeText={setTime}
/>

<Button
title="Далі"
onPress={()=>navigation.navigate("DriverA")}
/>

</View>
)
}

const styles = StyleSheet.create({
container:{flex:1,padding:20},
input:{
borderWidth:1,
padding:10,
marginBottom:20
}
})
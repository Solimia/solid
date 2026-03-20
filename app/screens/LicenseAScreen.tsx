import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LicenseAScreen({navigation}:any){

const [license,setLicense] = useState("");
const [date,setDate] = useState("");

return(

<View style={styles.container}>

<Text>Номер посвідчення</Text>
<TextInput
style={styles.input}
value={license}
onChangeText={setLicense}
/>

<Text>Дата видачі</Text>
<TextInput
style={styles.input}
value={date}
onChangeText={setDate}
/>

<Button
title="Далі"
onPress={()=>navigation.navigate("Damage")}
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
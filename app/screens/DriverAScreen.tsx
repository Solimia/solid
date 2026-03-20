import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function DriverAScreen({navigation}:any){

const [name,setName] = useState("");
const [birth,setBirth] = useState("");
const [phone,setPhone] = useState("");
const [model,setModel] = useState("");
const [number,setNumber] = useState("");

return(

<View style={styles.container}>

<Text>Ім'я та прізвище</Text>
<TextInput style={styles.input} value={name} onChangeText={setName}/>

<Text>Дата народження</Text>
<TextInput style={styles.input} value={birth} onChangeText={setBirth}/>

<Text>Телефон</Text>
<TextInput style={styles.input} value={phone} onChangeText={setPhone}/>

<Text>Модель авто</Text>
<TextInput style={styles.input} value={model} onChangeText={setModel}/>

<Text>Номер авто</Text>
<TextInput style={styles.input} value={number} onChangeText={setNumber}/>

<Button title="Далі" onPress={()=>navigation.navigate("LicenseA")}/>

</View>

)
}

const styles = StyleSheet.create({
container:{flex:1,padding:20},
input:{
borderWidth:1,
padding:10,
marginBottom:15
}
})
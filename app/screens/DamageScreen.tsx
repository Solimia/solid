import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function DamageScreen(){

const [side,setSide] = useState("");
const [description,setDescription] = useState("");

return(

<View style={styles.container}>

<Text>Сторона пошкодження</Text>
<TextInput
style={styles.input}
placeholder="Передня / Задня / Ліва / Права"
value={side}
onChangeText={setSide}
/>

<Text>Опис пошкодження</Text>
<TextInput
style={styles.input}
placeholder="Короткий опис"
value={description}
onChangeText={setDescription}
/>

<Button title="Завершити"/>

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
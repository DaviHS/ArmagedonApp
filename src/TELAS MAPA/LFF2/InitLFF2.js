import { StatusBar } from "expo-status-bar";
import React, {  } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styleLFF2"
import Title from "./titleLFF2";

export default function InitLFF2({ route, navigation, props }) {
 

  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.formComponentes}>
       
        <View style={styles.form}>


          
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

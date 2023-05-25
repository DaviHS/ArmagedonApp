import { StatusBar } from "expo-status-bar";
import React, {  } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styleSlitter_Grossa"
import Title from "./titleSlitter_Grossa";

export default function InitSlitter_Grossa({ route, navigation, props }) {
 

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

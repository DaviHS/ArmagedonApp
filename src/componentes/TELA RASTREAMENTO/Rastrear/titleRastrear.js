import React from "react"
import {View, Text} from "react-native"
import styles from "./initStyle";

/**
 * TITULO PRIMEIRA TELA
 * @returns 
 */
export default function Title(){
    return(
<View style={styles.boxTitle}>
<Text style={styles.textTitle}>Rastreamento</Text>
</View>

    );
}
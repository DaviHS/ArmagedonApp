import React from "react";
import {View, Text} from "react-native";
import styles from "./styleSlitter_Grossa";

/**
 * TITULO PRIMEIRA TELA
 * @returns 
 */
export default function Title(){
    return(
<View style={styles.boxTitle}>
<Text style={styles.textTitle}>Slitter Grossa</Text>
</View>

    );
}
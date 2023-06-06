import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function Generator({route}) {

  const id = route.params ? route.params.id : undefined;
  const [data, setData] = useState(''); 

useEffect(() => {
  if(!route.params) return;
  setData(route.params.data);
}, [route])

  return (
    <View style={styles.container}>
      <Barcode
        format="CODE128"
        value={data}
        text={data}
        style={{ marginBottom: 20 }}
        textStyle={{ color: "#000" }}
        maxWidth={Dimensions.get("window").width / 1.5}
        
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf:'center',
      flexDirection:'row',
      
    },
    formModalCanButton: {
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      backgroundColor: "#6f426f",
      paddingTop: 14,
      paddingBottom: 14,
      alignSelf: "center",
      marginBottom: 20,
    },
  
    buttonContainer: {
      flexDirection: "row",
    },
    formLabelHideButton: {
      fontSize: 15,
      color: "#FFFFFF",
      marginLeft: 10,
      fontWeight: "bold",
      alignSelf: "center",
    },
})
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Alert } from "react-native";
import Title from './titleFundi';
import { Picker } from "@react-native-picker/picker";
import ItemFundi from "./itemFundi";
import DatabaseAS from "../../CRUD/DatabaseAS";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import styles from "./styleList";
import axios from "axios";

export default function ListFundi({ navigation }) {


  const [local, setLocal] = useState("");
  const [itemsOS, setItems] = useState([]);

  /*
  Exibir listagem de itens, selecionando um opção do filtro, exibe conforme a opção
  */
  useEffect(() => {

      DatabaseAS.getItemsOS().then((itemsOS) => setItems(itemsOS));

  }, [local]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Title />

      <ScrollView style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.itemsContainer}>

          {itemsOS.map((itemOS) => {
            //forma de exibição dos dados salvo no banco 
            return (
              <ItemFundi
                key={itemOS.id}
                id={itemOS.id}
                item={"DATA: " + itemOS.dateOf + ", HORA: " + itemOS.timeOf}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

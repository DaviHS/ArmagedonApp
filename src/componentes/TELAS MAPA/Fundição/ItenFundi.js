import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert, Modal, Dimensions } from "react-native";
import styles from "./styleItem";
import DatabaseAS from "../../CRUD/DatabaseAS";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";


export default function AppOS(props) {

  //Seleciona Item para a edição, direcionando para os espaçõs da tela pricipal
  async function handleEditPress() {
    const item = await DatabaseAS.getItem(props.id);
    props.navigation.navigate("Rastrear", item);
  }

  //Confirma a exclusão do Item selecionado
  function handleDeletePress() {
    Alert.alert(
      "Atenção",
      "Excluir rastreio?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancelamento cancelado."),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            DatabaseAS.deleteOS(props.id).then((response) =>
              props.navigation.navigate("Lista Fundicao", props.id )
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.textItem}>{props.OS}</Text>
      <View style={styles.buttonsContainer}>

      <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Icon name="delete" color="#e9e9e9" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Icon name="square-edit-outline" color="#e9e9e9" size={20} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Dimensions,
} from "react-native";
import styles from "./styleItem";
import DatabaseAS from "../../CRUD/DatabaseAS";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import axios from "axios";

export default function ItemFundi({props, navigation}) {
  const [data, setData] = React.useState("");

  //Seleciona Item para a edição, direcionando para os espaçõs da tela pricipal
  async function handleEditPress() {
    const itemOS = await DatabaseAS.getItemOS(props.id);
    props.navigation.navigate("Fundição", itemOS);
  }

  //Confirma a exclusão do Item selecionado
  function handleDeletePress() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            DatabaseAS.deleteOS(props.id).then((response) =>
              props.navigation.navigate("Lista_Fundição", { id: props.id })
            );
          },
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.item}</Text>
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

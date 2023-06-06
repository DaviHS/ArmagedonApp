import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert, Modal, Dimensions } from "react-native";
import styles from "./styleItem";
import DatabaseAS from "../../CRUD/DatabaseAS";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Barcode from "@kichiyaki/react-native-barcode-generator";


export default function AppItem(props) {
    setInterval(
      () => {
        let day = new Date().getDate();
        (day < 10) && (day = `0${day}`);
  
        let month = new Date().getMonth() + 1;
        (month < 10) && (month = `0${month}`);
  
        let year = new Date().getFullYear();
  
        setCurrentDate(
          `${day}/${month}/${year}`
        );
      },
      1000
    );
  
  const [currentDate, setCurrentDate] = useState('');
  const [data, setData] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //Seleciona Item para a edição, direcionando para os espaçõs da tela pricipal
  async function handleEditPress() {
    const item = await DatabaseAS.getItem(props.id);
    props.navigation.navigate("Rastrear", item);
  }

  //Seleciona Item para a edição, direcionando para os espaçõs da tela pricipal
   function handleUploadPress() {
    
    Alert.alert("AINDA NÃO!", "Aplicação Upload em desenvolvimento.");

        setInterval(
          () => {
            let day = new Date().getDate();
            (day < 10) && (day = `0${day}`);
      
            let month = new Date().getMonth() + 1;
            (month < 10) && (month = `0${month}`);
      
            let year = new Date().getFullYear();
      
            setCurrentDate(
              `${month}/${day}/${year}`
            );
          },
          1000
        );
        
        MAQUINA=props.maquina
        OS=props.os    
        BOBINA=props.bobina
        DIA={currentDate}
      console.log(MAQUINA, OS, BOBINA, DIA );


  }

  //Gera codeBar com o n° da OS do item selecionado
  async function handleCodeBarGenerator() {
    setData(props.barcode);
    setModalVisible(true);
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
            DatabaseAS.deleteItem(props.id).then((response) =>
              props.navigation.navigate("Lista", props.id )
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Barcode
            format="CODE128"
            value={data}
            text={data}
            style={styles.modalBarcode}
            textStyle={{ color: "#000" }}
            maxWidth={Dimensions.get("window").width / 1.5}
          />
          <TouchableOpacity
            style={styles.formModalCanButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.buttonContainer}>
              <Icon name="barcode-off" size={22} color="white" />
              <Text style={styles.formLabelHideButton}>Fechar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.textItem}>{props.item}</Text>
      <View style={styles.buttonsContainer}>

      <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Icon name="delete" color="#e9e9e9" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPress}>
          <Icon name="upload-outline" color="#e9e9e9" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.barcodeButton}
          onPress={handleCodeBarGenerator}
        >
          <Icon name="barcode" color="#e9e9e9" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Icon name="square-edit-outline" color="#e9e9e9" size={20} />
        </TouchableOpacity>

      </View>
    </View>
  );
}
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal, Alert } from "react-native";
import styles from "./initStyle";
import Title from "./titleInit";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function TelaInicial({ route, navigation, props }) {
  const [local, setLocal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleLocalChange(itemValue) {
    setLocal(itemValue);
  }

  function handleMap() {
    if(local == ""){
      Alert.alert("Mapa Inexistente", "Selecione e confirme um Mapa!")

    }
     if (local != ""){
      setModalVisible(!modalVisible);
      navigation.navigate(local)
    }
    setLocal("")
  }
  
  return (
    <View style={styles.container}>
        <Title/>
        <View style={styles.formComponentes}>

        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible); }}
      >
        <View style={styles.modalView}>
        <Text style={styles.formLabel}>Mapa de Produção: </Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.formPicker}
              selectedValue={local}
              onValueChange={(itemValue) =>
                setLocal(itemValue) && handleLocalChange
              }>
              <Picker.Item value="" label="Selecione o local: " />
              <Picker.Item value="Fundição" label="Fundição" />
              <Picker.Item value="LQ" label="LQ" />
              <Picker.Item value="Slitter Grossa" label="Slitter Grossa" />
              <Picker.Item value="Slitter Fina" label="Slitter Fina" />
              <Picker.Item value="Estufa" label="Estufa" />
              <Picker.Item value="Buhler" label="Buhler" />
              <Picker.Item value="LFF2" label="LFF2" />
              <Picker.Item value="LFF1" label="LFF1" />
              <Picker.Item value="LA9" label="LA9" />
              <Picker.Item value="Guilhotina" label="Guilhotina" />
              <Picker.Item value="Rotativa" label="Rotativa" />
              <Picker.Item value="Prensa" label="Prensa"/>
              <Picker.Item value="Calandra" label="Calandra" />
              <Picker.Item value="Seleção" label="Seleção" />
            </Picker>
          </View>
          <View style={styles.viewButtom}>
          <TouchableOpacity
            style={styles.formModalConfirmarButton}
            onPress={handleMap}
          >
            <View style={styles.buttonContainer1}>
             <Icon name="check-circle-outline" size={22} color="white" />
              <Text style={styles.formLabelHideButton}>Confirmar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formModalCloseButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.buttonContainer1}>
             <Icon name="close-circle-outline" size={22} color="white" />
              <Text style={styles.formLabelHideButton}>Fechar</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>

          <TouchableOpacity
            style={styles.formRastrearButton}
            onPress={() => navigation.navigate("Rastrear")}
            //Direciona para a tela listagem
          >
            <View style={styles.buttonContainer1}>
            <Icon name="clipboard-list-outline" size={22} color="white" />
            <Text style={styles.formLabelButton}>Rastreamento</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formMapaButton}
            onPress={() => setModalVisible(true)}
            //Direciona para a tela listagem
          >
            <View style={styles.buttonContainer1}>
            <Icon name="map" size={22} color="white" />
            <Text style={styles.formLabelButton}>Mapa de Produção</Text>
            </View>
          </TouchableOpacity>
  
    </View>
      <StatusBar style="dark" />
    </View>
  );
}

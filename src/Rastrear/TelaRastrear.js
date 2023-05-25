import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Alert, Modal, Text, TouchableOpacity, TextInput, View } from "react-native";
import Title from "./titleRastrear";
import { Picker } from "@react-native-picker/picker";
import Scanner from "../Scanner/Reader";
import DatabaseAS from "../CRUD/DatabaseAS";
import styles from "./initStyle";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default function InitR({ route, navigation, props }) {
 
  //abrir lista e encerrar o escaner
  const closeScanList = () => {
    setModalVisible(!modalVisible);
    navigation.navigate("Lista");
  };
  //Determina o valo inicial do Scanner;
  const [data, setData] = React.useState("");

  //ao alterar o espaço de trexto, ou escanear novo item, o número da OS tambem é alterado nessa tela
  function handleOsChange(data) {
    setData(data);
  }
  //ao alterar o picker, o local da máquina tambem é alterado nessa tela
  const [local, setLocal] = useState("");
  function handleLocalChange(itemValue) {
    setLocal(itemValue);
  }

  //variável para tornar visível ou não o Scanner
  const [modalVisible, setModalVisible] = useState(false);

  //coleta o valor da OS, capturado pelo Scanner
  const onCodeScanned = (data) => {
    setData(data);
  };

  // Salva novo item com máquina/ N° OS
  async function handleSavePress() {
    if (local != " ") {
      const listItem = { data, local };
      DatabaseAS.saveItem(listItem);
      console.log({ id, data, local });
      setData("");
    } else {
      Alert.alert("Atenção!", "Preencher campos em branco.");
    }
  }

  // Atualiza item pré selecionado
  async function handleUpdatePress() {
    const listItem = { data, local };

    DatabaseAS.updateItem(listItem, id);
    console.log({ id, data, local });
    setData("");
    setLocal(" ");
  }

  // Recebe Valor da outra dela para atualizar, preenchendo os campos da OS e da Máquina
  const id = route.params ? route.params.id : undefined;
  useEffect(() => {
    if (!route.params) return;
    setData(route.params.data);
    setLocal(route.params.local);
  }, [route]);

  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.formComponentes}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Operação Cancelada!", "Scanner interrompido.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Scanner onCodeScanned={onCodeScanned} />

            <View style={styles.viewButtom}>
              <TouchableOpacity
                style={styles.formModalCapButton}
                //Salva a opçao direto de Scanner, com a Máquina já selecionada
                onPress={handleSavePress}
              >
                <View style={styles.buttonContainer}>
                  <Icon name="barcode" size={22} color="white" />
                  <Text style={styles.formLabelHideButton}>Capturar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.formModalCloButton}
                onPress={() => setModalVisible(!modalVisible)}
                //Fecha o Scanner
              >
                <View style={styles.buttonContainer}>
                  <Icon name="barcode-off" size={22} color="white" />
                  <Text style={styles.formLabelHideButton}>Fechar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.formListButtonModal}
                onPress={closeScanList}
                //Método que fecha o Scanner e direciona para a outra tela (listagem de Itens)
              >
                <View style={styles.buttonContainer}>
                  <Icon name="view-list" size={28} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Localização: </Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.formPicker}
              selectedValue={local}
              onValueChange={(itemValue) =>
                setLocal(itemValue) && handleLocalChange
              }
            >
              <Picker.Item value="" label="Selecione o local: " />
              <Picker.Item value="Slitter Grossa" label="Slitter Grossa" />
              <Picker.Item value="Buhler" label="Buhler" />
              <Picker.Item value="Estufa 4,5" label="Estufa 4,5" />
              <Picker.Item value="Prensa" label="Prensa" />
              <Picker.Item value="Estufa 1,2,3" label="Estufa 1,2,3" />
              <Picker.Item value="Rotativa" label="Rotativa" />
              <Picker.Item value="LA9" label="LA9" />
              <Picker.Item value="Guilhotina" label="Guilhotina" />
              <Picker.Item
                value="Prensa Excentrica"
                label="Prensa Excentrica"
              />
              <Picker.Item value="LFF1" label="LFF1" />
              <Picker.Item value="LFF2" label="LFF2" />
              <Picker.Item value="Sliter Fina" label="Sliter Fina" />
              <Picker.Item value="Calandra" label="Calandra" />
            </Picker>
          </View>
          <Text style={styles.formLabel}>Número OS: </Text>
          <TextInput
            style={styles.formInput}
            onChangeText={handleOsChange}
            placeholder="Insira o N° da OS... "
            defaultValue={data}
            keyboardType="ascii-capable"
            clearButtonMode="always"
          />
          <TouchableOpacity
            style={styles.formScannerButton}
            onPress={() => setModalVisible(true)}
            //Torna o Scanner visível.
          >
            <View style={styles.buttonContainer}>
              <Icon name="barcode-scan" size={22} color="white" />
              <Text style={styles.formLabelButton}>Scanner</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formUpdateButton}
            onPress={handleUpdatePress}
            //Atualiza item com o ID capturado
          >
            <View style={styles.buttonContainer}>
              <Icon name="update" size={22} color="white" />
              <Text style={styles.formLabelButton}>Atualizar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formSaveButton}
            onPress={handleSavePress}
            //Salva novo item
          >
            <View style={styles.buttonContainer}>
              <Icon name="content-save" size={22} color="white" />
              <Text style={styles.formLabelButton}>Salvar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formListButton}
            onPress={() => navigation.navigate("Lista")}
            //Direciona para a tela listagem
          >
            <View style={styles.buttonContainer}>
              <Icon name="view-list" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Alert } from "react-native";
import Title from "./titleList";
import { Picker } from "@react-native-picker/picker";
import AppItem from "./Itens";
import DatabaseAS from "../CRUD/DatabaseAS";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import styles from "./styleList";
import axios from "axios";

export default function List({ navigation }) {

  /*useEffect(() => {
    axios.get('http://192.168.0.149:3030/os').then(response => {
        console.log(response.data);
    })
}, []);*/

  const [local, setLocal] = useState("");
  const [items, setItems] = useState([]);

  //ao alterar o picker, o local da máquina tambem é alterado nessa tela
  function handleLocalChange(itemValue) {
    setLocal(itemValue);
  }

  //Confirmação de exclusãO de todo o registro
  const handleClearPress = () => {
    Alert.alert(
      "Atenção",
      "Excluir todo o registro?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancelamento cancelado."),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            DatabaseAS.clearAll().then((response) =>
              navigation.navigate("Lista", items)
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  /*
  Ordenar e reunir valores com base na Máquina, enquanto o aplicato permanescer aberto
  */
  function handleOrderPress() {
    let newItem = [...items];

    newItem.sort((a, b) =>
      a.local > b.local ? 1 : b.local > a.local ? -1 : 0
    );
    setItems(newItem);
  }

  /*
  Exibir listagem de itens, selecionando um opção do filtro, exibe conforme a opção
  */
  useEffect(() => {
    if (local === "") {
      DatabaseAS.getItems().then((items) => setItems(items));
    } else {
      DatabaseAS.getItems().then((items) =>
        setItems(items.filter((item) => item.local.indexOf(local) > -1))
      );
    }
  }, [local]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Title />

      <ScrollView style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.itemsContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.card}>

              <Picker       
              /*filtro*/
                style={styles.formPicker}
                selectedValue={local}
                onValueChange={(itemValue) => setLocal(itemValue) && handleLocalChange()} >
                <Picker.Item value="" label="Filtrar Máquina: " />
                <Picker.Item value="Slitter Grossa" label="Slitter Grossa" />
                <Picker.Item value="Buhler" label="Buhler" />
                <Picker.Item value="Estufa 4,5" label="Estufa 4,5" />
                <Picker.Item value="Prensa" label="Prensa" />
                <Picker.Item value="Estufa 1,2,3" label="Estufa 1,2,3" />
                <Picker.Item value="Rotativa" label="Rotativa" />
                <Picker.Item value="LA9" label="LA9" />
                <Picker.Item value="Guilhotina" label="Guilhotina" />
                <Picker.Item value="Prensa Excentrica"label="Prensa Excentrica"/>
                <Picker.Item value="LFF1" label="LFF1" />
                <Picker.Item value="LFF2" label="LFF2" />
                <Picker.Item value="Sliter Fina" label="Sliter Fina" />
                <Picker.Item value="Calandra" label="Calandra" />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleOrderPress}
            >
              <Icon name="reorder-horizontal" color="#f6f6f6" size={24} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteAllButton}
              onPress={handleClearPress}
            >
              <Icon name="delete-forever" color="#f6f6f6" size={24} />
            </TouchableOpacity>
          </View>
          {items.map((item) => {
            //forma de exibição dos dados salvo no banco 
            return (
              <AppItem
                key={item.id}
                id={item.id}
                barcode={item.data}
                os={item.data.substr(0, 5)}
                bobina={item.data.substr(5,)}
                maquina={item.local}
                item={"A OS: " + item.data + " está na " + item.local}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

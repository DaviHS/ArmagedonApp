import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  Alert
} from "react-native";
import styles from "./styleEstufa";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "./titleEstufa";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Scanner from "../Scanner/Reader";

export default function InitEstufa({ route, navigation, props }) {

  function pesoLiquido(kgBruto, kgTara) {
    setKgLiqui(kgBruto - kgTara)
  }
  const [data, setData] = React.useState("");

    //variável para tornar visível ou não o Scanner
    const [modalVisible, setModalVisible] = useState(false);

  //coleta o valor da OS, capturado pelo Scanner
  const onCodeScanned = (data) => {
    setData(data);
    setOs(data.substr(0, 6));
    setPlaca(data.substr(6));
  };

    function handleCancelar() {
      setOs("");
      setPlaca("");
      setModalVisible(!modalVisible);
      
    }

    function handleSearch() {
      if (os == "") {
        Alert.alert ("Informação inválida", "Preencha a OS para realizar a consulta.")
      } else {
        Alert.alert ("Informação inválida", "OK")
      }
    }


  function handleLocalChange() {
    navigation.navigate("Tela Inicial");
  }

  function handleSavePress() {
    Alert.alert("Em andamento!", "Configuração api em andamento")
  }

  const [cliente, setCliente] = useState("");
  function handleClienteChange(cliente) {
    setCliente(cliente);
  }
  const [medida, setMedida] = useState("");
  function handleMedidaChange(medida) {
    setMedida(medida);
  }
  const [os, setOs] = useState("");
  function handleOsChange(os) {
    setOs(os);
  }
  const [placa, setPlaca] = useState("");
  function handlePlacaChange(placa) {
    setPlaca(placa);
  }
  const [cod, setCod] = useState("");
  function handleCodChange(cod) {
    setCod(cod);
  }
  const [lote, setLote] = useState("");
  function handleLoteChange(lote) {
    setLote(lote);
  }
  const [pedido, setPedido] = useState("");
  function handlePedidoChange(pedido) {
    setPedido(pedido);
  }
  const [kgBruto, setKgBruto] = useState(null);
  function handleKgBrutoChange(kgBruto) {
    setKgBruto(kgBruto);
    return setKgLiqui((kgBruto - (kgTara)).toFixed(2));
  }
  const [kgTara, setKgTara] = useState(null);
  function handleKgTaraChange(kgTara) {
    setKgTara(kgTara);
    return setKgLiqui((kgBruto - (kgTara)).toFixed(2));
  }
  const [kgLiqui, setKgLiqui] = useState(null);

  function KgLiquiCalculator() {
    return setKgLiqui((kgBruto - (kgTara)).toFixed(2));
  }



  const [dateOf, setDateOf] = useState("");
  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let day = date.getDate();
    day < 10 && (day = `0${day}`);

    let month = date.getMonth() + 1;
    month < 10 && (month = `0${month}`);

    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const [timeOf, setTimeOf] = useState("");
  function handleTime() {
    let day = new Date().getDate();
    day < 10 && (day = `0${day}`);

    let month = new Date().getMonth() + 1;
    month < 10 && (month = `0${month}`);

    let year = new Date().getFullYear();

    setDateOf(`${day}/${month}/${year}`);

    let hour = new Date().getHours();
    hour < 10 && (hour = `0${hour}`);

    let minute = new Date().getMinutes();
    minute < 10 && (minute = `0${minute}`);

    setTimeOf(`${hour}:${minute}`);
  }

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const toggleDataPicker = () => {
    setShowDate(!showDate);
  };

  const onChangeD = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      toggleDataPicker();
      setDateOf(formatDate(currentDate));
    }
  };

  const [time, setTime] = useState(new Date());

  const [showTime, setShowTime] = useState(false);

  const toggleTimePicker = () => {
    setShowTime(!showTime);
  };

  const onChangeT = ({ type }, selectedTime) => {
    if (type == "set") {
      const currentDate = selectedTime;
      setTime(currentDate);

      toggleTimePicker();
      setTimeOf(formatTime(currentDate));
    }
  };

  const formatTime = (rawDate) => {
    let time = new Date(rawDate);

    let hour = time.getHours();
    hour < 10 && (hour = `0${hour}`);

    let minute = time.getMinutes();
    minute < 10 && (minute = `0${minute}`);

    return `${hour}:${minute}`;
  };

  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.formComponentes}>
      <Modal
        transparent={true}
          animationType="fade"
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
                onPress={() => setModalVisible(!modalVisible)}
                //Salva a opçao direto de Scanner, com a Máquina já selecionada
              >
                <View style={styles.buttonContainer}
                >
                  <Icon name="check-underline" size={22} color="white" />
                  <Text style={styles.formLabelHideButton}>Confirmar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.formModalCloButton}
                onPress={handleCancelar}
                //Fecha o Scanner
              >
                <View style={styles.buttonContainer}>
                  <Icon name="barcode-off" size={22} color="white" />
                  <Text style={styles.formLabelHideButton}>Cancelar</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Cliente: </Text>
            <TextInput
              style={styles.formInputRow1}
              editable={false}
              placeholder="Cliente"
              onChangeText={handleClienteChange}
              defaultValue={cliente}
            ></TextInput>
          </View>
          </View>
          <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Medida do Produto: </Text>
            <TextInput
              style={styles.formInputRow1}
              editable={false}
              placeholder="Medida do Produto"
              onChangeText={handleMedidaChange}
              defaultValue={medida}
            ></TextInput>
          </View>

        </View>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>N° OS: </Text>
            
              <TextInput
              keyboardType='numeric'
                style={styles.formInputRow3}
                placeholder="N° OS"
                onChangeText={handleOsChange}
                defaultValue={os}
              ></TextInput>

          </View>
          <View >
          <Text style={styles.formLabel}>N° Placa: </Text>
          <View style={styles.formButtom}>

          <TextInput
              style={styles.formInputRow3}
              placeholder="N° Placa"
              onChangeText={handlePlacaChange}
              defaultValue={placa}
              ></TextInput>

          <TouchableOpacity style={styles.searchButtom} onPress={handleSearch}>
                <Icon name="database-search-outline" color="#e9e9e9" size={15} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.scanButtom} onPress={() => setModalVisible(true)}>
                <Icon name="barcode-scan" color="#e9e9e9" size={15} />
              </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={styles.formRow}>

        <View >
            <Text style={styles.formLabel}>Código: </Text>
            <TextInput
            keyboardType='numeric'
              style={styles.formInputRow2}
              placeholder="Código"
              onChangeText={handleCodChange}
              defaultValue={cod}
            ></TextInput>
          </View>

        <View >
            <Text style={styles.formLabel}>Lote: </Text>
            <TextInput
            keyboardType='numeric'
              style={styles.formInputRow2}
              placeholder="Lote"
              onChangeText={handleLoteChange}
              defaultValue={lote}
            ></TextInput>
          </View>

          <View >
            <Text style={styles.formLabel}>N° Pedido: </Text>
            <TextInput
            keyboardType='numeric'
              style={styles.formInputRow2}
              placeholder="N° Pedido"
              onChangeText={handlePedidoChange}
              defaultValue={pedido}
            ></TextInput>
          </View>
        </View>

<View>
  <Text style={styles.formLabelTitle} >Peso:</Text>
</View>
<View style={styles.formRow}>

<View >
    <Text style={styles.formLabel}>Peso Bruto (Kg):</Text>
    <TextInput
      style={styles.formInputRow2}
      keyboardType='numeric'
      placeholder="Peso Bruto (Kg)"
      onChangeText={handleKgBrutoChange}
      defaultValue={kgBruto}
    ></TextInput>
  </View>

<View >
    <Text style={styles.formLabel}>Peso Tara (Kg):</Text>
    <TextInput
    keyboardType='numeric'
      style={styles.formInputRow2}
      placeholder="Peso Tara (Kg)"
      onChangeText={handleKgTaraChange}
      defaultValue={kgTara}
    ></TextInput>
  </View>

  <View >
    <Text style={styles.formLabel}>Peso Líquido (Kg):</Text>

    <TouchableOpacity style={styles.liquiButton} onPress={KgLiquiCalculator}>
                <Text>{kgLiqui} </Text>
   </TouchableOpacity>
  </View>
</View>

        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Data: </Text>

            {showDate && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChangeD}
              />
            )}

            {!showDate && (
              <Pressable onPress={toggleDataPicker} >
                <TextInput
                  value={dateOf}
                  onChangeText={setDateOf}
                  style={styles.formInputRow4}
                  placeholder="Data Pesagem"
                  editable={false}
                />
              </Pressable>
            )}
          </View>
          <View >
            <Text style={styles.formLabel}>Hora: </Text>

            <View style={styles.formButtom}>
              {showTime && (
                <DateTimePicker
                  mode="time"
                  display="spinner"
                  value={time}
                  onChange={onChangeT}
                />
              )}

              {!showTime && (
                <Pressable onPress={toggleTimePicker} >
                  <TextInput
                  editable={false}
                    value={timeOf}
                    style={styles.formInputRow4}
                    placeholder="Hora Pesagem"
                    onChangeText={setTimeOf}
                  ></TextInput>
                </Pressable>
              )}
              <TouchableOpacity style={styles.timeButton} onPress={handleTime}>
                <Icon name="clock-outline" color="#e9e9e9" size={15} />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.formRow}>
          <TouchableOpacity
            style={styles.formSaveButton}
            onPress={handleSavePress}
          >
            <View style={styles.buttonContainer}>
              <Icon name="content-save" size={18} color="white" />
              <Text style={styles.formLabelButton}>Salvar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formCancelButton}
          onPress={handleLocalChange}>
            <View style={styles.buttonContainer} >
              <Icon name="close-box-outline" size={18} color="white" />
              <Text style={styles.formLabelButton}>Cancelar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

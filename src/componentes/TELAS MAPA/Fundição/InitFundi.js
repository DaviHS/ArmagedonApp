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
import styles from "./styleFundi";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "./titleFundi";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Scanner from "../Scanner/Reader";

export default function InitFundi({ route, navigation, props }) {
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

  const [lote, setLote] = useState("");
  function handleLoteChange(lote) {
    setLote(lote);
  }
  const [placa, setPlaca] = useState("");
  function handlePlacaChange(placa) {
    setPlaca(placa);
  }
  const [os, setOs] = useState("");
  function handleOsChange(os) {
    setOs(os);
  }

  const [largOs, setLargOs] = useState("");
  function handleLargOsChange(largOs) {
    setLargOs(largOs);
  }

  const [largFund, setLargFund] = useState("");
  function handleLargFundChange(largFund) {
    setLargFund(largFund);
  }

  const [material, setMaterial] = useState("");
  function handleMaterialChange(material) {
    setMaterial(material);
  }

  const [bica, setBica] = useState("");
  function handleBicaChange(bica) {
    setBica(bica);
  }

  const [coqui, setCoqui] = useState("");
  function handleCoquiChange(coqui) {
    setCoqui(coqui);
  }

  const [pf, setPf] = useState("");
  function handlePFChange(pf) {
    setPf(pf);
  }

  const [cliente, setCliente] = useState("");
  function handleClienteChange(cliente) {
    setCliente(cliente);
  }

  const [peso, setPeso] = useState("");
  function handlePesoChange(peso) {
    setPeso(peso);
  }

  const [medida, setMedida] = useState("");
  function handleMedidaChange(medida) {
    setMedida(medida);
  }

  const [turno, setTurno] = useState("");
  function handleTurnoChange(turno) {
    setTurno(turno);
  }

  const [tratador, setTratador] = useState("");
  function handleTratadorChange(tratador) {
    setTratador(tratador);
  }

  const [coquilheiro, setCoquilheiro] = useState("");
  function handleCoquilheiroChange(coquilheiro) {
    setCoquilheiro(coquilheiro);
  }

  const [def, setDef] = useState("");
  function handleDefChange(def) {
    setDef(def);
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
          <View style={styles.formColumn}>
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
              <Pressable onPress={toggleDataPicker} style={styles.pressable}>
                <TextInput
                  value={dateOf}
                  onChangeText={setDateOf}
                  style={styles.formInputRow1}
                  placeholder="Fundição"
                  editable={false}
                />
              </Pressable>
            )}
          </View>
          <View style={styles.formColumn}>
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
                <Pressable onPress={toggleTimePicker} style={styles.pressable}>
                  <TextInput
                  editable={false}
                    value={timeOf}
                    style={styles.formInputRow1}
                    placeholder="Fundição"
                    onChangeText={setTimeOf}
                  ></TextInput>
                </Pressable>
              )}
              <TouchableOpacity style={styles.timeButton} onPress={handleTime}>
                <Icon name="clock-outline" color="#e9e9e9" size={15} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Lote: </Text>

            <TextInput
              style={styles.formInputLote}
              placeholder="Lote"
              onChangeText={handleLoteChange}
              defaultValue={lote}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° Placa: </Text>

            <TextInput
              style={styles.formInputRow2}
              //  editable={false}
              placeholder="N° Placa"
              onChangeText={handlePlacaChange}
              defaultValue={placa}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° OS: </Text>
            <View style={styles.formButtom}>
              <TextInput
                style={styles.formInputRow3}
                //  editable={false}
                placeholder="N° OS"
                onChangeText={handleOsChange}
                defaultValue={os}
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
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Larg. Real OS: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Larg. Real OS"
              onChangeText={handleLargOsChange}
              defaultValue={largOs}
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Larg. Fundida: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              //    editable={false}
              placeholder="Larg. Fundida"
              onChangeText={handleLargFundChange}
              defaultValue={largFund}
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Material: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Material"
              onChangeText={handleMaterialChange}
              defaultValue={material}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Temp. Bica: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              //    editable={false}
              placeholder="Temperatura Bica"
              onChangeText={handleBicaChange}
              defaultValue={bica}
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Temp. Coquilha:</Text>
            <TextInput
              style={styles.formInputRow4_5}
              //    editable={false}
              placeholder="Temp. Coquilha"
              onChangeText={handleCoquiChange}
              defaultValue={coqui}
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° PF: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="N° PF"
              onChangeText={handlePFChange}
              defaultValue={pf}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Cliente(s): </Text>
            <TextInput
              style={styles.formInputRow7}
              editable={false}
              placeholder="Cliente(s)"
              onChangeText={handleClienteChange}
              defaultValue={cliente}
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Peso: </Text>
            <TextInput
              style={styles.formInputRow7Peso}
              editable={false}
              placeholder="Peso"
              onChangeText={handlePesoChange}
              defaultValue={peso}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Medida do Produto: </Text>
            <TextInput
              style={styles.formInputRow7}
              editable={false}
              placeholder="Medida do Produto"
              onChangeText={handleMedidaChange}
              defaultValue={medida}
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Turno: </Text>
            <TextInput
              style={styles.formInputRow7Peso}
              //    editable={false}
              placeholder="Turno"
              onChangeText={handleTurnoChange}
              defaultValue={turno}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Nome Tratador: </Text>
            <TextInput
              style={styles.formInputRow8}
              //       editable={false}
              placeholder="Nome Tratador"
              onChangeText={handleTratadorChange}
              defaultValue={tratador}
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Nome Coquielheiro:</Text>
            <TextInput
              style={styles.formInputRow8}
              //      editable={false}
              placeholder="Nome Coquielheiro"
              onChangeText={handleCoquilheiroChange}
              defaultValue={coquilheiro}
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Cod Def. %: </Text>
            <TextInput
              style={styles.formInputRow8Def}
              //      editable={false}
              placeholder="Cod Def. %"
              onChangeText={handleDefChange}
              defaultValue={def}
            ></TextInput>
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

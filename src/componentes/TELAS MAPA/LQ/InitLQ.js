import { StatusBar } from "expo-status-bar";
import React, {useState}from "react";
import { Text, TouchableOpacity, View, TextInput, Modal, Alert, Pressable } from "react-native";
import styles from "./styleLQ";
import Title from "./titleLQ";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Scanner from "../Scanner/Reader";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function InitLQ({ route, navigation, props }) {
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
 //   setOs("");
 //   setPlaca("");
    setModalVisible(!modalVisible);
    
  }
  function handleLocalChange() {
    navigation.navigate("Tela Inicial");
  }
  function handleSavePress() {
    Alert.alert("Em andamento!", "Configuração api em andamento")
  }
  function handleSearch() {
    if (data == "") {
      Alert.alert ("Informação inválida", "Preencha a OS para realizar a consulta.")
    } else {
      Alert.alert ("Informação inválida", "OK")
    }
  }

  const [cliente, setCliente] = useState('');
  function handleClienteChange(cliente) {
    setCliente(cliente)
  }
  const [lote, setLote] = useState('');
  function handleLoteChange(lote) {
    setLote(lote)
  }
  const [os, setOs] = useState('');
  function handleOsChange(os) {
    setOs(os)
  }
  const [placa, setPlaca] = useState('');
  function handlePlacaChange(placa) {
    setPlaca(placa)
  }
  const [medida, setMedida] = useState('');
  function handleMedidaChange(medida) {
    setMedida(medida)
  }
  const [material, setMaterial] = useState('');
  function handleMaterialChange(material) {
    setMaterial(material)
  }
  const [largPlaca, setLargPlaca] = useState('');
  function handleLargPlacaChange(largPlaca) {
    setLargPlaca(largPlaca)
  }
  const [espesPlaca, setEspesPlaca] = useState('');
  function handleEspesPlacaChange(espesPlaca) {
    setEspesPlaca(espesPlaca)
  }
  const [pf, setPf] = useState('');
  function handlePfChange(pf) {
    setPf(pf)
  }
  const [inicio, setInicio] = useState('');
  function handleInicioChange(inicio) {
    setInicio(inicio)
  }
  const [fim, setFim] = useState('');
  function handleFimChange(fim) {
    setFim(fim)
  }
  const [laminacao, setLaminacao] = useState('');
  function handleLaminacaoChange(laminacao) {
    setLaminacao(laminacao)
  }
  const [digital, setDigital] = useState('');
  function handleDigitalChange(digital) {
    setDigital(digital)
  }
  const [espera, setEspera] = useState('');
  function handleEsperaChange(espera) {
    setEspera(espera)
  }
  const [cabeca, setCabeca] = useState('');
  function handleCabecaChange(cabeca) {
    setCabeca(cabeca)
  }
  const [meio, setMeio] = useState('');
  function handleMeioChange(meio) {
    setMeio(meio)
  }
  const [pe, setPe] = useState('');
  function handlePeChange(pe) {
    setPe(pe)
  }
  const [acima, setAcima] = useState('');
  function handleAcimaChange(acima) {
    setAcima(acima)
  }
  const [defeito, setDefeito] = useState('');
  function handleDefeitoChange(defeito) {
    setDefeito(defeito)
  }
  const [qtd, setQtd] = useState('');
  function handleQtdChange(qtd) {
    setQtd(qtd)
  }

  const [dateOf, setDateOf] = useState("");

  const [timeOf, setTimeOf] = useState("");

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
      setDateOf(formatTime(currentDate));
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
              placeholder="Cliente(s)"
              defaultValue={cliente}
              onChangeText={handleClienteChange}
            ></TextInput>
          </View>

          <View >
            <Text style={styles.formLabel}>Lote: </Text>

            <TextInput
              style={styles.formInputLote}
              placeholder="Lote"
              defaultValue={lote}
              onChangeText={handleLoteChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>N° OS: </Text>
            <View style={styles.formButtom}>
              <TextInput
                style={styles.formInputRow2}
                placeholder="N° OS"
                defaultValue={os}
                onChangeText={handleOsChange}
              ></TextInput>
                 <TouchableOpacity style={styles.searchButtom} onPress={handleSearch}>
                <Icon
                  name="database-search-outline"
                  color="#e9e9e9"
                  size={15}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.scanButtom} onPress={() => setModalVisible(true)}>
                <Icon name="barcode-scan" color="#e9e9e9" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>N° Placa: </Text>
            <TextInput
              style={styles.formInputRow3}
              placeholder="N° Placa"
              defaultValue={placa}
              onChangeText={handlePlacaChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Medida do Produto: </Text>
            <TextInput
              style={styles.formInputRow1}
              placeholder="Medida do Produto"
              defaultValue={medida}
              onChangeText={handleMedidaChange}
            ></TextInput>
          </View>
          <View >
            <Text style={styles.formLabel}>Material: </Text>

            <TextInput
              style={styles.formInputLote}
              placeholder="Material"
              defaultValue={material}
              onChangeText={handleMaterialChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Larg. da Placa:</Text>
            <TextInput
              style={styles.formInputRow5}
              placeholder="Largura da Placa"
              defaultValue={largPlaca}
              onChangeText={handleLargPlacaChange}
            ></TextInput>
          </View>

          <View >
            <Text style={styles.formLabel}>Espes. da Placa:</Text>
            <TextInput
              style={styles.formInputRow5}
              placeholder="Espessura da Placa"
              defaultValue={espesPlaca}
              onChangeText={handleEspesPlacaChange}
            ></TextInput>
          </View>
          <View >
            <Text style={styles.formLabel}>N° PF: </Text>

            <TextInput
              style={styles.formInputPF}
              placeholder="N° PF"
              defaultValue={pf}
              onChangeText={handlePfChange}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Hora Início: </Text>

            {showDate && (
              <DateTimePicker
                mode="time"
                display="spinner"
                value={date}
                onChange={onChangeD}
              />
            )}

            {!showDate && (
              <Pressable onPress={toggleDataPicker}>
                <TextInput
                  value={dateOf}
                  onChangeText={setDateOf}
                  style={styles.formInputRow6_1}
                  placeholder="Hora Início"
                  editable={false}
                />
              </Pressable>
            )}
          </View>
          <View >
            <Text style={styles.formLabel}>Hora Fim:</Text>
            {showTime && (
                <DateTimePicker
                  mode="time"
                  display="spinner"
                  value={time}
                  onChange={onChangeT}
                />
              )}

              {!showTime && (
                <Pressable onPress={toggleTimePicker}>
                  <TextInput
                    editable={false}
                    value={timeOf}
                    style={styles.formInputRow6_1}
                    placeholder="Hora Fim"
                    onChangeText={setTimeOf}
                  ></TextInput>
                </Pressable>
              )}

          </View>

          <View >
            <Text style={styles.formLabel}>Tempo de Laminação:</Text>
            <TextInput
              style={styles.formInputRow6_2}
              editable={false}
              placeholder="Tempo Total de Laminação"
              defaultValue={laminacao}
              onChangeText={handleLaminacaoChange}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Tempo Relógio Digital:</Text>
            <TextInput
              style={styles.formInputRow7}
              placeholder="Tempo Relógio Digital"
              defaultValue={digital}
              onChangeText={handleDigitalChange}
            ></TextInput>
          </View>

          <View >
            <Text style={styles.formLabel}>Tempo de Espera de Placa(F.D):</Text>
            <TextInput
              style={styles.formInputRow7}
              placeholder="Tempo de Espera de Placa(F.D)"
              defaultValue={espera}
              onChangeText={handleEsperaChange}
            ></TextInput>
          </View>
        </View>


        <View style={styles.formRow}>
          <View >
            <Text style={styles.formLabel}>Tempe. Cabeça:</Text>
            <TextInput
              style={styles.formInputRow8_1}
              placeholder="Temperatura Cabeça"
              defaultValue={cabeca}
              onChangeText={handleCabecaChange}
            ></TextInput>
          </View>

          <View >
            <Text style={styles.formLabel}>Tempe. Meio:</Text>
            <TextInput
              style={styles.formInputRow8_1}
              placeholder="Temperatura Meio"
              defaultValue={meio}
              onChangeText={handleMeioChange}
            ></TextInput>
          </View>
          <View >
            <Text style={styles.formLabel}>Tempe. Pé:</Text>
            <TextInput
              style={styles.formInputRow8_1}
              placeholder="Temperatura Pé"
              defaultValue={pe}
              onChangeText={handlePeChange}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>

          <View >
            <Text style={styles.formLabel}>Temp. Final Acima de 160°C:</Text>
            <TextInput
              style={styles.formInputRow9}
              placeholder="Temp. Final Acima de 160°"
              defaultValue={acima}
              onChangeText={handleAcimaChange}
            ></TextInput>
          </View>
          <View >
            <Text style={styles.formLabel}>Defeito:</Text>
            <TextInput
              style={styles.formInputRow9_2}
              placeholder="Defeito"  
              defaultValue={defeito}
              onChangeText={handleDefeitoChange}
            ></TextInput>
          </View>
          <View >
            <Text style={styles.formLabel}>Q.T.D KG:</Text>
            <TextInput
              style={styles.formInputRow9_2}
              placeholder="Q.T.D KG"
              defaultValue={qtd}
              onChangeText={handleQtdChange}
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
          onPress={handleLocalChange}
          >
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

/**
 * 
        <View >
          <Text style={styles.formLabelCenter}>Temperatura da Placa</Text>
        </View>
 */

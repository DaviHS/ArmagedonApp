import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import styles from "./styleLFF1";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "./titleLFF1";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Scanner from "../Scanner/Reader";
import Checkbox from "expo-checkbox";

export default function InitLFF1({ route, navigation, props }) {

  const [isCheckDiam, setCheckDiam] = useState(false);
  const [isCheckComp, setCheckComp] = useState(false);
  const [isCheckLarg, setCheckLarg] = useState(false);
  const [isCheckEspe, setCheckEspe] = useState(false);

  const [isIniMet, setIniMet] = useState(false);
  const [isMetFim, setMetFim] = useState(false);
  const [isIniFim, setIniFim] = useState(false);

  const [isAprov, setAprov] = useState(false);
  const [isFundi, setFundi] = useState(false);

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
      Alert.alert(
        "Informação inválida",
        "Preencha a OS para realizar a consulta."
      );
    } else {
      Alert.alert("Em andamento", "Acesso ao BD pendente");
    }
  }

  function handleLocalChange() {
    navigation.navigate("Tela Inicial");
  }

  function handleSavePress() {
    Alert.alert("Em andamento!", "Configuração api em andamento");
  }
  const [cliente, setCliente] = useState("");
  function handleClienteChange(cliente) {
    setCliente(cliente);
  }
  const [os, setOs] = useState("");
  function handleOsChange(os) {
    setOs(os);
  }
  const [lote, setLote] = useState("");
  function handleLoteChange(lote) {
    setLote(lote);
  }
  const [placa, setPlaca] = useState("");
  function handlePlacaChange(placa) {
    setPlaca(placa);
  }
  const [pf, setPf] = useState("");
  function handlePfChange(pf) {
    setPf(pf);
  }
  const [medida, setMedida] = useState("");
  function handleMedidaChange(medida) {
    setMedida(medida);
  }
  const [material, setMaterial] = useState("");
  function handleMaterialChange(material) {
    setMaterial(material);
  }
  const [especi1, setEspeci1] = useState("");
  function handleEspeci1Change(especi1) {
    setEspeci1(especi1);
  }
  const [especi2, setEspeci2] = useState("");
  function handleEspeci2Change(especi2) {
    setEspeci2(especi2);
  }
  const [especi3, setEspeci3] = useState("");
  function handleEspeci3Change(especi3) {
    setEspeci3(especi3);
  }
  const [mInicio, setMInicio] = useState("");
  function handleMInicioChange(mInicio) {
    mInicio(mInicio);
  }
  const [mMeio, setMMeio] = useState("");
  function handleMMeioChange(mMeio) {
    setMMeio(mMeio);
  }
  const [mFim, setMFim] = useState("");
  function handleMFimChange(mFim) {
    setMFim(mFim);
  }
  const [m2Inicio, setM2Inicio] = useState("");
  function handleM2InicioChange(m2Inicio) {
    setM2Inicio(m2Inicio);
  }
  const [m2Meio, setM2Meio] = useState("");
  function handleM2MeioChange(m2Meio) {
    setM2Meio(m2Meio);
  }
  const [m2Fim, setM2Fim] = useState("");
  function handleHrFimChange(m2Fim) {
    setM2Fim(m2Fim);
  }
  const [totalBat, setTotalBat] = useState("");
  function handleTotalBatChange(totalBat) {
    setTotalBat(totalBat);
  }
  const [defeito, setDefeito] = useState("");
  function handleDefeitoChange(defeito) {
    setDefeito(defeito);
  }
  const [qtdKg, setQtdKg] = useState("");
  function handleQtdKgChange(qtdKg) {
    setQtdKg(qtdKg);
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
                <View style={styles.buttonContainer}>
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
          <View>
            <Text style={styles.formLabel}>Cliente: </Text>
            <TextInput
              style={styles.formInputRow1}
              editable={false}
              placeholder="Cliente(s)"
              defaultvalue={cliente}
              onChangeText={handleClienteChange}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>N° OS: </Text>
            <View style={styles.formButtom}>
              <TextInput
                style={styles.formInputRow2}
                //  editable={false}
                placeholder="N° OS"
                onChangeText={handleOsChange}
                defaultValue={os}
              ></TextInput>
              <TouchableOpacity
                style={styles.searchButtom}
                onPress={handleSearch}
              >
                <Icon
                  name="database-search-outline"
                  color="#e9e9e9"
                  size={15}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scanButtom}
                onPress={() => setModalVisible(true)}
              >
                <Icon name="barcode-scan" color="#e9e9e9" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>N° Placa: </Text>
            <TextInput
              style={styles.formInputRow1}
              placeholder="N° Placa"
              defaultValue={placa}
              onChangeText={handlePlacaChange}
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>Lote: </Text>

            <TextInput
              style={styles.formInputPF}
              placeholder="Lote"
              defaultValue={lote}
              onChangeText={handleLoteChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>N° PF: </Text>

            <TextInput
              style={styles.formInputPF}
              placeholder="N° PF"
              defaultValue={pf}
              onChangeText={handlePfChange}
            ></TextInput>
          </View>

          <View>
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
              <Pressable onPress={toggleDataPicker} style={styles.pressable}>
                <TextInput
                  value={dateOf}
                  onChangeText={setDateOf}
                  style={styles.formInputHora}
                  placeholder="Hora Início"
                  editable={false}
                />
              </Pressable>
            )}
          </View>
          <View>
            <Text style={styles.formLabel}>Hora Fim: </Text>

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
                    style={styles.formInputHora}
                    placeholder="Hora Fim"
                    onChangeText={setTimeOf}
                  ></TextInput>
                </Pressable>
              )}
            </View>
          </View>
        </View>

        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>Medida do Produto: </Text>
            <TextInput
              style={styles.formInputRow4}
              placeholder="Medida do Produto"
              defaultValue={medida}
              onChangeText={handleMedidaChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Material: </Text>

            <TextInput
              style={styles.formInputMaterial}
              placeholder="Material"
              defaultValue={material}
              onChangeText={handleMaterialChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.especifi}>
          <Text style={styles.formLabelTitle}>Especificado: </Text>
          <Checkbox style={styles.Checkbox} 
          color={isCheckDiam ? '#596f42' : undefined}
          value={isCheckDiam} onValueChange={setCheckDiam} />
          <Text style={styles.formLabelCheckBox}>Diam.</Text>

          <Checkbox style={styles.Checkbox} 
          color={isCheckComp ? '#596f42' : undefined}
          value={isCheckComp} onValueChange={setCheckComp} />
          <Text style={styles.formLabelCheckBox}>Compr.</Text>

          <Checkbox style={styles.Checkbox} 
          color={isCheckLarg ? '#596f42' : undefined}
          value={isCheckLarg} onValueChange={setCheckLarg} />
          <Text style={styles.formLabelCheckBox}>Larg.</Text>

          <Checkbox style={styles.Checkbox} 
          color={isCheckEspe ? '#596f42' : undefined}
          value={isCheckEspe} onValueChange={setCheckEspe} />
          <Text style={styles.formLabelCheckBox}>Espe.</Text>

        </View>
        <View style={styles.formRow}>
          <View>
          <TextInput
              style={styles.formMonitoramento}
              placeholder="Especificado"
              defaultValue={especi1}
              onChangeText={handleEspeci1Change}
            ></TextInput>
          </View>
          <View>
          <TextInput
              style={styles.formMonitoramento}
              placeholder="Especificado"
              defaultValue={especi2}
              onChangeText={handleEspeci2Change}
            ></TextInput>
          </View>
          <View>
          <TextInput
              style={styles.formMonitoramento}
              placeholder="Especificado"
              defaultValue={especi3}
             onChangeText={handleEspeci3Change}
            ></TextInput>
          </View>
          
        </View>
        <View>
          <Text style={styles.formLabelTitle}>Monitoramento</Text>
        </View>
        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>Início: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Início"
              defaultValue={mInicio}
              onChangeText={handleMInicioChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Meio: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Meio"
              defaultValue={mMeio}
              onChangeText={handleMMeioChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Fim: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Fim"
              defaultValue={mFim}
              onChangeText={handleMFimChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>Início: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Início"
              defaultValue={m2Inicio}
              onChangeText={handleM2InicioChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Meio: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Meio"
              defaultValue={m2Meio}
              onChangeText={handleM2MeioChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Fim: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Fim"
              defaultValue={m2Fim}
              onChangeText={handleMFimChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.especifi1}>
          <Checkbox style={styles.Checkbox1} 
          color={isIniMet ? '#596f42' : undefined}
          value={isIniMet} onValueChange={setIniMet} />
          <Text style={styles.formLabelCheckBox1}> Semi (Começo-Metade).</Text>

          <Checkbox style={styles.Checkbox1} 
          color={isMetFim ? '#596f42' : undefined}
          value={isMetFim} onValueChange={setMetFim} />
          <Text style={styles.formLabelCheckBox1}> Pronta (Metade-Fim)</Text>

          <Checkbox style={styles.Checkbox1} 
          color={isIniFim ? '#596f42' : undefined}
          value={isIniFim} onValueChange={setIniFim} />
          <Text style={styles.formLabelCheckBox1}> Pronta (Começo-Fim)</Text>

        </View>

        <View style={styles.formRow}>
          <View>
            <Text style={styles.formLabel}>Total de Batidas:</Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Total de Batidas"
              defaultValue={totalBat}
              onChangeText={handleTotalBatChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Defeito:</Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Defeito"
              defaultValue={defeito}
              onChangeText={handleDefeitoChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Q.T.D Kg: </Text>

            <TextInput
              style={styles.formMonitoramento}
              placeholder="Q.T.D Kg:"
              defaultValue={qtdKg}
              onChangeText={handleQtdKgChange}
            ></TextInput>
          </View>
        </View>
        <View style={styles.especifi}>

          <Checkbox style={styles.Checkbox} 
          color={isAprov ? '#596f42' : undefined}
          value={isAprov} onValueChange={setAprov} />
          <Text style={styles.formLabelCheckBox}>Aproveito</Text>

          <Checkbox style={styles.Checkbox} 
          color={isFundi ? '#596f42' : undefined}
          value={isFundi} onValueChange={setFundi} />
          <Text style={styles.formLabelCheckBox}>Fundição	</Text>

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
          <TouchableOpacity
            style={styles.formCancelButton}
            onPress={handleLocalChange}
          >
            <View style={styles.buttonContainer}>
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

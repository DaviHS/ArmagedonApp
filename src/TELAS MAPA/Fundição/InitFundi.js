import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Platform,
} from "react-native";
import styles from "./styleFundi";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "./titleFundi";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default function InitFundi() {

  const [lote, setLote] = useState("");
  function handleLoteChange(lote) {
    setLote(lote);
  }
  const [placa,setPlaca]= useState("");
  function handleLoteChange(placa) {
    setPlaca(placa);
  }
  const [os,setOs]= useState("");

  const [largOs, setLargOs]= useState("");

  const [largFund, setLargFund]= useState("");

  const [material, setMaterial]= useState("");

  const [bica, setBica]= useState("");

  const [coqui, setCoqui]= useState("");

  const [pf, setPf]= useState("");

  const [cliente, setCliente]= useState("");

  const [peso, setPeso]= useState("");

  const [medida, setMedida]= useState("");

  const [turno, setTurno]= useState("");

  const [tratador,setTratador]= useState("");

  const [coquilheiro, setCoquilheiro]= useState("");

  const [dateOf, setDateOf] = useState("");

  const [timeOf, setTimeOf] = useState("");

/**
 *   
  
 */



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
      if (Platform.OS === "android") {
        toggleDataPicker();
        setDateOf(formatDate(currentDate));
      }
    } else {
      toggleDataPicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let day = date.getDate();
    day < 10 && (day = `0${day}`);

    let month = date.getMonth() + 1;
    month < 10 && (month = `0${month}`);

    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
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
      if (Platform.OS === "android") {
        toggleTimePicker();
        setTimeOf(formatTime(currentDate));
      }
    } else {
      toggleTimePicker();
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
                    value={timeOf}
                    onChangeText={setTimeOf}
                    style={styles.formInputRow1}
                    placeholder="Fundição"
                    editable={false}
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
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° Placa: </Text>

            <TextInput
              style={styles.formInputRow2_3}
              editable={false}
              placeholder="N° Placa"
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° OS: </Text>
            <TextInput
              style={styles.formInputRow2_3}
              editable={false}
              placeholder="N° OS"
            ></TextInput>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Larg. Real OS: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Larg. Real OS"
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Larg. Fundida: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Larg. Fundida"
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Material: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Material"
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Temp. Bica: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Temperatura Bica"
            ></TextInput>
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Temp. Coqui.:</Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="Temp. Coquilha"
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>N° PF: </Text>
            <TextInput
              style={styles.formInputRow4_5}
              editable={false}
              placeholder="N° PF"
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
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Peso: </Text>
            <TextInput
              style={styles.formInputRow7Peso}
              editable={false}
              placeholder="Peso"
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Medida: </Text>
            <TextInput
              style={styles.formInputRow7}
              editable={false}
              placeholder="Medida"
            ></TextInput>
          </View>

          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Turno: </Text>
            <TextInput
              style={styles.formInputRow7Peso}
              editable={false}
              placeholder="Turno"
            ></TextInput>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Nome Tratador: </Text>
            <TextInput
              style={styles.formInputRow8}
              editable={false}
              placeholder="Nome Tratador"
            ></TextInput>
            </View>
            <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Nome Coquil.:</Text>
            <TextInput
              style={styles.formInputRow8}
              editable={false}
              placeholder="Nome Coquielheiro"
            ></TextInput>
            </View>
            <View style={styles.formColumn}>
            <Text style={styles.formLabel}>Cod Def. %: </Text>
            <TextInput
              style={styles.formInputRow8Def}
              editable={false}
              placeholder="Cod Def. %"
            ></TextInput>
            </View>
            </View>

            <View style={styles.formRow}>
            <TouchableOpacity
           style={styles.formSaveButton}>
            <View style={styles.buttonContainer}>
              <Icon name="content-save" size={18} color="white" />
              <Text style={styles.formLabelButton}>Salvar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.formCancelButton}>
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

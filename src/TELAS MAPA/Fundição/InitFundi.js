import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Pressable, Platform } from "react-native";
import styles from "./styleFundi";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "./titleFundi";


export default function InitFundi() {
  const [dateOf, setDateOf] = useState("");

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const toggleDataPicker = () => {
    setShowDate(!showDate);
  };

  const onChangeD = ({type}, selectedDate) => {
    if (type == "set"){
    const currentDate = selectedDate;
    setDate(currentDate);
    if (Platform.OS === 'android'){
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
    (day < 10) && (day = `0${day}`);

    let month = date.getMonth() + 1;
    (month < 10) && (month = `0${month}`);

    let year = date.getFullYear();

    return `${day}/${month}/${year}`

  }

  /////
  const [timeOf, setTimeOf] = useState("");

  const [time, setTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const toggleTimePicker = () => {
    setShowTime(!showTime);
  };

  const onChangeT = ({type}, selectedTime) => {
    if (type == "set"){
    const currentTime = selectedTime;
    setTime(currentTime);
    if (Platform.OS === 'android'){
      toggleTimePicker();
      setDateOf(formatTime(currentTime));
    }
    } else {
      toggleTimePicker();
    }
  };

  const formatTime = (rawTime) => {
    let time = new Date(rawTime);

    let hour = time.getHours();
    (hour < 10) && (hour = `0${hour}`);

    let minute = time.getMinutes();
    (minute < 10) && (minute = `0${minute}`);



    return `${hour}:${minute}`

  }

  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.formComponentes}>
       
        <View style={styles.form}>

        <Text style={styles.formLabel}>Dia:</Text>

        {showDate && (        
        <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={onChangeD}
        />)}
        
        {!showDate && (  
        <Pressable 
        onPress={toggleDataPicker}
        style={styles.pressable}
        >
         <TextInput
            value={dateOf}
            onChangeText={setDateOf}
            style={styles.formInput}
            placeholder="Selecione o dia  "
            editable={false}
          />
        </Pressable>  
        )}
        
        <Text style={styles.formLabel}>Hora:</Text>
        {showTime && (        
        <DateTimePicker
        mode="time"
        display="spinner"
        value={time}
        onChange={onChangeT}
        />)}
        
        {!showTime && (  
        <Pressable 
        onPress={toggleTimePicker}
        style={styles.pressable}
        >
         <TextInput
            value={timeOf}
            onChangeText={setTimeOf}
            style={styles.formInput}
            placeholder="Selecione o dia  "
            editable={false}
          />
        </Pressable>  
        )}
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

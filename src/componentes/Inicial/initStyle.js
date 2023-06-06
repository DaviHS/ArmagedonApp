import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

      //Espaço contendo o titulo
      boxTitle:{
        alignItems:"center",
        justifyContent:"center",
        padding:'5%',
            },
            //Texto do titulo
            textTitle:{
                color:"#672337",
                fontSize:28,
                fontWeight:"bold",
            },
    //Tela contendo os componentes
    formComponentes: {
      width: "100%",
      height: "100%",
      backgroundColor: "#0a3b67",
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 25,
    },
    formLabel: {
      color: "#000000",
      fontSize: 20,
      paddingLeft: 20,
      paddingTop: 20
    },

    buttonContainer1: {
      flexDirection: "row",
    },
    formLabelHideButton: {
      fontSize: 15,
      color: "#FFFFFF",
      marginLeft: 10,
      fontWeight: "bold",
      alignSelf: "center",
    },
    modalView: {
      flex: 1,
      alignContent: "center",
      margin: 10,
      marginTop: 125,
     // marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: "#eeedec",
      marginBottom: 500,
      
    },
  //Botão Salvar
  formRastrearButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#7e0c48",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
  },
  formMapaButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#487e0c",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
  },
    //Texto dos botoes aparentes
    formLabelButton: {
      fontSize: 20,
      color: "#FFFFFF",
      marginLeft: 10,
      alignSelf: "center",
    },

      //Design Picker
  pickerContainer: {
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    height: 45,
    margin: 12,
    paddingLeft: 10,
  },
  //Espaco contendo Picker
  formPicker: {
    width: "100%",
    margin: -5,
  },
    viewButtom: {
    flexDirection: "row",
    justifyContent: "center"
  },
  formModalCloseButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#7e0c48",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginBottom: 20,
    marginHorizontal:5
    
  },
  formModalConfirmarButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#0c487e",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginBottom: 20,
    marginHorizontal:5
    
  },
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    alignItems: "center",
  },
});

export default styles;
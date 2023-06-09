import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({

      //Espaço contendo o titulo
      boxTitle:{
        alignItems:"center",
        justifyContent:"center",
        padding:RFValue(10),
            },
            //Texto do titulo
            textTitle:{
                color:"#672337",
                fontSize: RFPercentage(3.8),
                fontWeight:"bold",
            },
    //Tela contendo os componentes
    formComponentes: {
      width: RFPercentage(54),
      height: RFPercentage(108),
      backgroundColor: "#0a3b67",
      alignItems: "center",
      borderTopLeftRadius: RFPercentage(2.5),
      borderTopRightRadius: RFPercentage(2.5),
      marginTop: RFValue (20),
    },
    formLabel: {
      color: "#000000",
      fontSize: RFPercentage(2.5),
      paddingLeft: RFPercentage(2.5),
      paddingTop: RFPercentage(2.5)
    },

    buttonContainer1: {
      flexDirection: "row",
    },
    formLabelHideButton: {
      fontSize: RFPercentage(2),
      color: "#FFFFFF",
      marginLeft: RFPercentage(1),
      fontWeight: "bold",
      alignSelf: "center",
    },
    modalView: {
      flex: 1,
      alignContent: "center",
      margin: RFPercentage(1),
      marginTop: RFValue(100),
     // marginHorizontal: 20,
      borderRadius: RFPercentage(2.5),
      backgroundColor: "#eeedec",
      marginBottom: RFValue(460),
      
    },
  //Botão Salvar
  formRastrearButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width:  RFPercentage(50),
    backgroundColor: "#7e0c48",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginTop: RFValue(10),
  },
  formMapaButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width:  RFPercentage(50),
    backgroundColor: "#487e0c",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginTop: RFValue(10),
  },
    //Texto dos botoes aparentes
    formLabelButton: {
      fontSize: RFPercentage(2.5),
      color: "#FFFFFF",
      marginLeft: RFPercentage(1),
      alignSelf: "center",
    },

      //Design Picker
  pickerContainer: {
    width:  RFPercentage(48.75),
    borderRadius:  RFPercentage(1.2),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(6),
    margin: RFPercentage(1.2),
   justifyContent:'center'
  },
  //Espaco contendo Picker
  formPicker: {
    width: RFPercentage(48.75),
    
  },
    viewButtom: {
    flexDirection: "row",
    justifyContent: "center"
  },
  formModalCloseButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(24),
    backgroundColor: "#7e0c48",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginBottom:RFPercentage (2),
    
  },
  formModalConfirmarButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(24),
    backgroundColor: "#0c487e",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginBottom:RFPercentage (2),
    marginRight: RFValue(5)
    
  },
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    alignItems: "center",
  },
});

export default styles;
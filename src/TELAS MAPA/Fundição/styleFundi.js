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
                color:"#263b47",
                fontSize:28,
                fontWeight:"bold",
            },
    //Tela contendo os componentes
    formComponentes: {
      width: "95%",
      height: "90%",
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 10,
      
    },

    container: {
      flex: 1,
      backgroundColor: "#e0e5e5",
      alignItems: "center",
      justifyContent: "flex-start"
      
    },
      //Design dentro do formulario
  formRow: {
    width: "100%",
    height: "auto",
    padding: 8,
    flexDirection: "row",
    alignItems:"center",
     },
     formButtom: {
      flexDirection: "row",
         },
     formColumn: {
      paddingLeft: 5
       },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom:5
  },
        //Espaco inserir texto
        formInputRow1: {
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#f6f6f6",
          height: 35,
          paddingLeft: 10,
          alignSelf: "center",
          color:"#082D4F",
          justifyContent:'center',
          marginLeft: 5,
          
        },
                //Espaco inserir texto
                formInputLote: {
                  width: 93,
                  borderRadius: 10,
                  backgroundColor: "#f6f6f6",
                  height: 35,
                  paddingLeft: 10,
                  alignSelf: "center",
                  color:"#082D4F",
                  justifyContent:'center',
                  marginLeft: 5,
                  
                },
        pressable:{
          width: 102,
        },
    //Texto dos botoes aparentes
    formLabelButton: {
      fontSize: 15,
      color: "#FFFFFF",
      marginLeft: 10,
      alignSelf: "center",
      
    },
    buttonsContainer: {
      justifyContent:"center",
      flexDirection: "row",
      alignItems: 'center',
      borderBottomColor: "#CCC",
    },

    timeButton: {
      marginLeft: 10,
      height: 35,
      backgroundColor: "#6f6f42",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: "#ccc",
      alignItems: "center",
    },
    formInputRow2_3: {
      width: 355,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },

    formInputRow4_5: {
      width: 112,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },

    formInputRow7: {
      width: 255,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },

    formInputRow7Peso: {
      width: 92,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },
    formInputRow8: {
      width: 120,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },
    formInputRow8Def: {
      width: 93,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },

  formSaveButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 172,
    backgroundColor: "#426f6f",
    alignSelf: "center",
    marginLeft: 10,
    height: 40
  },
  formCancelButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 172,
    backgroundColor: "#6f4259",
    alignSelf: "center",
    marginLeft: 10,
    height: 40
  },
  buttonContainer: {
    flexDirection: "row",
  },
    

});

export default styles;
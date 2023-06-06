import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

      //Espaço contendo o titulo
      boxTitle:{
        alignItems:"center",
        justifyContent:"center",
        padding:5,
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
      height: "100%",
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

  //Espaço contendo Scanner e botoes 
  modalView: {
    flex: 1,
    alignContent: "center",
    margin: 15,
    marginTop: 130,
    borderRadius: 20,
    backgroundColor: "#06243f",
    marginVertical: 100,
    marginBottom: 80,

  },
  viewButtom: {
 
    marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5
  },
    //Botao Scanner salvar
    formModalCapButton: {
      borderRadius: 10,
      marginRight: 5,
      alignItems: "center",
      justifyContent: "center",
      width: "48%",
      backgroundColor: "#426F42",
      paddingTop: 14,
      paddingBottom: 14,
      alignSelf: "center",
    },
      //Texto botoes Scanner
  formLabelHideButton: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },
    //Botao fechar Scanner
  formModalCloButton: {
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    backgroundColor: "#6f426f",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginBottom: 20,
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
        fontSize: 16,
        paddingLeft: 10,
        paddingBottom: 5,
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
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "#f6f6f6",
                  height: 35,
                  paddingLeft: 10,
                  alignSelf: "center",
                  color:"#082D4F",
                  justifyContent:'center',
                 
                  
                },
        pressable:{
          width: 107,
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
    formInputRow2: {
      width: 365,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },
    formInputRow3: {
      width: 285,
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 35,
      paddingLeft: 10,
      alignSelf: "center",
      color:"#082D4F",
      justifyContent:'center',
      marginLeft: 5,
      
    },

    searchButtom: {
      marginLeft: 5,
      height: 35,
      width: 35,
      backgroundColor: "#426f6f",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: "#ccc",
      alignItems: "center",
    },

    scanButtom: {
      marginLeft: 5,
      height: 35,
      width: 35,
      backgroundColor: "#6f426f",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: "#ccc",
      alignItems: "center",
    },

    formInputRow4_5: {
      width: 115,
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
      width: 260,
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
      width: 95,
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
      width: 128,
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
      width: 90,
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
    width: 177,
    backgroundColor: "#42596f",
    alignSelf: "center",
    marginLeft: 10,
    height: 40
  },
  formCancelButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 177,
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
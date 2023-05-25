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
    },
      //Design dentro do formulario
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
    flexDirection: "row",
    alignItems:"center"
    
  },

  formLabel: {
    color: "#000000",
    fontSize: 20,
    paddingLeft: 20,
  },
        //Espaco inserir texto
        formInput: {
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#f6f6f6",
          height: 45,
          paddingLeft: 10,
          alignSelf: "center",
          color:"#082D4F",
          justifyContent:'center'
          
        },
        pressable:{
          width: 100,
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
});

export default styles;
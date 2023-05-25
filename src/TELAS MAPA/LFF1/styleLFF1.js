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
  },

  //Botão FUNDICAO
  formFundicaorButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#1c5668",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
  },
  formLQButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#6c3643",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
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
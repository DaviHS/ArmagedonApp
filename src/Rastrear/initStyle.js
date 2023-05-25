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
                color:"#2F4F2F",
                fontSize:28,
                fontWeight:"bold",
            },
  //Fundo da tela 
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    alignItems: "center",
  },
  //Tela contendo os componentes
  formComponentes: {
    width: "95%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 25,
  },
  //Design dentro do formulario
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  //Texto dentro do formulario
  formLabel: {
    color: "#000000",
    fontSize: 20,
    paddingLeft: 20,
  },
  //Espaco inserir texto
  formInput: {
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    height: 45,
    margin: 12,
    paddingLeft: 10,
    alignSelf: "center",
  },
  //Botão Salvar
  formSaveButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#6f426f",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
  },
  //Botão Atualizar
  formUpdateButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#426f6f",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginTop: 12,
  },
  //Botão ativar Scanner 
  formScannerButton: {
    borderRadius: 20,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#426f42",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
  },
  //Botão direciona a tela de listagem
  formListButton: {
    position: "relative",
    bottom: -185,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#42426f",
    alignSelf: "flex-end",
    marginRight: 10,
    flexWrap: "nowrap",
  },
  //Texto dos botoes aparentes
  formLabelButton: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: 10,
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
  //Espaço contendo Scanner e botoes 
  modalView: {
    flex: 1,
    alignContent: "center",
    margin: 15,
    marginTop: 140,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginVertical: 100,
    marginBottom: 100,

  },
  //Botao Scanner salvar
  formModalCapButton: {
    borderRadius: 20,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    backgroundColor: "#426F42",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
  },
  //Botao fechar Scanner
  formModalCloButton: {
    borderRadius: 20,
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
  //Botão direciona a tela de listagem
  formListButtonModal: {
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#42426f",
    alignSelf: "flex-end",
    marginLeft: 300,
    marginBottom: -10

  },
  //Espaco visualizar botoes
  viewButtom: {
    marginBottom:-60,
    marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5
  },
  //Espaco visualizar botoes com ICON
  buttonContainer: {
    flexDirection: "row",
  },
  //Texto botoes Sacanner
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
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


});

export default styles;
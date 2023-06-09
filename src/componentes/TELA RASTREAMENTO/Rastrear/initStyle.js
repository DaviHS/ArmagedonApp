import { StyleSheet } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
      //Espaço contendo o titulo
      boxTitle:{
        alignItems:"center",
        justifyContent:"center",
        padding:RFValue(10),
            },
            //Texto do titulo
            textTitle:{
                color:"#2F4F2F",
                fontSize: RFPercentage(3.8),
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
    width: RFPercentage(53),
    height: RFPercentage(102),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: RFPercentage(2.5),
    borderTopRightRadius: RFPercentage(2.5),
    marginTop: RFPercentage(2),
  },
  //Design dentro do formulario
  form: {
    width: RFPercentage(54),
    height: "auto",
    marginTop: RFPercentage(1),
    padding: RFPercentage(1),
  },
  //Texto dentro do formulario
  formLabel: {
    color: "#000000",
    fontSize: RFPercentage(2.5),
    paddingLeft: RFPercentage(2.5),
  },
  //Espaco inserir texto
  formInput: {
    width: RFPercentage(50),
    borderRadius: RFPercentage(1.3),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(6),
    margin: RFPercentage(1),
    paddingLeft: RFPercentage(1.3),
    alignSelf: "center",
  },
  //Botão Salvar
  formSaveButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(50),
    backgroundColor: "#6f426f",
    paddingTop: RFPercentage(1.5),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginTop: RFPercentage(0.75),
  },
  //Botão Atualizar
  formUpdateButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(50),
    backgroundColor: "#426f6f",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
    marginTop: RFPercentage(0.75),
  },
  //Botão ativar Scanner 
  formScannerButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(50),
    backgroundColor: "#426f42",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
  },
  //Botão direciona a tela de listagem
  formListButton: {
    position: "relative",
    bottom: RFPercentage(-34.2),
    borderRadius: RFPercentage(3),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(7.5),
    height: RFPercentage(8),
    backgroundColor: "#42426f",
    alignSelf: "flex-end",
    marginRight: RFPercentage(1),
    flexWrap: "nowrap",
  },
  //Texto dos botoes aparentes
  formLabelButton: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    marginLeft: RFPercentage(1.3),
    alignSelf: "center",
  },
  
  //Design Picker
  pickerContainer: {
    width: RFPercentage(50),
    borderRadius:  RFPercentage(1.2),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(6),
    margin: RFPercentage(1),
    justifyContent:'center',
  },
  //Espaco contendo Picker
  formPicker: {
    width: RFPercentage(50),
  },
  
  //Texto botoes Scanner
  formLabelHideButton: {
    fontSize: RFPercentage(2),
    color: "#FFFFFF",
    marginLeft: RFPercentage(1.3),
    fontWeight: "bold",
    alignSelf: "center",
  },
  //Espaço contendo Scanner e botoes 
  modalView: {
    flex: 1,
    alignContent: "center",
    margin: RFPercentage(1),
    marginTop: RFPercentage(15),
    borderRadius: RFPercentage(2),
    backgroundColor: "#FFFFFF",
    marginVertical: RFPercentage(12),

  },
  //Botao Scanner salvar
  formModalCapButton: {
    borderRadius: RFPercentage(2.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(24),
    backgroundColor: "#426F42",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
  },
  //Botao fechar Scanner
  formModalCloButton: {
    borderRadius: RFPercentage(2.5),
    marginLeft: RFPercentage(0.8),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(24.5),
    backgroundColor: "#6f426f",
    paddingTop: RFPercentage(1.8),
    paddingBottom:  RFPercentage(1.8),
    alignSelf: "center",
  },
  //Botão direciona a tela de listagem
  formListButtonModal: {
    borderRadius: RFPercentage(3),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(7.5),
    height:RFPercentage(8),
    backgroundColor: "#42426f",
    alignSelf: "flex-end",
    marginLeft: RFPercentage(42.2),
    marginBottom: RFPercentage(-8.5)

  },
  //Espaco visualizar botoes
  viewButtom: {
    marginBottom: RFPercentage(0.4),
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: RFPercentage(0.6)
  },
  //Espaco visualizar botoes com ICON
  buttonContainer: {
    flexDirection: "row",
  },



});

export default styles;
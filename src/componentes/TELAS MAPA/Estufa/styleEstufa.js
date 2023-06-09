import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  //Espaço contendo o titulo
  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: RFPercentage(1),
  },
  //Texto do titulo
  textTitle: {
    color: "#263b47",
    fontSize: RFPercentage(3.6),
    fontWeight: "bold",
  },
  //Tela contendo os componentes
  formComponentes: {
    width: RFPercentage(53),
    height: RFPercentage(102),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: RFPercentage(2.5),
    borderTopRightRadius: RFPercentage(2.5),
    marginTop: RFPercentage(1),
  },

  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  formLabelButton: {
    fontSize: RFPercentage(2.2),
    color: "#FFFFFF",
    marginLeft: RFPercentage(0.5),
    alignSelf: "center",
  },
  //Texto botoes Scanner
  formLabelHideButton: {
    fontSize: RFPercentage(2),
    color: "#FFFFFF",
    marginLeft: RFPercentage(0.5),
    fontWeight: "bold",
    alignSelf: "center",
  },
  modalView: {
    flex: 1,
    alignContent: "center",
    margin: RFPercentage(2),
    marginTop: RFPercentage(12),
    borderRadius: RFPercentage(2.5),
    backgroundColor: "#06243f",
    marginBottom: RFPercentage(18),
  },
  viewButtom: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: RFPercentage(0.5),
    marginBottom: RFPercentage(1),
  },
  //Botao Scanner salvar
  formModalCapButton: {
    borderRadius: RFPercentage(1),
    marginLeft: RFPercentage(0.5),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(23),
    backgroundColor: "#426F42",
    paddingTop: RFPercentage(1.8),
    paddingBottom: RFPercentage(1.8),
    alignSelf: "center",
  },
  formModalCloButton: {
    borderRadius: RFPercentage(1),
    marginLeft: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(23),
    backgroundColor: "#6f426f",
    paddingTop: RFPercentage(1.8),
    paddingBottom: RFPercentage(1.8),
    alignSelf: "center",
  },
  //Design dentro do formulario
  formRow: {
    width: RFPercentage(53),
    height: "auto",
    padding: RFPercentage(0.9),
    flexDirection: "row",
    alignItems: "center",
  },

  formButtom: {
    flexDirection: "row",
  },

  formLabel: {
    color: "#000000",
    fontSize: RFPercentage(2),
    paddingLeft: RFPercentage(1.4),
    paddingBottom: RFPercentage(0.8),
  },
  formInputRow1: {
    width: RFPercentage(50.5),
    borderRadius: RFPercentage(1.5),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(4.5),
    paddingLeft: RFPercentage(1),
    alignSelf: "center",
    color: "#082D4F",
    justifyContent: "center",
    marginLeft: RFPercentage(0.5),
  },
  
  formInputRow2: {
    width: RFPercentage(16.5),
    borderRadius: RFPercentage(1.5),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(4.5),
    paddingLeft: RFPercentage(1.5),
    alignSelf: "center",
    color: "#082D4F",
    justifyContent: "center",
    marginLeft: RFPercentage(0.5),
  },
  //Espaco inserir texto
  formInputRow4: {
    width: RFPercentage(16.2),
    borderRadius: RFPercentage(1.5),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(4.5),
    paddingLeft: RFPercentage(1),
    alignSelf: "center",
    color: "#082D4F",
    justifyContent: "center",
    marginLeft: RFPercentage(0.5),
  },
  pressable: {
    width: RFPercentage(17),
  },
  //Texto dos botoes aparentes
  formLabelButton: {
    fontSize: RFPercentage(2.2),
    color: "#FFFFFF",
    marginLeft: RFPercentage(0.5),
    alignSelf: "center",
  },
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#CCC",
  },

  timeButton: {
    marginLeft: RFPercentage(1),
    height: RFPercentage(4.5),
    backgroundColor: "#6f6f42",
    borderRadius: RFPercentage(1.5),
    padding: RFPercentage(1.3),
    elevation: RFPercentage(1),
    shadowOpacity: RFPercentage(1),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  liquiButton: {
    width: RFPercentage(16.5),
    marginLeft: RFPercentage(0.5),
    height: RFPercentage(4.5),
    backgroundColor: "#f6f6f6",
    borderRadius: RFPercentage(1.5),
    padding: RFPercentage(1),
    alignItems: "flex-start",
  },

  formInputRow3: {
    width: RFPercentage(20),
    borderRadius: RFPercentage(1.5),
    backgroundColor: "#f6f6f6",
    height: RFPercentage(4.5),
    paddingLeft: RFPercentage(1),
    alignSelf: "center",
    color: "#082D4F",
    justifyContent: "center",
    marginLeft: RFPercentage(0.5),
  },

  searchButtom: {
    marginLeft: RFPercentage(0.5),
    height: RFPercentage(4.5),
    backgroundColor: "#426f6f",
    borderRadius: RFPercentage(1.5),
    padding: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  scanButtom: {
    marginLeft: RFPercentage(0.5),
    height: RFPercentage(4.5),
    backgroundColor: "#6f426f",
    borderRadius: RFPercentage(1.5),
    padding: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },
  formSaveButton: {
    width: RFPercentage(24.5),
    height: RFPercentage(5),
    borderRadius: RFPercentage(1.5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42596f",
    alignSelf: "center",
    marginLeft: RFPercentage(0.5),
  },
  formCancelButton: {
    width: RFPercentage(24.5),
    height: RFPercentage(5),
    borderRadius: RFPercentage(1.5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6f4259",
    alignSelf: "center",
    marginLeft: RFPercentage(1),
  },
  buttonContainer: {
    flexDirection: "row",
  },

  formLabelTitle: {
    color: "#000000",
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
});

export default styles;

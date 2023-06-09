import { StyleSheet } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: RFPercentage(2),
    width: RFPercentage(50),
  },

  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: RFPercentage(1.4),
    paddingTop: RFPercentage(1.4),
    marginTop: RFPercentage(-0.5),
  },

  editButton: {
    marginLeft: RFPercentage(1),
    height: RFPercentage(5),
    backgroundColor: "#0b2984",
    borderRadius: RFPercentage(1.3),
    padding: RFPercentage(1.3),
    fontSize: RFPercentage(1.8),
    elevation: RFPercentage(1.8),
    shadowOpacity: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  uploadButton: {
    marginLeft: RFPercentage(1),
    height: RFPercentage(5),
    backgroundColor: "#84660b",
    borderRadius: RFPercentage(1.3),
    padding: RFPercentage(1.3),
    fontSize: RFPercentage(1.8),
    elevation: RFPercentage(1.8),
    shadowOpacity: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  deleteButton: {
    marginLeft: RFPercentage(1),
    height: RFPercentage(5),
    backgroundColor: "#840b29",
    borderRadius: RFPercentage(1.3),
    padding: RFPercentage(1.3),
    fontSize: RFPercentage(1.8),
    elevation: RFPercentage(1.8),
    shadowOpacity: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  barcodeButton: {
    marginLeft: RFPercentage(1),
    height: RFPercentage(5),
    backgroundColor: "#0b8466",
    borderRadius: RFPercentage(1.3),
    padding: RFPercentage(1.3),
    fontSize: RFPercentage(1.8),
    elevation: RFPercentage(1.8),
    shadowOpacity: RFPercentage(1.3),
    shadowColor: "#ccc",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  textItem: {
    fontSize: RFPercentage(2.3),
  },

  modalView: {
    flex: 1,
    alignContent: "center",
    margin: RFPercentage(1.2),
    marginTop: RFPercentage(24.5),
    marginHorizontal: RFPercentage(3),
    borderRadius: RFPercentage(2),
    backgroundColor: "#eeedec",
    marginBottom: RFPercentage(55),
  },

  formModalCanButton: {
    borderRadius: RFPercentage(2),
    alignItems: "center",
    justifyContent: "center",
    width: RFPercentage(24),
    backgroundColor: "#6f426f",
    paddingTop: RFPercentage(1.8),
    paddingBottom: RFPercentage(1.8),
    alignSelf: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  formLabelHideButton: {
    fontSize: RFPercentage(2),
    color: "#FFFFFF",
    marginLeft: RFPercentage(1),
    fontWeight: "bold",
    alignSelf: "center",
  },

modalBarcode:{
  marginBottom: RFPercentage(1),
  marginTop:RFPercentage(1),
  backgroundColor:"#eeedec"
}

});

export default styles;

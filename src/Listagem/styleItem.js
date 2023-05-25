import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
  },

  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: -5,
  },

  editButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: "#0b2984",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },

  uploadButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: "#84660b",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },

  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "#840b29",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },

  barcodeButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "#0b8466",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  textItem: {
    fontSize: 18,
  },

  modalView: {
    flex: 1,
    alignContent: "center",
    margin: 10,
    marginTop: 150,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#eeedec",
    marginBottom: 450,
    
  },

  formModalCanButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#6f426f",
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
    marginBottom: 20,
    
  },

  buttonContainer: {
    flexDirection: "row",
  },

  formLabelHideButton: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },

modalBarcode:{
  marginBottom: 20,
  marginTop:10,
  backgroundColor:"#eeedec"
}

});

export default styles;

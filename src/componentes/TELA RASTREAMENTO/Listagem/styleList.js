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
    container: {
      flex: 1,
      backgroundColor: "#e0e5e5",
      alignItems: "center",
    },

    scrollContainer: {
      flex: 1,
      width: RFPercentage(53),
    },

    itemsContainer: {
      flex: 1,
      marginTop: RFPercentage(3),
      padding: RFPercentage(2),
      borderTopLeftRadius: RFPercentage(2.5),
      borderTopRightRadius: RFPercentage(2.5),
      alignItems: "stretch",
      backgroundColor: "#fff",
    },
  
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    searchButton: {
      height: RFPercentage(5.75),
      backgroundColor: "#0b6684",
      borderRadius: RFPercentage(1.5),
      padding: RFPercentage(1.3),
      fontSize: RFPercentage(1.8),
      elevation: RFPercentage(1.2),
      shadowColor: "#ccc",
      marginTop: RFPercentage(1.2),
      alignItems:'center',
      
    },

    deleteAllButton: {
      height: RFPercentage(5.75),
      backgroundColor: "#84290b",
      borderRadius: RFPercentage(1.5),
      padding: RFPercentage(1.3),
      fontSize: RFPercentage(1.8),
      elevation: RFPercentage(1.2),
      shadowColor: "#ccc",
      marginTop: RFPercentage(1.2),
      alignItems:'center',
      marginLeft:RFPercentage(1)
    },

    card: {
      width: RFPercentage(36.5),
      borderRadius: RFPercentage(1.2),
      backgroundColor: "#f6f6f6",
      height: RFPercentage(6.3),
      marginRight: RFPercentage(1),
      marginTop:RFPercentage(1.2),
      
    },
  
    formPicker: {
      width: RFPercentage(36.5),
    },

    
  });
  
  export default styles
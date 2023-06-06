import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
          
    container: {
      flex: 1,
      backgroundColor: "#e0e5e5",
      alignItems: "center",
    },

    scrollContainer: {
      flex: 1,
      width: "95%",
    },

    itemsContainer: {
      flex: 1,
      marginTop: 25,
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: "stretch",
      backgroundColor: "#fff",
    },
  
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    searchButton: {
      height: 44,
      backgroundColor: "#0b6684",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: "#ccc",
      marginTop:10,
      alignItems:'center',
      
    },

    deleteAllButton: {
      height: 44,
      backgroundColor: "#84290b",
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: "#ccc",
      marginTop:10,
      alignItems:'center',
      marginLeft:10
    },

    card: {
      width: "70%",
      borderRadius: 10,
      backgroundColor: "#f6f6f6",
      height: 45,
      marginRight: 10,
      marginTop:10,
    },
  
    formPicker: {
      width: "100%",
      margin: -5,
    },

    
  });
  
  export default styles
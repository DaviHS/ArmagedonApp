import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


//Método para salvar novo item
async function saveItem(listItem) {
  listItem.id = new Date().getTime();
  let savedItems = [];
  try {
    const response = await AsyncStorage.getItem("items");
    if (response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
   // Alert.alert("","Informações salvas com sucesso!");
    return AsyncStorage.setItem("items", JSON.stringify(savedItems));
    
  } catch (error) {
    alert("Erro ao salvar: " + error );
    
  }

}

//Método para atualizar Item selecionado
async function updateItem(listItem, id) {
  listItem.id = new Date().getTime();
  const savedItems = await getItems();
  try {
    const index = await savedItems.findIndex((item) => item.id === id);
    savedItems[index] = listItem; 
   // Alert.alert("","Informações atualizadas com sucesso!");
    return AsyncStorage.setItem("items", JSON.stringify(savedItems));

  } catch (error) {
    Alert.alert("Erro ao salvar: " + error );
  }

}

//Método que retorna todos os Items salvos 
async function getItems() {

  return AsyncStorage.getItem("items").then((response) => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}

//Método que retorna um item selecionado pelo ID
async function getItem(id) {
  const savedItems = await getItems();
  return savedItems.find((item) => item.id === id) ;
  
}

//Método que exclui item selecionado pelo ID
async function deleteItem(id) {
  let savedItems = await getItems();
  const index = await savedItems.findIndex((item) => item.id === id);
  savedItems.splice(index, 1);
  return AsyncStorage.setItem("items", JSON.stringify(savedItems));
}

//Excluir todos os registros salvos 
async function clearAll() {
  try {
    await AsyncStorage.clear();
    return getItem();

  } catch (error) {

    console.log(error);
    return { error: true, msg: "Erro ao exluir registro!" };
  }
}

//Exportar métodos para utilização.
module.exports = {
  saveItem,
  updateItem,
  getItems,
  getItem,
  deleteItem,
  clearAll,
};

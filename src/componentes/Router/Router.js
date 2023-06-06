import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, Header } from "@react-navigation/stack";
import InitR from '../TELA RASTREAMENTO/Rastrear/TelaRastrear';
import List from "../TELA RASTREAMENTO/Listagem/List";
import TelaInicial from "../Inicial/TelaInicial";
import InitFundi from "../TELAS MAPA/Fundição/InitFundi";
import InitLQ from "../TELAS MAPA/LQ/InitLQ";
import InitBuhler from "../TELAS MAPA/Buhler/InitBuhler";
import InitCalandra from "../TELAS MAPA/Caladra/InitCalandra";
import InitEstufa from "../TELAS MAPA/Estufa/InitEstufa";
import InitGuilhotina from "../TELAS MAPA/Guilhotina/InitGuilhotina";
import InitSlitter_Grossa from "../TELAS MAPA/Slitter Grossa/InitSlitter_Grossa";
import InitLFF2 from "../TELAS MAPA/LFF2/InitLFF2";
import InitLFF1 from "../TELAS MAPA/LFF1/InitLFF1";
import InitLA9 from "../TELAS MAPA/LA9/InitLA9";
import InitSlitter_Fina from "../TELAS MAPA/Slitter Fina/InitSlitter_Fina";
import InitRotativa from "../TELAS MAPA/Rotativa/InitRotativa";
import InitPrensa from "../TELAS MAPA/Prensa/InitPrensa";
import InitSelecao from "../TELAS MAPA/Seleção/InitSelecao";

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

function Telas() {
  /*Identifica as telas disponíveis e ordena elas */
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tela Inicial"
        screenOptions={{
          headerStyle: {
            height: 60,
            backgroundColor: "#e5e0e0",
          },
          headerTitle: "fundaluminio",
          headerTintColor: "#9ca0a0",
          tabBarActiveTintColor: "#6B8E23",
          tabBarInactiveTintColor: "#738678",
          tabBarActiveBackgroundColor: "#ebebf5",
          tabBarInactiveBackgroundColor: "#fafafc",
          tabBarLabelStyle: {
            fontSize: 15,
            position: "absolute",
            top: 15,
            bottom: 0,
            left: 0,
            right: 0,
          },
          tabBarIconStyle: { display: "none" },
        }}
      >
        <Screen
          /**
           * INICIA PRIMEIRA TELA ROTA
           */
          name="Tela Inicial"
          component={TelaInicial}
          options={{ tabBarLabel: "Tela Inicial" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA FUNDICAO
           */
          name="Fundição"
          component={InitFundi}
          options={{ tabBarLabel: "Fundição" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA LQ
           */
          name="LQ"
          component={InitLQ}
          options={{ tabBarLabel: "LQ" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA SLITTER GROSSA
           */
          name="Slitter Grossa"
          component={InitSlitter_Grossa}
          options={{ tabBarLabel: "Slitter Grossa" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA SLITTER FINA
           */
          name="Slitter Fina"
          component={InitSlitter_Fina}
          options={{ tabBarLabel: "Slitter Fina" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA ESTUFA
           */
          name="Estufa"
          component={InitEstufa}
          options={{ tabBarLabel: "Estufa" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA BUHLER
           */
          name="Buhler"
          component={InitBuhler}
          options={{ tabBarLabel: "Buhler" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA LFF2
           */
          name="LFF2"
          component={InitLFF2}
          options={{ tabBarLabel: "LFF2" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA SLITTER LFF1
           */
          name="LFF1"
          component={InitLFF1}
          options={{ tabBarLabel: "LFF1" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA LA9
           */
          name="LA9"
          component={InitLA9}
          options={{ tabBarLabel: "LA9" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA GUILHOTINA
           */
          name="Guilhotina"
          component={InitGuilhotina}
          options={{ tabBarLabel: "Guilhotina" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA PRENSA
           */
          name="Prensa"
          component={InitPrensa}
          options={{ tabBarLabel: "Prensa" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA ROTATIVA
           */
          name="Rotativa"
          component={InitRotativa}
          options={{ tabBarLabel: "Rotativa" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA CALANDRA
           */
          name="Calandra"
          component={InitCalandra}
          options={{ tabBarLabel: "Calandra" }}
        />
        <Screen
          /**
           * INICIA PRIMEIRA TELA SELECAO
           */
          name="Seleção"
          component={InitSelecao}
          options={{ tabBarLabel: "Seleção" }}
        />

        <Screen
          /**
           * INICIA PRIMEIRA TELA (COLETA DE DADOS)
           */
          name="Rastrear"
          component={InitR}
          options={{ tabBarLabel: "Rastrear" }}
        />
        <Screen
          /**
           * INICIA SEGUNDA TELA (LISTAGEM E EDIÇÃO DE DADOS)
           */
          name="Lista"
          component={List}
          options={{ tabBarLabel: "Lista" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Telas;

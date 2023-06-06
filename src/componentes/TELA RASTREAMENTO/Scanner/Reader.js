import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({data}) => {
    setScanned(true);
    props.onCodeScanned(data);
    Alert.alert('Verificação!', `OS N° ${data} foi escaneado.`);
  };

  if (hasPermission === null) {
    return <Text style={styles.textStyle}>Verificar permissão de câmera.</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.textStyle}>Sem acesso a câmera.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject} 
      />
      {scanned && <Button title={`Escanear novamente?`} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width:'98%',
    height:'95%',
    alignSelf:'center'
  },

  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
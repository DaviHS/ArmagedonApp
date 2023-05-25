import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Telas from './src/Router/Router';

/**
 * CLASSE PRIMÀRIA
 * @returns 
 */
export default function App() {
  return (
    <>
      <Telas />
      <StatusBar style="dark" />
    </>
  );
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { Surface } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { useState } from 'react';


function App() {
  const [seleccionado,setSeleccionado] = useState(false);
  const [num,setNum] = useState(0);

  const seleccionar=(numero)=>{
    if(seleccionado===true&&num==numero){
      setSeleccionado(false);
      setNum(0);
    }else{
      setSeleccionado(true);
      setNum(numero);
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.View1}>
        <View style={{flex:1,justifyContent: 'flex-start',alignItems: 'center'}}>
        <Text style={styles.sectionTitle}>Unitats TIC</Text>
        </View>
        
        <View style={{flex: 4,flexDirection: 'row'}}>
          <Surface style={(num===1) ? styles.estilCardSeleccionat :styles.estilCard } elevation={4} onTouchEnd={()=>seleccionar(1)}>
            <Text style={styles.sectionTitle}>DAM</Text>
            <Text style={styles.sectionDescription}>Desenvolupament d'Aplicacions Multiplataforma</Text>
          </Surface>
          <Surface style={(num===2) ? styles.estilCardSeleccionat :styles.estilCard } elevation={4} onTouchEnd={()=>seleccionar(2)}>
            <Text style={styles.sectionTitle}>DAW</Text>
            <Text style={styles.sectionDescription}>Desenvolupament d'Aplicacions Web</Text>
          </Surface>
          <Surface style={(num===3) ? styles.estilCardSeleccionat :styles.estilCard } elevation={4} onTouchEnd={()=>seleccionar(3)}>
            <Text style={styles.sectionTitle}>ASIR</Text>
            <Text style={styles.sectionDescription}>Administració de Sistemes Informàtics i Xarxes</Text>
          </Surface>
        </View>

      </View>
      <View style={{ flex: 1, borderWidth: 2, borderColor: 'green' }}>

      </View>
      <View style={{ flex: 3, borderWidth: 2, borderColor: 'blue' }}>

      </View>
      <View style={{ flex: 2, borderWidth: 2, borderColor: 'yellow' }}>

      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

  View1: {
    flex: 2,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'red',
    
  },
  sectionDescription: {
    flexDirection: 'row',
    fontSize: 14,
    fontWeight: 400,
    flexWrap: 'wrap'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  estilCard: {
    margin: 5,
    padding: 3,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: 'black',
    width: windowWidth / 3,
  },
  estilCardSeleccionat:{
    margin: 5,
    padding: 3,
    borderWidth: 3,
    borderRadius: 9,
    borderColor: 'black',
    width: windowWidth / 3,
    backgroundColor:'#9933FF'
  }
});

export default App;

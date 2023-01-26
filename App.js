/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { Surface,Chip } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { useState } from 'react';


function App() {
  const customData = require('./dades.json');
  const [seleccionado,setSeleccionado] = useState(false);
  const [ciclo,setCiclo] = useState("");
  const [curso,setCurso] = useState(0);

  const seleccionar=(select)=>{
    if(seleccionado===true&&ciclo==select){
      setSeleccionado(false);
      setCiclo("");
    }else{
      setSeleccionado(true);
      setCiclo(select);
    }
  }

  const seleccionarCurso=(num)=>{
    if(curso==num){
      setCurso(0);
    }else{
      setCurso(num);
    }
  }
  
  const Card=(props)=>{
    <Surface style={(ciclo==props.titulo) ? styles.estilCardSeleccionat :styles.estilCard } elevation={4} onTouchEnd={()=>seleccionar(props.titulo)}>
        <Text style={styles.sectionTitle}>{props.titulo}</Text>
        <Text style={styles.sectionDescription}>{props.cuerpo}</Text>
    </Surface>

  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.View1}>
        <View style={{flex:1,justifyContent: 'flex-start',alignItems: 'center'}}>
        <Text style={styles.sectionTitle}>Unitats TIC</Text>
        </View>
        
        <View style={{flex: 4,flexDirection: 'row'}}>
          <FlatList
          data={customData.unitatTics}
          renderItem={({item}) => <Card titulo={item.cicle} cuerpo={item.nomCicle}/>}
          keyExtractor={(unElement, index) => unElement.cicle + index.toString()}/>
        </View>

      </View>
      <View style={{ flex: 1,flexDirection:'row', borderWidth: 2, borderColor: 'green',alignItems: 'center',justifyContent: 'space-between'}}>
        <Text style={styles.sectionTitle}>Cursos:</Text>
        <Chip style={{fontWeight:0.5,height:50}} icon={(curso==1) ? "check" : ""} disabled={false} onPress={() => seleccionarCurso(1)}>1r curs</Chip>
        <Chip style={{fontWeight:0.5,height:50}} icon={(curso==2) ? "check":""} onPress={() => seleccionarCurso(2)}>2r curs</Chip>
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

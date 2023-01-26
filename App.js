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


import { Surface, Chip ,Avatar } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { useState } from 'react';


function App() {
  const customData = require('./dades.json');

  const [profes1r,setprofes1r]=useState(customData.unitatTics[0].curs[0].profes);

  const [seleccionado, setSeleccionado] = useState(false);
  const [ciclo, setCiclo] = useState(-1);
  const [curso, setCurso] = useState(0);

  const seleccionar = (index) => {
    if (seleccionado === true && ciclo === index) {
      setSeleccionado(false);
      setCiclo(-1);
    } else {
      setSeleccionado(true);
      setCiclo(index);
    }
    setprofes1r(customData.unitatTics[index].curs[0].profes);  
  }

  const seleccionarCurso = (num) => {
    if (curso == num) {
      setCurso(0);
    } else {
      setCurso(num);
    }
  }

   const Card=(props)=>{
    return(
     <Surface style={(ciclo===props.index) ? styles.estilCardSeleccionat :styles.estilCard } elevation={4} onTouchEnd={()=>seleccionar(props.index)}>
         <Text style={styles.sectionTitle}>{props.titulo}</Text>
         <Text style={styles.sectionDescription}>{props.cuerpo}</Text>
     </Surface>
    )
   } 
   
   const Profesor=(props)=>{
    return(
      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}> 
      <Avatar.Icon size={24} icon={props.icon} />
      <Text>{props.nombre}</Text>
      </View>
    )
   }
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.View1}>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Unitats TIC</Text>
        </View>

        <View style={{ flex: 4, flexDirection: 'row' }}>
          <FlatList
          style={{flex: 1}}
          data={customData.unitatTics}
          renderItem={({item,index}) => <Card titulo={item.cicle} cuerpo={item.nomCicle} index={index}/>}
          keyExtractor={(unElement, index) => unElement.cicle + index.toString()}
          numColumns={customData.unitatTics.length}/>
        </View>

      </View>
      <View style={{ flex: 1, flexDirection: 'row', borderWidth: 2, borderColor: 'green', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.sectionTitle}>Cursos:</Text>
        <Chip style={{ fontWeight: 0.5, height: 50 }} icon={(curso == 1) ? "check" : ""} disabled={false} onPress={() => seleccionarCurso(1)}>1r curs</Chip>
        <Chip style={{ fontWeight: 0.5, height: 50 }} icon={(curso == 2) ? "check" : ""} onPress={() => seleccionarCurso(2)}>2r curs</Chip>
      </View>
      <View style={{ flex: 3, borderWidth: 2, borderColor: 'blue' }}>
      {seleccionado? profes1r.map((values,index)=>(
        <Profesor key={index} icon={values.foto} nombre={values.nom}/>
      )) : <View></View> }
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
  estilCardSeleccionat: {
    margin: 5,
    padding: 3,
    borderWidth: 3,
    borderRadius: 9,
    borderColor: 'black',
    width: windowWidth / 3,
    backgroundColor: '#9933FF'
  }
});

export default App;

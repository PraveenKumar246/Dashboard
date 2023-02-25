import { StyleSheet, Text, View ,TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React from 'react';


    const OPTIONS =['2023','2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000'];
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

const YearModalPicker = (props) => {

    
    const onPressItem = (option) => {
      props.changeModalVisibility2(false);
      props.setYear(option);
    }

    const option = OPTIONS.map((item,index) =>{
      return (
        <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
        <Text style= {styles.text}>{item}</Text>
        </TouchableOpacity>
      );
    });

  return (
    <TouchableOpacity onPress={()=>props.changeModalVisibility2(false)} style={styles.container}>
<View style={[styles.modal , {width : WIDTH - 20, height: HEIGHT/2}]}>
  <ScrollView>{option}</ScrollView>
</View>
    </TouchableOpacity>
  )
}

export default YearModalPicker;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  modal:{
    backgroundColor:'white',
    borderRadius:10,
  },
  option:{
    alignItems:'center',
  },
  text:{
    margin:20,
    fontSize:20,
    fontWeight:'bold',
    
  }
})
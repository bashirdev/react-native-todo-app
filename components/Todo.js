import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
const Todo = (props) => {
 
    return (
        <View style={[styles.item, {margin:8, padding:8} ]}>
            <Text style={{color:`${props.color}`}}>{props.item} </Text> 
            <Button style={styles.button} title='Delete' onPress={()=>props.deleteItem(props.item)} />
        </View>
    );
};

const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'gray',
        borderRadius:3,
        borderWidth:1,
        backgroundColor:'whitesmoke'
    },
    button:{
        color:'red',
    }
})
export default Todo;
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, ScrollView} from 'react-native';
import Todo from './Todo';

const TodoList = () => {
    const  [title, setTitle] =useState('TodoList')
    const [text, setText] = useState("");
    const [list, setList] = useState(['Hello Bashir']);

    // Add Todo
    const addItem = ()=>{
       const updatedList=list;
       updatedList.push(text)
         setList(updatedList)
         setText('');
    }

    // Delete Todo
    const deleteItem=(index)=>{
       const updateList= list.filter(todo=> todo !== index)
       setList(updateList)
      }
    return (
        <View style={{width:'80%', marginBottom:60}}>
        <Text style={[styles.align, styles.font]}>{title}</Text> 
        <ScrollView>
        {list.map((item, index)=> <Todo key={index} item={item} index={index} deleteItem={deleteItem} />)}
        </ScrollView>
         <View>
             <TextInput style={styles.input} type='text' value={text} onChangeText={(e)=> setText(e)}  />
             <Button  title='Add item' onPress={addItem} />
         </View>
          
         
        </View>
    );
};
const styles=StyleSheet.create({
   container:{
    backgroundColor:'blue',
    padding:10,
   },
   align:{
    alignSelf:'center',

},
font:{
   color:'orange',

},
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input:{
    borderRadius:5,
    borderWidth:1,
    marginBottom:8,
    padding:8,
  }
})


export default TodoList; 


// ----------------------------------------Bibliotheques----------------------------------------
import React, { useState } from 'react';
import tasks from './Tasks';//importer la liste des taches
import {ImageBackground, Text, View, TextInput, TouchableOpacity,FlatList,} from 'react-native';
import Styles from './Styles.js';//importer le style
import { AddButton, ShowTasksButton, SortByDate, SortByName,DisplayTASKscreen} from './Button';//importer buttons
import { addTask, displayTasks, sortByTaskName, sortByDate, } from './TaskFunctions';//importer functions
// ----------------------------------------fnction_princi----------------------------------------
export default function App() {
  
  const [showList, setShowList] = useState(tasks);
  const [taskList, setTaskList] = useState(tasks);
  const [newTaskName, setNewTaskName] = useState('');
  const [count, setCount] = useState(1); // added count state variable

// ----------------------------------------Ajouter----------------------------------------
  const handleAddTask = () => {
    addTask(taskList, setTaskList, newTaskName, setNewTaskName); };
// ----------------------------------------Sortnom----------------------------------------
  const handleSortByName = () => {
    const sortedTaskList = sortByTaskName(taskList);
    displayTasks(sortedTaskList); };//afficher apres la sort
// ----------------------------------------sortdate----------------------------------------
 const handleSortByDate = () => {
   sortByDate(taskList);
  };
// ----------------------------------------Display----------------------------------------
const handleDisplayTasks = () => {
    displayTasks(taskList);
  };
// ----------------------------------------show=----------------------------------------
  const handleShowList = (taskList) => {
    setShowList(!showList);
  };
  // ----------------------------------------Delete----------------------------------------
  const handleDeleteTask = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  };
  // ----------------------------------------Finish----------------------------------------
  const handlePress = (taskId) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === taskId) {
        task.text = 'Task completed';
        setCount(count + 1);//ajouter le count 1 
        console.log(count)//j'ai afficher sur le console pour verifier qu'elle incremente
      }
      
      return task;
    });
    setTaskList(updatedTasks);
  };
  
  // ----------------------------------------Pour le flatlist----------------------------------------
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Text style={{ padding: 10 }}>{item.name}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={{ color: 'red', paddingHorizontal: 10 }}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => handlePress(item.id)}
        disabled={item.text === 'Task completed'} // disabled le bouton finish
      >
        <Text style={{ color: 'green', paddingHorizontal: 10 }}>Finish</Text>
      </TouchableOpacity>
      <Text style={{ paddingHorizontal: 10 }}>{item.text}</Text>
      
    </View>
  );
  


// ----------------------------------------Interf_Utili----------------------------------------
  return (
    <ImageBackground//Background
      source={require('CC:/Malorie_Project/Application_yooHelp/assets/Pic2_APP.jpeg')}
      style={Styles.container}>
      <View style={Styles.column}>
        <View style={Styles.row}>
          <TextInput placeholder="Enter task name here" value={newTaskName} onChangeText={(text) => setNewTaskName(text)}/>
          <AddButton onPress={handleAddTask} />
        </View>
        <View style={Styles.row}>
          <ShowTasksButton onPress={handleDisplayTasks} />
         <SortByName onPress={handleSortByName}/>
         <SortByDate onPress={handleSortByDate}/>
        </View>
        <View>
        <DisplayTASKscreen  onPress={handleShowList}/>
      {showList && (
        <FlatList   data={taskList} renderItem={renderItem}/>//List
      )}
     </View>
    </View>
    </ImageBackground>
  );
}

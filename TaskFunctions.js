// ----------------------------------------Bibliotheques----------------------------------------
import { Alert, } from "react-native";//importer le composant alert
import { v4 as uuidv4 } from 'uuid';//importer v4 pour utiliser apres (id)

// ----------------------------------------Fnction_Ajout----------------------------------------
export const addTask = (taskList, setTaskList, newTaskName, setNewTaskName) => {
    const newTask = { name: newTaskName,id: uuidv4(), date: new Date() };//Crée un nouvel tache
    setTaskList([...taskList, newTask]);//ajouter le tache sur la liste
    setNewTaskName('');//vide pour ajouter une nouvelle tache
  };
  // ----------------------------------------Fnction_show----------------------------------------
  export const displayTasks = (taskList) => {
    let taskListString = '';
    taskList.forEach((task) => {//Parcourt la liste des taches et ajoute le nom et la date de chaque tache à la chaine de caractères
      taskListString += `${task.name} ${task.date}\n`;   });
    Alert.alert('Task List', taskListString); };//afficher le dans une alerte
  // ----------------------------------------Fnction_trie---------------------------------------
  export const sortByTaskName = (taskList) => {
    const sortedList = [...taskList].sort((a, b) => {
      //transformer en Majuscule 
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      //la comparaison
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sortedList;
  }
  // ----------------------------------------Fnction_trie_date----------------------------------------
  export const sortByDate = (taskList) => {
  taskList.sort((a, b) => new Date(a.date) - new Date(b.date));//comparaison de date 
  displayTasks(taskList);
};


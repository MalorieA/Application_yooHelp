
// ----------------------------------------Bibliotheques----------------------------------------
import React from 'react';// Importe la bibliothèque React
import { Button } from 'react-native';// Importe le composant Button de la  react-native
import Styles from './Styles.js';// Importe les styles du fichier Styles.js



// ----------------------------------------Ajouter_TASK----------------------------------------
export const AddButton = ({ onPress }) => {
  return (
    <Button
      style={Styles.buttonIn}//Applique les styles du bouton définis dans le fichier Styles.js
      title="Add"//Texte du bouton
      onPress={onPress}//la fonction onpress quand on clique
    />
  );
}

// ----------------------------------------Afficher_TASK----------------------------------------
export const ShowTasksButton = ({ onPress }) => {
  return (
    <Button
      style={Styles.buttonIn}
      title="Show Tasks"
      onPress={onPress}
    />
  );
}
// ----------------------------------------Trier_TASK par nom----------------------------------------
export const SortByName = ({ onPress }) => {
    return (
      <Button
        style={Styles.buttonIn}
        title="SortName"
        onPress={onPress}
      />
    );
  }
  // ----------------------------------------Trier_TASK par date----------------------------------------

  export const SortByDate = ({ onPress }) => {
    return (
      <Button
        style={Styles.buttonIn}
        title="SortDate"
        onPress={onPress}
      />
    );
  }
  


// ----------------------------------------Display_TASK_Screen----------------------------------------
  export const DisplayTASKscreen = ({ onPress }) => {
    return (
      <Button
        style={Styles.buttonIn}
        title="DISPLAY ALL TASKS"
        onPress={onPress}
      />
    );
  }



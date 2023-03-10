// ----------------------------------------Styles----------------------------------------
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
   

    container:{width:'100%',
    height:'100%'},
buttonContainer: {
marginTop: 20,
},

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      padding:20,
        alignItems: 'center',
      },
     
      buttonIn: {
        width: 400,
        height: 400,
        borderRadius: 10,
      },
      column:{flex: 1, flexDirection: 'column', justifyContent: 'center'}
  });
  export default Styles;
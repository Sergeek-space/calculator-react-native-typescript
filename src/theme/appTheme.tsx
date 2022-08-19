import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  calculatorContainer: {
    // paddingHorizontal: 10,
 },
  resultFont: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    paddingRight: 10,
    marginBottom: 10,
  },
  resultSmallFont: {
    color: 'white',
    opacity: 0.5,
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#333',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonFont: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
});
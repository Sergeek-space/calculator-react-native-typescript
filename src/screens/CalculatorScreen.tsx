import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';


export function CalculatorScreen() {
  const {
    previousNumber,
    number,
    clearHandler,
    flipSignHandler,
    backspaceHandler,
    divisionHandler,
    concatInputHandler,
    multiplicationHandler,
    subtractionHandler,
    additionHandler,
    calculateHandler
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {
        (previousNumber !== '0') && (
          <Text style={styles.resultSmallFont}>{previousNumber}</Text>
        )
      }
      <Text 
        style={styles.resultFont}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>
      <View style={styles.row}>
        < CalcButton text='C'  bgColor='grey' onPressHandler={clearHandler}/>
        < CalcButton text='+/-' bgColor='grey' onPressHandler={flipSignHandler}/>
        < CalcButton 
          text={String.fromCharCode(9003)} 
          bgColor='grey' 
          onPressHandler={backspaceHandler}
        />
        < CalcButton text='/' bgColor='orange' onPressHandler={divisionHandler}/>
      </View>
      <View style={styles.row}>
        < CalcButton text='7' onPressHandler={concatInputHandler}/>
        < CalcButton text='8' onPressHandler={concatInputHandler}/>
        < CalcButton text='9' onPressHandler={concatInputHandler}/>
        < CalcButton text='x' bgColor='orange' onPressHandler={multiplicationHandler}/>
      </View>
      <View style={styles.row}>
        < CalcButton text='4' onPressHandler={concatInputHandler} />
        < CalcButton text='5' onPressHandler={concatInputHandler}/>
        < CalcButton text='6' onPressHandler={concatInputHandler}/>
        < CalcButton text='-' bgColor='orange' onPressHandler={subtractionHandler}/>
      </View>
      <View style={styles.row}>
        < CalcButton text='1' onPressHandler={concatInputHandler}/>
        < CalcButton text='2' onPressHandler={concatInputHandler}/>
        < CalcButton text='3' onPressHandler={concatInputHandler}/>
        < CalcButton text='+' bgColor='orange' onPressHandler={additionHandler}/>
      </View>
      <View style={styles.row}>
        < CalcButton text='0' onPressHandler={concatInputHandler}/>
        < CalcButton text='.' onPressHandler={concatInputHandler}/>
        < CalcButton text='=' bgColor='orange' onPressHandler={calculateHandler} doubleWidth/>
      </View>
    </View>
  )
}

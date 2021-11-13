import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

const [start,setStart] = useState(true);
const [gameScreen,setGameScreen] = useState(false)
const [final,setFinal] = useState(false)
const [score,setScore] = useState(0)
const [attempts,setAttempts] = useState(0)
const [numPress,setNumPress] = useState()
const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (9 - 1 + 1) + 1))
const [right,setRight] = useState()


const check = (num) =>{
  setNumPress(num)

  if(num ===randomNum){
    setScore(score+10)
    setRight(true)
    setRandomNum(Math.floor(Math.random() * (9 - 1 + 1) + 1))
  }
  else{
    if(score>0){
      setScore(score-1)
    }    
    setAttempts(attempts+1)
setRight(false)
  }


}

  return (
    <View style={styles.container}>

{/* Front Screen */}

{start?
<View>

<Text style={{fontSize: 20, fontWeight: 700}}>Hello! Welcome to the Guess Game</Text>

  <TouchableOpacity onPress={()=>{setStart(false)
  setGameScreen(true)}} style= {styles.button } >
    <Text  style= {styles.btnText }>Start Game</Text>
  </TouchableOpacity>

</View>

:null}

{/* Game */}


{start === false && gameScreen===true?
<View>
  <Text>Score: {score}</Text>
  <Text>Attempts: {attempts}</Text>
  <Text style = {right?styles.numPressRight:styles.numPressWrong}>{numPress}</Text>
<View  style = {styles.row}>
{/* 1 */}
<TouchableOpacity onPress={()=>{check(1)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>1</Text>
  </TouchableOpacity>
{/* 2 */}
  <TouchableOpacity onPress={()=>{check(2)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>2</Text>
  </TouchableOpacity>
{/* 3 */}
  <TouchableOpacity onPress={()=>{check(3)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>3</Text>
  </TouchableOpacity>
</View>

<View style = {styles.row}>
{/* 4 */}
<TouchableOpacity onPress={()=>{check(4)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>4</Text>
  </TouchableOpacity>
{/* 5 */}
  <TouchableOpacity onPress={()=>{check(5)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>5</Text>
  </TouchableOpacity>
{/* 6 */}
  <TouchableOpacity onPress={()=>{check(6)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>6</Text>
  </TouchableOpacity>
</View>

<View style = {styles.row}>
{/* 7 */}
<TouchableOpacity onPress={()=>{check(7)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>7</Text>
  </TouchableOpacity>
{/* 8 */}
  <TouchableOpacity onPress={()=>{check(8)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>8</Text>
  </TouchableOpacity>
{/* 9 */}
  <TouchableOpacity onPress={()=>{check(9)}} style= {styles.digits } >
    <Text  style= {styles.btnText }>9</Text>
  </TouchableOpacity>
</View>


  <TouchableOpacity onPress={()=>{setGameScreen(false);
  setFinal(true)}} style= {styles.button } >
    <Text  style= {styles.btnText }>Done</Text>
  </TouchableOpacity>

</View>:null}

{final===true && start==-false?
<View style={{textAlign:"center"}}>
<Text style={{fontSize: 30, fontWeight: 700}}>You Finished The Match</Text>
<Text style={{fontSize: 20, marginVertical:10}}>Your Total Score Is <Text style={{color:"#20A400", fontSize: 30,fontWeight:700}}>{score}</Text></Text>
<Text style={{fontSize: 20}}>It Took You <Text style={{color:"#FF0000", fontSize: 30, fontWeight:700}}>{attempts}</Text> Attempts</Text>
</View>
: null}
      

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: "#EE00A2",
    textAlign:'center',
    paddingVertical: 10,
    paddingHorizontal:20,
    marginTop: 20,
    borderRadius: 5,
   shadowColor:"#00C3E7",
   shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 1,
  
  elevation: 9,
  },
  btnText:{
    color: "white",
    fontWeight: 600,
    fontSize: 20,
  },
  digits:{
    backgroundColor:"#00C3E7",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:5

  },
  row:{
    display:" flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop: 10

  },
  numPressWrong:{
    textAlign:"center",
    fontSize: 30,
    color:"#FF0000",
    fontWeight: 700,
    marginVertical: 20
  },
  numPressRight:{
    textAlign:"center",
    fontSize: 30,
    color:"#20A400",
    fontWeight: 700,
    marginVertical: 20
  },
  heading:{
    fontSize: 30,
  }
});

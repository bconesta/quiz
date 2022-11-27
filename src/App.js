import React, {useEffect, useState} from 'react';
import './App.scss';

const styles_none = {
  'display' : 'none'
};

const styles_block = {
  'display' : 'inline-flex'
};

let styles_l;
let styles_r;

const signos = [
  '<',
  '>'
]

const texto = [
  'Hola Juanjo,',
  'quería contarte algo importante.',
  'El día en el que te pedí que me expliques',
  'en realidad,',
  'era para esto',
  'pero',
  'me frustro mucho la actitud',
  'y por eso me lo tome muy mal',
  'y no tuve ganas de hablar',
  'me gustaría poder charlarlo',
  'y quería también',
  'saber si',
  'querrías entregarme la medalla'
]

function App() {
  const [selector, setSelector] = useState(0);

  if(selector==0){
    styles_l = styles_none;
  }
  else{
    styles_l = styles_block;
  }
  if(selector<texto.length-1){
    styles_r = styles_block;
  }
  else{
    styles_r = styles_none;
  }


  return (
    <div className="App">
      <div className='container'>
        <h1>{texto[selector]}</h1>
        <a style={styles_l} onClick={()=>setSelector(selector-1)} >{signos[0]}</a>
        <a style={styles_r} onClick={()=>setSelector(selector+1)} >{signos[1]}</a>
      </div>
    </div>
  );
}

export default App;

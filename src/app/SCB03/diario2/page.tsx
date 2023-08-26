'use client'

import React from 'react';
import Typewriter from '../../../components/Typewriter';

const App = () => {
  const HandoutTitle = 'Diario del teniente Cabo Cañaveral - 10 de Febrero:';
  const Subtitle = 'Me cuesta creer que tienen a Frankie encerrado ¿No fueron ya suficientes preguntas? Lo tuvieron día y noche en el interrogatorio durante 3 días y ahora se lo llevaron a "cuarentena". ¡Tonterías! '
  const Content = "Siempre nuestra misión fueron los asteroides, nos enseñaron a verlos atentamente, yo hasta creo que tienen un código en sus brillos. ¿Por qué ahora que Frankie puede tocarlos lo castigan?"
  const Mistery = "Desde antes de entrar a la niebla ya los veíamos conversar, aquí adentro gritan... No dejaran que se vaya Frankie."
  const typingSpeed = 50;
  const fasterSpeed = 15;

  return (
    <div className="text-green-300 font-mono m-2 p-5">
      <div className='text-xl font-extrabold'><Typewriter text={HandoutTitle} speed={typingSpeed} loop={false}/></div>
      <div className='pt-7 pb-7'>
        <Typewriter text={Subtitle} speed={fasterSpeed} loop={false}/>
      </div>
      <div className="">
        <Typewriter text={Content} speed={fasterSpeed} loop={false}/>
      </div>
      <div className='text-green-100 pt-7'>
        <Typewriter text={Mistery} speed={typingSpeed} loop={true}/>
      </div>
    </div>
  );
};

export default App;
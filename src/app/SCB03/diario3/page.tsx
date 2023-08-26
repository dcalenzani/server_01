'use client'

import React from 'react';
import Typewriter from '../../../components/Typewriter';

const App = () => {
  const HandoutTitle = 'Diario de Becaria Terué (Oficial Médico) - 13 de Febrero:';
  const Subtitle = 'La condición de Frankie cada día es peor. El "Caso Terna", cómo le gusta llamarlo al capitán y otros científicos, quién repentinamente olvidaron todos los favores que hizo por ellos Frankie alguna vez.'
  const Content = "Ayer estuve llorando y hoy peor, los análisis de su ARN llegaron y son 90% idénticos al ARN que encontramos en los animales de los asteroides ¿Que hiciste allá Frankie? ¿Aún puedo acompañarte? Tu piel... no es normal, y ¿¿espejos??"
  const Mistery = "Creo que también los veo, se congregan por nosotros a diario ¿no???"
  const typingSpeed = 50;
  const fasterSpeed = 15;
  const fastestSpeed = 5;

  return (
    <div className="text-green-300 font-mono m-2 p-5">
      <div className='text-green-700 pt-7 pb-7'>
        <Typewriter text={Mistery} speed={fastestSpeed} loop={true}/>
      </div>
      <div className='text-xl font-extrabold'><Typewriter text={HandoutTitle} speed={typingSpeed} loop={false}/></div>
      <div className='pt-7'>
        <Typewriter text={Subtitle} speed={fasterSpeed} loop={false}/>
      </div>
      <div className='pt-7'>
        <Typewriter text={Content} speed={fasterSpeed} loop={false}/>
      </div>
    </div>
  );
};

export default App;
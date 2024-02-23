'use client'

import React, { useState } from 'react';

interface Attributes {
  [name: string]: number;
}

const shuffleArray = (array: any[]) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CharacterBuilder = () => {
  const initialAttributePool = [40, 50, 50, 50, 60, 60, 70, 80];
  const [attributePool, setAttributePool] = useState<number[]>(initialAttributePool);
  const [attributes, setAttributes] = useState<Attributes>({});

  const addAttributes = () => {
    const shuffledPool = shuffleArray(attributePool);
    const newAttributes: Attributes = {};

    const attributeNames = ["Strength", "Constitution", "Size", "Dexterity", "Appearance", "Intelligence", "Power", "Education"];

    attributeNames.forEach(name => {
      const randomValue = shuffledPool.pop();
      if (randomValue !== undefined) {
        newAttributes[name] = randomValue;
      }
    });

    setAttributes(newAttributes);
    setAttributePool(initialAttributePool); // Reset the attribute pool
  };

  const buildCharacter = () => {
    addAttributes();
  };

  return (
    <div className='flex flex-col font-mono dark:bg-black dark:text-slate-300 bg-auto min-h-screen'>
      <div className="fixed flex text-center w-screen"><a href='./' className='w-screen bg-zinc-800 py-6 text-2xl  text-zinc-100'>Home</a></div>
      <div className="mx-10 lg:text-2xl text-lg">
        <h1 className='text-center p-7 pt-24 text-xl md:text-2xl font-bold'>¿Cómo armar tu Investigador para Call of Cthulhu 7ma edición?</h1>
        <p className='text-left text-md md:text-xl pb-6 [&>br]:mb-4'>En Call of Cthulhu tomamos el rol de "investigadores", personas normales o no tan normales que se encuentran con lo oculto.<br/>Nuestros personajes tienen personalidades, trabajos, personas que aman, ideales y miedos. El impacto de estas ideas en sus vidas se ve reflejado en las "Characteristics" o características y los "skills" o habilidades de nuestro investigador.</p>

        <div className="flex my-8">
          <p className='text-sm mt-6 mr-4'>Si quieres un personaje "rápido" usa el siguiente botón:</p>
          <button className=' p-3 text-center bg-gray-900 text-slate-300 border rounded-md' onClick={buildCharacter}>Construir investigador</button>
        </div>

        <h2 className='pb-3 m-3 text-xl'>Características</h2>
      <table className="border-collapse border w-full mb-6">
        <thead>
            <tr className="bg-gray-800 [&>th]:border [&>th]:p-2 [&>th]:text-slate-300">
              <th>Attribute</th>
              <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(attributes).map(([name, value]) => (
            <tr key={name}>
                <td className="border p-2">{name}</td>
                <td className="border p-2 text-center">{String(value)}</td>
            </tr>
            ))}
        </tbody>
      </table>
        <span className='my-6'>
          <h2 className='text-center p-7 text-xl font-bold'>Llena tus características manualmente</h2>
          <p>Hay 8 skills entre las que podemos dividir los siguientes puntos la siguiente cantidad de veces:
          </p>
          <ol className='list-decimal m-8 [&>li]:mt-4'>
            <li>80 (1 vez): Es tu característica más desarrollada, superior por mucho a lo que se ve tradicionalmente en la calle</li>
            <li>70 (1 vez): Tu segunda característica, tu mano derecha,no necesariamente vinculada a tu primera característica</li>
            <li>60 (2 veces): Son cosas que te son útiles en tu vida diaria, pero no son necesariamente mejores al resto de la sociedad</li>
            <li>50 (3 veces): Características medias, aquí eres igual e incluso a veces peor (en un mal día, por ejemplo) que el resto de personas de la sociedad</li>
            <li>40 (1 vez): Es tu característica menos desarrollada, eres visiblemente malo en esta característica y algunos dirían que es el pie del que cojeas.</li>
          </ol>
        </span>
      </div>
    
      <div className='m-3 p-2'>

      <h3> Características derivadas</h3>
      <div className='border rounded-md justify-left [&>p]:my-4'>
        <p className=""> <b>Magic Points (Power / 10):</b><br/>Equivalen al poder mágico que puede usar tu personaje sin gastar de su propia fuerza vital (HP) </p>
        <p className=""> <b>Sanity (Power):</b><br/> Equivale al poder y fuerza de voluntad de tu personaje, pero se pierden con el tiempo y los encuentros con los poderes eonicos</p>
        <p className=""> <b>Luck (3D6 * 5):</b><br/> La suerte de tu personaje, puedes gastar estos puntos para manipular una tirada (un punto por una unidad) o puedes usar la puntuación total para probar tu suerte en el mundo.</p> 
        <p className=""> <b>Move rate (8):</b><br/> Es un aproximado de tu movimiento y su puntuación es estándar entre humanos. Pero, en una persecución ¿Estás seguro que lo que corre detrás tuyo es también gente? </p>
      </div>

      </div>
      
      <div className='m-10'>
      <h2 className='font-bold text-xl text-center mb-4'> Llenar las Skills o Habilidades de tu investigador</h2>
      <p className='text-left pb-6 [&>br]:mb-4'>Tu investigador, además de sus características, ha desarrollado a lo largo de su vida "habilidades". Tus habilidades en el trabajo, con la gente o con las cosas se ve reflejada en estos puntos.</p>

      <p className='text-center mb-10'> Los valores estándar para las habilidades son 1x70;2x60;3x50;3x40;4x(+20)</p>
      </div>

      <div>
        <a href=""></a>
      </div>
    </div>
  );
};

export default CharacterBuilder;
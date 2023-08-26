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
    <div className='font-mono bg-slate-900 text-green-300'>
      <h1 className='text-center m-3 p-7 text-xl font-bold'>Character Randomizer - Call of Cthulhu</h1>

      <a href='/SCB03' className="m-3 p-3 bg-gray-900 border rounded-md">Welcome Page</a>

      <button className="m-3 p-3 bg-gray-900 border rounded-md" onClick={buildCharacter}>Build Character</button>

      <div className='m-3 p-2'>

      <h2 className='pb-3 m-3 text-xl'>Attributes</h2>
      <table className="border-collapse border w-full">
        <thead>
            <tr className="bg-gray-800">
            <th className="border p-2">Attribute</th>
            <th className="border p-2">Value</th>
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
      <div className='border rounded-md'>
      <p className='font-bold text-center'> Move rate is always 8 for humans </p>
      <p className='font-bold text-center'> Magic Points: Power / 10 </p>
      <p className='font-bold text-center'> Sanity: Power </p>
      <p className='font-bold text-center'> Luck: 3D6 * 5 </p> 
      </div>
      </div>
      <p className='font-bold text-center'> Values for skills are 1x70;2x60;3x50;3x40;4x(+20)</p>
      <div className='p-5 mt-3 text-center'>

      <h2>Recommended Training</h2>

      <table className='bg-gray-800 text-sm [&>th]:border [&>th]:rounded-md [&>tr]:border [&>tr]:rounded-md [&>td]:border [&>td]:p-2'>
        <tr>
          <th>Rank</th>
          <th>Recommended Training</th>
        </tr>
        <tr>
          <td>Capitan</td>
          <td>System Operations, Navigate, Zero-G</td>
        </tr>
        <tr>
          <td>Teniente primero</td>
          <td>Firearms, Computer Maintenance, Technical Repair</td>
        </tr>
        <tr>
          <td>Teniente segundo / Medico</td>
          <td>Medicine, Psychology, Science</td>
        </tr>
        <tr>
          <td>Alferez / Ingeniero</td>
          <td>Electrical Repair, Mechanical Repair, Science (Engineering)</td>
        </tr>
        <tr>
          <td>Alferez / Investigacion</td>
          <td>Science (astronomy), Science (Physics), Zero-G</td>
        </tr>
        <tr>
          <td>Investigacion / Agregado civil</td>
          <td>Library Use, Science (astronomy), Spot Hidden</td>
        </tr>
      </table>
      </div>
    </div>
  );
};

export default CharacterBuilder;
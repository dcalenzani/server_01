'use client'

import React, { useState } from 'react';

interface Attributes {
  [name: string]: number;
}

const CharacterBuilder = () => {
  const initialAttributePool = [40, 50, 50, 50, 60, 60, 70, 80];
  const [attributePool, setAttributePool] = useState([...initialAttributePool]);

  const [attributes, setAttributes] = useState({});

  const addAttributes = () => {
    const attributeNames = ["Strength", "Constitution", "Size", "Dexterity", "Appearance", "Intelligence", "Power", "Education"];
    const newAttributes: Attributes = {};

    attributeNames.forEach(name => {
      const randomIndex = Math.floor(Math.random() * attributePool.length);
      const randomValue = attributePool[randomIndex];
      newAttributes[name] = randomValue;

      // Create a new array with the random value removed
      const newAttributePool = attributePool.slice(0, randomIndex).concat(attributePool.slice(randomIndex + 1));
      setAttributePool(newAttributePool);
    });

    setAttributes(newAttributes);
  };

  const buildCharacter = () => {
    addAttributes();
  };

  return (
    <div className='font-mono'>
      <h1 className='text-center m-3 p-7 text-xl font-bold'>Character Randomizer - Call of Cthulhu</h1>
      <button className="m-3 p-3 bg-gray-800 border rounded-md" onClick={buildCharacter}>Build Character</button>

      <div className='m-3 p-2'>

      <h2 className='pb-3 m-3text-xl'>Attributes</h2>
      <table className="border-collapse border w-full">
        <thead>
            <tr className="bg-gray-200">
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
      </div>
      <p className='font-bold text-center'> Values for skills are 1x70;2x60;3x50;3x40;4x(+20)</p>
    </div>
  );
};

export default CharacterBuilder;
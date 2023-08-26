'use client'

import React from 'react';
import Typewriter from '../../components/Typewriter';

const App = () => {
  const HandoutTitle = 'Diario de Becaria Terué (Oficial Médico) - 13 de Febrero:';
  const Subtitle = 'Hoy envíamos y recogimos al primer pelotón de investigación designado al llamado "pozo 00". Ya todos sabemos que en el espacio no hay días marcados, solo relojes que corren y alarmas que nos notifican que un día llega y otro pasa. Pero con cada "día" que pasa desde la entrada en esta maldita neblina hay una sensación que crece en mí, la de seguir entrando al cinturón. Desde el domo la vista es muy distinta a la de estos cuartos y esas rocas inertes...'
  const Mistery = "Puedo jurarlo... Me estan llamando.. Con sus brillos, me gritan..."
  const Content = "No puedo creer el estado en el que llego ese casi-niño. Esa piel se veía terriblemente desgastada... terriblemente seca, pero dura al tacto. La descripción del evento por la cuál se llego a esa conclusión aún me parece inverosímil, por lo que se procederá a interrogar con mayor precisión al teniente Terna, el único sobreviviente de los 3 enviados."
  const typingSpeed = 50;
  const fasterSpeed = 15;

  return (
    <div className="font-mono m-2 p-5">
      <div className='text-xl font-extrabold'><Typewriter text={HandoutTitle} speed={typingSpeed} loop={false}/></div>
      <div className='pt-7 pb-7'>
        <Typewriter text={Subtitle} speed={fasterSpeed} loop={false}/>
      </div>
      <div className='pt-7'>
        <Typewriter text={Mistery} speed={typingSpeed} loop={true}/>
      </div>
      <div className='pt-7'>
        <Typewriter text={Content} speed={fasterSpeed} loop={false}/>
      </div>
    </div>
  );
};

export default App;
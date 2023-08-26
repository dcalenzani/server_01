'use client'

import React from 'react';
import Typewriter from '../../components/Typewriter';

const App = () => {
  const HandoutTitle = 'Diario del Capitan - 05 de Febrero:';
  const Subtitle = 'Hoy envíamos y recogimos al primer pelotón de investigación designado al llamado "pozo 00". Ya todos sabemos que en el espacio no hay días marcados, solo relojes que corren y alarmas que nos notifican que un día llega y otro pasa. Pero con cada día que pasa desde la entrada en esta maldita neblina esa sensación solo crece en mí. Y sin embargo, hay algo que me lleva a querer descubrir más sobre estos asteroides. Por eso aunque me siento mal por lo que ocurrió con esos chibolos los volvería a enviar si fuese necesario. Lo de los Chipriotas fue una sorpresa casi esperada. No lo comenté con nadie pero se me notificó de que los radares habían captado presencia de humanos, adicionalmente, desde las primeras teorías de exploración trans-gravitacional este sector es uno de los favoritos. Pero por el Dios Latino y todo lo que es bueno juro que nunca en todos mis años bajo la milicia había visto a alguien tener "heridas" como las que trajo ese muchacho.'
  const Content = "Esa piel se veía terriblemente desgastada, terriblemente seca, pero era dura al tacto. La descripción del evento por el cuál se llego a esa conclusión aún me parece inverosímil, por lo que se ha puesto en cuarentena a su compañero de pelotón, el único sobreviviente de los 3 enviados. Una parte de mí cree que son esas luces las que traen el peligro, otra parte de mí quiere esperar a ver que ocurre, por suerte el pequeño soldado está al lado de una ventana."
  const typingSpeed = 50;
  const fasterSpeed = 15;

  return (
    <div className="font-mono m-2 p-5">
      <div className='text-xl font-extrabold'><Typewriter text={HandoutTitle} speed={typingSpeed}/></div>
      <div className='pt-7 pb-7'>
        <Typewriter text={Subtitle} speed={fasterSpeed} />
      </div>
      <Typewriter text={Content} speed={typingSpeed} />
    </div>
  );
};

export default App;
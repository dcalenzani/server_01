'use client'

import React from 'react';
import Typewriter from '../../components/Typewriter';


const App = () => {
    const Title = "APRENDIZAJES DE LA MISION";
    const Subtitle = "BIENVENIDO A LA FRONTERA DEL COSMOS SantaCruz - Bolivar (SCB03)"
    const fastestSpeed = 35;
return (
    <div className="text-green-300 font-mono m-5 p-5 [&>code]:pt-7 [&>h1]:mb-4 [&>h1]:text-2xl [&>h1]:text-bold [&>h2]:text-md [&>h2]:mt-3 [&>h2]:mb-2 [&>h2]:font-bold [&>p]:text-justify [&>p]:text-green-500 [&>p]:mt-5">
    <h1><Typewriter text={Title} speed={fastestSpeed} loop={false}/> </h1> 
    <h2><Typewriter text={Subtitle} speed={fastestSpeed} loop={false}/></h2>
    <p><i>Nosotros, los Latinos, hemos logrado en conjunto superar las trabas de la velocidad luz y su impacto sobre el tiempo. En esta era de la civilizacion,la gravedad de las estrellas se aprovecha para reducir el tiempo (y la distancia) en los viajes mas extremos. Sin embargo, la tecnología aún es incipiente, y ustedes privilegiados del primer contacto son conscientes que las mecánicas de los viajes a través del &quot;horizonte de eventos&quot; están diseñadas para solo un sentido.</i></p>
    <p><strong>Es normal que usted y su tripulación sientan los mareos y desorientación del desmayo corto </strong> inducido para el golpe gravitacional de realizar el viaje hacia SCB03.</p>
    <p>Debería haber sido notificado también sobre como se podrían afectar sus neuro-receptores, pudiendo presentar alucinaciones menores durante los primeros 5 días.</p>
    <p>Mantenga la calma mientras recupera la respiración, si tiene problemas para recordar quien es usted y lo que es real no dude en revisar la caja de pertenencias que preparó, la cuál debería estar ubicada en la parte baja de su asiento, según los protocolos.</p>
    <p>Esperamos que aprendan lo suficiente para vivir cómodamente en el espacio. Recuerde que usted es un recurso invaluable para la Confederación Latina.</p>
    <h2>LA MISION SANTA CRUZ BOLIVAR CERO TRES</h2>
    <p>Latinoamérica unida por cambiar la historia.</p>
    <p>Desde hace 6 años, en una esquina oculta del cosmos conocido, la misión SantaCruz-Bolivar 3 (01010011 01000011 01000010 00100000 00110011, en binario tradicional) es el centro de investigación más importante de la armada latina. SCB03 invierte bajo 7 llaves casi el 30% del presupuesto total de la Confederación Latina de Estados PluriSolares. Su objetivo como base de frontera consiste en ampliar poco a poco el dominio latino sobre el universo conocido. Nuestra posición es estratégica, dentro de un denso cinturon de asteroides similar a nada visto por la humanidad hasta ahora.</p>
    <p>Los primeros años de la misión estuvieron orientados en pacificar un radio de 1600 km para echar anclas e iniciar las investigaciones in situ. Sabemos, desde nuestro año 3, que la esquina opuesta de este sistema se encuentra en investigación por la Colonia Chipriota, quienes aún no habrían logrado el salto gravitacional según trabajos de inteligencia latinos.</p>
    <p>Una de las grandes sorpresas recientes de la misión Santa Cruz Bolivar ha sido el inicio de exploraciones fuera del perímetro del edificio principal, que ha traído grandes logros para todos nuestros Estados Plurisolares. Aunque estos logros se han mantenido como información altamente clasificada, con su llegada a SCB03 sabremos que logrará aprender lo suficiente para comprender la importancia de nuestra posición.</p>
    <p>La misión Santa Cruz Bolivar ha sido esencial para el desarrollo biotecnológico de la armada Latina, al mismo tiempo que ha asegurado la supervivencia de los colonos Latinos en los ecosistemas más agresivos, no sin el acompañamiento de otras tecnologías, como dispositivos de filtración avanzada o protección contra radiación.</p>
    <h2>LA EMERGENCIA</h2>
    <p>La señal de emergencia fue enviada hace 1 semana, el tiempo mínimo para la entrega de mensajes de audio desde la posición de SCB03. La computadora de comando notificó la presencia de intrusos (estimación de 5(+-)1) en los alrededores de la nave. Inmediatamente la puerta de seguridad cayó bajo el protocolo de defensa. Asegurada la evacuación del personal científico a la bahía de control se procedió a dividir al personal militar entre las 3 secciones de la nave.</p>
    <p>La misión principal es restaurar la estabilidad de los sistemas de la misión SCB03 y enviar un reporte de la situación a la Confederación Latina. Si es necesario se debe utilizar la fuerza letal contra los intrusos presentes, nuestro mayor interés es la preservación del conocimiento y las vidas latinas.</p>
    <h2>SECCIONES DE LA NAVE</h2>
    <p>El edificio de la misión, modelo &quot;Icaro&quot;, adaptado del diseño original de Dieter Muller y Zaydan, es una masa flotante de acero de 4.5km de largo. Una nave autosuficiente, tiene dentro de ella todo lo necesario para sobrevivir por décadas sin apoyo externo, y puede mantener su autonomía sin humanos por al menos un año, cortando claro la recirculación de oxígeno.</p>
    <p>Este diseño es estándar en todas las naves latinas, dado que parte de nuestro espíritu latino se encuentra en poblar los límites más extremos cómo precursores ante lo adverso.</p>
    <p>La nave esta dividida en 3 secciones continuas, unidas a través de un eje cilíndrico. El tubo tiene un radio de 3.8m y en promedio 4 personas pueden pasar cómodamente a través del sistema al mismo tiempo.</p>
    <p>Las secciones que componen la nave son:</p>
    <ol className='list-decimal pl-2 text-sm mb-4 mt-4 [&>li]:mt-2'>
    <li className='p-3 border rounded-sm'>
    <strong>La Bahia de ingenieria</strong>: Contiene la planta nuclear que da poder al edificio, además de los controles del motor y monitores del sistema.
    <ul className='mt-2'>
    <li><strong>IMPORTANTE</strong>: La salida de este sector depende de los controles en los puentes de mando, permanecer mucho tiempo en la sala sin un traje anti radiación lo dañará físicamente.</li>
    </ul>
    </li>
    <li className='p-3 border rounded-sm'>
    <p><strong>Las barracas del personal</strong>: Los espacios de vida del personal que habita la misión SCB03, unidos a través de un tubo de conexión al eje cilíndrico. No se sienta mal por los camarotes apretados, recuerde que es una oportunidad única para formar fuertes lazos de amistad con sus compañeros.</p>
    </li>
    <li className='p-3 border rounded-sm'>
    <p><strong>El Domo de control</strong>: Ubicación de las oficinas, la sala de ciencias, los cuartos de computadoras y la sala de comando. Caracterizado por &quot;El ojo&quot;, el domo de vidrio dinámico de casi 2 km de diámetro que compone la cabeza de SBC03</p>
    </li>
    </ol>
    <h1>LE DESEAMOS LA MEJOR DE LAS SUERTES EN SU MISION.</h1>
    <h1>TODOS USTEDES SON INVALUABLES PARA EL ESPACIO LATINO.</h1>
    </div>
);
};

export default App;
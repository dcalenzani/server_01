'use client'

import Typewriter from "@/components/Typewriter";

const App = () => {
    const Title = "ACOMPAÑAMIENTO DEL GUARDIAN"
    return(
        <div className='font-mono bg-slate-900 text-green-300 bg-auto min-h-screen p-5'> 
            <div className="[&>h2]:text-xl [&>h2]:mt-5 [&>h2]:mb-5 [&>h2]:font-bold [&>p]:text-justify [&>p]:mt-5">
                <h1 className="text-center font-bold text-2xl p-7"><Typewriter text={Title} speed={50} loop={false}></Typewriter></h1>
                <p>La historia en formato One-Shot tiene que dividirse en secciones con posibles finales para poder ajustarla al tiempo que tenemos para jugar.</p>
                <p>Las siguientes anotaciones son para una propuesta de 3.5 horas considerando a un grupo de novatos o principiantes</p>
            
            <table className="mt-5 border-collapse border w-full">
                <thead className="bg-gray-800">
                <tr>
                    <th className="text-left border p-2">Fase</th>
                    <th className="text-center border p-2">Tiempo(aprox)</th>
                </tr>
                </thead>
            
                <tbody>
                    <tr>
                    <th className="text-left border p-2">1. Diseño y Mecánicas</th>
                    <th className="text-center border p-2">30 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">2. Presentación de los personajes</th>
                    <th className="text-center border p-2">10 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">3. Introducción del viaje</th>
                    <th className="text-center border p-2">5 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">4. Primer combate</th>
                    <th className="text-center border p-2">30 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">5. Conversacion con refugiados</th>
                    <th className="text-center border p-2">15 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">6. Camino al puente secundario</th>
                    <th className="text-center border p-2">50 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">7. Restauración del sistema y rescate de Frankie</th>
                    <th className="text-center border p-2">30 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">8. Emergencia final</th>
                    <th className="text-center border p-2">20 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">9. Jefe Final</th>
                    <th className="text-center border p-2">20 minutos</th>
                    </tr>
                    <tr>
                    <th className="text-left border p-2">10. Cierre</th>
                    <th className="text-center border p-2">10 minutos</th>
                    </tr>
                </tbody>
            </table>

            <h2>1. Diseño y Mecánicas</h2>
            <p>El juego está planteado en un universo de ciencia ficción. La mecánica principal del horror en este juego es la desrealización y despersonalización producto de un trauma de separación. El viaje hacia el espacio con la promesa de nunca más volver a la tierra es una decisión extrema, que solo el lumpen o los muy sacrificados por la causa toman. </p>
            <p>Las mecánicas son las de Call of Cthulhu 7ema ed., con las reglas del suplemento Icarus, que dan algunas nuevas habilidades a los investigadores.</p>
            <h2>Argumento</h2>
            
            <p>Los científicos habían hecho un gran descubrimiento en los últimos meses. Primero el hallazgo de vida dentro del cinturon, luego el descubrimiento de completos ecosistemas.</p>
            <p>Analizando los patrones de movimiento de los diferentes alienígenas entre asteroides cayeron en cuenta de que existían &quot;pozos&quot; en los que se concentraban una gran cantidad de especies distintas. A partir del análisis presencial de varios de ellos pudieron confirmar una noticia tan increíble como preocupante. El cinturón de asteroides no solo era sostén de gran cantidad de especies, sino que en sí mismo componía una especie clave del ecosistema.</p>
            <p>Las aparentes rocas que componian los colores tenian tambien cadenas similares a las cadenas geneticas encontradas en los primeros especimenes vivos. La nomenclatura cientifica duda si llamarlos &quot;organicos&quot;, aunque su relacion con el CO2 y O3 esta muy clara.</p>
            <p>Hace unos dias, en investigacion del pozo 00: el más grande de todo el sistema; se identificaron a soldados de Chipre investigando los biomas. El encuentro del ecosistema más denso en alienígenas conocido por la humanidad hasta ahora tambien represento un encuentro con enemigos. Inmediatamente se tomaron medidas de control con los soldados chipriotas, lo que provoco 1 baja entre los soldados y la baja absoluta de la mision de chipre. Fueron tomadas las muestras necesarias del pozo 00 y se reposiciono a SantaCruz Bolivar en las proximidades.</p>
            <p>Hace 1 semana que se enviaron las alertas de intrusos dentro del perimetro de 1600 km de la nave. Pero debido a la baja densidad de la invasion, el control especifico fue dificil de realizar y los invasores penetraron el terreno.</p>
            <h2>Situacion actual</h2>
            <p>En la nave habían 18 personas de la colonia latina, entre las que se encuentran 4 niños de 6, 5, 3 y 1 año. Hay también una madre gestante del grupo de los militares. Actualmente quedan 13 personas vivas, incluyendo a la madre y niños, dentro del edificio científico. Los militares en la nave son minoritarios, actualmente todos salieron hacia el puente principal tratando de restaurar el control sobre la nave.</p>
            <p>Actualmente en la nave hay 8 soldados de Chipre, pero solo 6 de ellos estan aptos para el combate. Santa Cruz Bolivar se encuentra en la oscuridad total, mantiene las ventanas cerradas, esto es decision chipriota y no producto del protocolo de emergencia, pero Frankie y la nave insistiran en abrir las ventanas cuando los personajes interactuen con computadoras.</p>
            <p>Nuestros heroes ingresan por la escotilla de emergencia I, ubicada debajo de la union de los habitats 1 y 2. En la bahía de soporte vital se ubican 4 soldados de las colonias de Chipre. 2 de ellos estan intentando forzar con un cortador laser el sistema de la puerta de entrada al puerto principal (C,B,A).</p>
            <p>El otro grupo de soldados se encuentra en el 2do puente de control, resguardan a Frankie, el NPC, mientras que intentan hackear la computadora de mando para restaurar los sistemas.</p>
            <p>Los Chipriotas estan afectados tambien por el color, llevan 1 semana en la nave intentando abrir la puerta principal: La comida y el oxigeno se estan acabando. Todos los Chipriotas tienen solo 1D10 puntos en FUE,CON,POD,DES,APA debido a la exposicion con el color. Algunos de ellos estan locos, y debemos tirar 1D6 por cada dia expuestos al color.</p>
            <p>Al entrar los heroes deciden hacia que seccion de la nave ir, pero la puerta del domo principal no puede ser abierta a menos que los encerrados dentro crean que todos los soldados de Chipre fueron derrotados.</p>
            <p>1 hora antes de finalizar la partida, Frankie desaparece y se escabulle hacia la bahia de ingenieria, desde donde sabotea los motores de la nave para alinearse con las donas, desencadenando la emergencia final y el cierre del one-shot.</p>
            <h2>POSIBLES CONCLUSIONES</h2>
            <ul>
            <li>Muere Frankie pero no logra afectar los motores. El puente no sobrevive. Es posible mover a Santa Cruz Bolivar del cinturon de asteroides despues de asesinar a la amalgama de sobrevivientes</li>
            <li>Muere Frankie pero afecta los motores, no es posible mover a Santa Cruz Bolivar del cinturon de Asteroides.</li>
            <li>Todos enloquecen y se unen a los asteroides.</li>
            </ul>
            <h2>COSAS SEGUN UBICACION EN EL MAPA</h2>
            <ul>
            <li>
            <p><strong>Puente</strong>: Usado como espacio de refugio durante la emergencia por invasores. Los niños que han nacido en SCB03, madres gestantes y plana científica menor se encuentran en este área.</p>
            </li>
            <li>
            <p><strong>Navegacion</strong>: Totalmente vacía, sirve como espacio de última defensa.</p>
            </li>
            <li>
            <p><strong>Laboratorio de ciencias</strong>: La puerta al laboratorio de ciencias estará cerrada fuertemente, es imposible de abrir a menos que se desactive el sistema de alarmas de la nave. En el Lab 1 hay computadoras con archivos sobre los análisis más recientes a los especímenes recogidos. Los laboratorios del 3 al 4 contienen especímenes extraídos de diferentes pozos, siendo el del lab 2 el perteneciente al pozo 00.</p>
            </li>
            <li>
            <p><strong>Soporte de Vida</strong>: Sala tomada por los Chipriotas en su intento por pasar al domo principal. No hay nada sobrenatural</p>
            </li>
            <li>
            <p><strong>Sala de computadoras</strong>: Si los investigadores tienen exito con la información en las computadoras podrán enterarse de los patrones de movimiento y las súbitas subidas de Ozono en la nave. Podran encontrar tambien informacion sobre la composicion ARN de las rocas asteroides. Dificultad dificil.</p>
            <ul>
            <li>Entregable CARTESIAN: Mapa Cartesiano de las ubicaciones de los pozos en el cinturon</li>
            </ul>
            </li>
            <li>
            <p><strong>Oficinas</strong>: Las oficinas contienen distintos tipos de archivos con informacion de los niños nacidos en la misión y la posterior adaptación de habitáculos.</p>
            <ul>
            <li>Informacion de las motivaciones para reposicionamiento, acceso con habilidad de archivo/biblioteca.</li>
            <li>Reportes de calidad de aire en los ultimos dias (aumento de o3 desde la entrada al cinturon)</li>
            </ul>
            </li>
            <li>
            <p><strong>Mantenimiento</strong>: Vacio, escobas, ropa sucia, herramientas.</p>
            </li>
            <li>
            <p><strong>Bahía de drones</strong>: Drones con camaras para observar en un radio de 15km fuera de la nave</p>
            </li>
            <li>
            <p><strong>Habitats giratorios</strong></p>
            <ul>
            <li>1 Jardin y comedor
            <ul>
            <li>Plantas dan hacia la ventana, parecen ser especies locales, estan dentro de un vidrio. Si alguien se acerca leera Solanum Tuberosum, lo que revela que es papa comun mutada por la luz</li>
            </ul>
            </li>
            <li>2 Cuarto del Capitan
            <ul>
            <li>Diario del capitan</li>
            </ul>
            </li>
            <li>3 Laboratorio Medico
            <ul>
            <li>Analisis del sujeto en cuarentena</li>
            </ul>
            </li>
            <li>4 Barracas
            <ul>
            <li>Diario de cadete 1</li>
            <li>Soldado Chipriota muerto, expuesto a la luz</li>
            </ul>
            </li>
            <li>5 Esparcimiento
            <ul>
            <li>Cosas de gimnasio, peliculas.</li>
            </ul>
            </li>
            <li>6 Barracas 2
            <ul>
            <li>Diario de cientifico 1</li>
            <li>Soldado Chipriota herido 2</li>
            </ul>
            </li>
            </ul>
            </li>
            <li>
            <p><strong>Comunicaciones</strong></p>
            <ul>
            <li>Radio intergalactica, desactivada hasta restaurar el sistema de la nave</li>
            </ul>
            </li>
            <li>
            <p><strong>Estación lidar</strong></p>
            <ul>
            <li>Radar de Comunicaciones,</li>
            </ul>
            </li>
            <li>
            <p><strong>Propulsores</strong></p>
            <ul>
            <li>Nada, solo el tubo</li>
            </ul>
            </li>
            <li>
            <p><strong>Bahia de ingenieria</strong></p>
            <ul>
            <li>Maquinas para manejar los tubos con radioactivos</li>
            </ul>
            </li>
            <li>
            <p><strong>Planta nuclear</strong></p>
            <ul>
            <li>Motores nucleares</li>
            </ul>
            </li>
            </ul>
            <p>Los experimentos en el laboratorio producen una pérdida de locura igual a 1D8/1D12</p>
            <p>despierta bajo titilantes luces rojas de emergencia del momentáneo desmayo que produce en nuestra biología el shock gravitacional que impulsa los vuelos intergalácticos. La situación de SantaCruz-Bolivar es peor de lo esperado.</p>
            <h3>IDEAPAD</h3>
            <ul>
            <li>Organismo parasitario en un NPC que trata de llevarlos al domo de control. Frankie Figaro, cabo que lleva en la misión 1 año. Como persona no sabe nada de los experimentos que se llevan a cabo en SCB03,</li>
            <li>Los &quot;pozos&quot; asteroides son pozos de hielo seco</li>
            <li>Los personajes se ven obligados a usar ductos de ventilación, algunos terminan en lugares inesperados.</li>
            <li>El computer para arriba queda en lockdown en emergencia, las personas pueden entrar por el drone bay</li>
            <li>STATS DE LA AMALGAMA</li>
            <li>STATS DE Frankie EL NPC</li>
            </ul>

            <table className="border border-collapse w-full">
                <thead >
                    <tr className="bg-slate-800">
                        <th className="border p-2">
                            Fase
                        </th>
                        <th className="border p-2">
                            Descripcion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border">1</th>
                        <th className="text-left border p-2">Se explica a los jugadores la mecánica de pérdida de memoria. Deben construir su caja de recuerdos mientras les explicamos las mecánicas de Call of Cthulhu y definen a sus personajes.</th>
                    </tr>
                    <tr>
                        <th className="border">2</th>
                        <th className="text-left border p-2">Planteamos que los personajes, en el teatro de la mente, hablen a una cámara de video y presenten los contenidos de la caja de recuerdos, estos videos estarán disponibles en el comando de la nave de rescate como arraigo a la realidad.</th>
                    </tr>
                    <tr>
                        <th className="border">3</th>
                        <th className="text-left border p-2">Describimos la llegada al cinturon de asteroides. Primer impacto del color sobre los investigadores al observar la magnitud del cinturon de asteroides y el tamaño de SCB03.</th>
                    </tr>
                    <tr>
                        <th className="border">4</th>
                        <th className="text-left border p-2">Horror humano, pelea con 4 soldados chipriotas, posible pérdida de vidas humanas entre los 6 soldados de acompañamiento.</th>
                    </tr>
                    <tr>
                        <th className="border">5</th>
                        <th className="text-left border p-2">Situación general y no confidencial de la nave. Los refugiados piden ayuda pero prefieren no compartir información de la nave. Pueden ser dificilmente convencidos y facilmente intimidados, pero no pueden abrir la puerta sin la restauración del sistema</th>
                    </tr>
                    <tr>
                        <th className="border">6</th>
                        <th className="text-left border">Recoleccion de pistas, se observan algunos cadaveres y gente viva en y fuera de la luz. Reciben disparos a lo lejos y si responden entonces los soldados enemigos huyen hacia el puente secundario.</th>
                    </tr>
                    <tr>
                        <th className="border">7</th>
                        <th className="text-left border">Encuentro con el npc realmente afectado por el color. Frankie insistira en rescatar al domo</th>
                    </tr>
                    <tr>
                        <th className="border">8</th>
                        <th className="text-left border">Tormenta de luz final, provocando la transformacion total de todo lo que toca. Frankie insistira en abrir el domo, incrementando al maximo la exposicion a la luz</th>
                    </tr>
                    <tr>
                        <th className="border">9</th>
                        <th className="text-left border">Pelea con Frankie o con Frankie y la amalgama. Si la amalgama es enfrentada por si sola entonces es una victoria que simplemente sera narrada sin lanzar dados de combate (si de cordura)</th>
                    </tr>
                    <tr>
                        <th className="border">10</th>
                        <th className="text-left border">Desactivacion de la sesion, comentarios finales y explicaciones fuera de rol</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default App;
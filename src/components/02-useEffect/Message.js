import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const {x , y} = coords;

    useEffect(() => {                 
        const mouseMove = (e) => {
             const coords = { x: e.x, y: e.y};
             setCoords(coords);
            //  console.log(coors);
        }

        window.addEventListener('mousemove', mouseMove);

        // window.addEventListener('mousemove', (e) => {            
        //     const coors = { x: e.x, y: e.y};
        //     console.log(coors);
        // });


        console.log('Componente Montado');
        return () => { //Clear
            console.log('Componente Desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    return (
        <>
           <h1>Eres Genial</h1>
           <p>
               x: { x } y: { y}
           </p>
        </>
    )
}

export default Message

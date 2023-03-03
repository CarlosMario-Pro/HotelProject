import React from 'react';
import Link from "next/link";
import RoomSelect from "../roomSelect/index.js";


export default function RoomMultiple () {

  return (
    <div>
      <div>
        <h1>Múltiple</h1>
        <p>Habitación con dos camas dobles y una cama sencilla.</p>
        <img />
        <h3>Twin Superior</h3>
        <p>- Bebida de bienvenida.</p>
        <p>- Wifi.</p>
        <p>- Periódico a la habitación (solicitud previa).</p>
        <p>- Parqueadero gratuito.</p>
      </div>

      <div>
          <RoomSelect />
      </div>

      <Link href="/bookings">Reserva ahora</Link>
    </div>
  );
};
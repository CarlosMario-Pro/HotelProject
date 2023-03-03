import React from 'react';
import Link from "next/link";
import RoomSelect from "../roomSelect/index.js";


export default function RoomDoubleStandard () {


  return (
    <div>
      <div>
        <h1>Estándar Doble</h1>
        <img />
        <h3>Servicios</h3>
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
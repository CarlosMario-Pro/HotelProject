import React from 'react';
// import { Layout } from '@/components/Layout';


export default function Contact () {

    return (
        <div>
            <h1>Contacto</h1>
            <p>Por favor, déjanos tus datos y escribe en qué podemos ayudarte, estaremos encantados de atenderte. También puedes llamarnos a nuestras líneas de atención.</p>
            <div>
                <div>
                    <label>Nombre</label>
                    <imput type='text'></imput>
                </div>
                <div>
                    <label>E-mail</label>
                    <imput type='text'></imput>
                </div>
                <div>
                    <label>Comentarios</label>
                    <textarea type='text'></textarea>
                </div>
                <button>Enviar</button>
            </div>

        </div>
    );
};
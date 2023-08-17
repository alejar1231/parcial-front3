import React, { useState } from 'react';
import Card from "./Card";
import '../App.css';

const Formulario = () => {
    const [banda, setBanda] = useState("");
    const [cancion, setCancion] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cancion.trim().length > 3 && banda.trim().length > 2) {
            setEnviado(true);
            setError(false);
        } else {
            setError(true);
            setEnviado(false);
        }
    };

    function handleChangeBanda(event) {
        setBanda(event.target.value);
    }
    
    function handleChangeCancion(event) {
        setCancion(event.target.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="container_input">
                <h3>Dime tu banda y canción favorita</h3>
                <label>Banda:</label>
                <input
                    type="text"
                    value={banda}
                    onChange={handleChangeBanda}
                />
                <label>Canción:</label>
                <input
                    type="text"
                    value={cancion}
                    onChange={handleChangeCancion}
                />
                <button type="submit">Enviar</button>
                {error && (
                    <h3 style={{ color: 'red' }}>
                        Por favor verifica que la información sea correcta
                    </h3>
                )}
            </div>
            <div>
                {enviado && <Card banda={banda} cancion={cancion} />}
            </div>
        </form>
    );
};

export default Formulario;

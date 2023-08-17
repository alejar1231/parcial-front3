//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div className="class-card">
        <h1>Genial!!</h1>
        <p>Tu cancion favorita es {props.cancion}</p>
        <p>De la banda {props.banda}</p>
    </div>
  )
}

export default Card;

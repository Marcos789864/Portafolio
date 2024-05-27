

const Contacto = () =>
{
    return(

<>
        <h2>Contacto</h2>
        <div className="ContainerCentrado">
        <div class="container2">
        <form action="#" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required></input>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

            <input type="submit" value="Enviar"></input>
        </form>
        </div>
        <div className="Container3">
            <p>Sigamos en contacto!</p>
            <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
            <p>¡Gracias por visitar mi sitio web!</p>
            <p>Email: delfrancochili@gmail.com</p>
        </div>
    </div>
    </>
    )
    
}

export default Contacto  
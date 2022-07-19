import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">

            <div>
                <span role="button" tabindex="0">CONTACTO</span>
                <form action method="">
                    <p>Si desea recibir nuestras promociones, solicitar presupuesto, dejanos tus datos y en breve nos
                        comunicaremos contigo</p>

                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Celular" />
                    <input type="text" placeholder="E-mail" />
                    <input type="submit" value="Enviar" />
                </form>
             
            </div>
        </main>
    );
}
export default ContactoPage;
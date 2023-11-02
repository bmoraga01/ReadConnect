import { Link } from "react-router-dom";

export function AfterRegister() {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center mt-10">
                            <h1 className="mb-3">¡Activa tu cuenta ahora!</h1>
                            <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">Antes de que puedas empezar a usar nuestro servicio, por favor verifica tu correo electrónico. Solo tienes que hacer clic en el enlace de confirmación que te hemos enviado por email.</p>
                            <Link to="/" className="btn btn-primary rounded-pill">Ir al Inicio</Link>
                        </div>
                        {/* <!-- /column --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
            {/* <!-- /section --> */}
        </>
    )
}
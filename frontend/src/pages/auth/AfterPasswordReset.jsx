import { Link } from "react-router-dom";

export function AfterPasswordReset() {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center mt-10">
                            <h1 className="mb-3">Verifica tu correo antes de restablecer tu contraseña</h1>
                            <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">Para garantizar la seguridad de tu cuenta, por favor verifica tu dirección de correo electrónico antes de restablecer tu contraseña. Te hemos enviado un correo de confirmación.</p>
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
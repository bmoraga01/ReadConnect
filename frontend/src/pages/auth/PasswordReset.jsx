import { Link, useNavigate } from "react-router-dom";
import bgImage from '../../assets/img/photos/tm3.jpg'
import { Field, Form, Formik } from "formik";
import { resetPassword } from "../../api/auth.api";

export function PasswordReset() {

    const navigate = useNavigate()

    const initialValues = {
        email: '',
    }

    const validate = values => {
        const errors = {}

        if( !values.email ) {
            errors.email = 'Requerido';
        }

        return errors
    }

    const onSubmit = async values => {
        const response = await resetPassword(values.email)

        if( response ) {
            navigate('/restablecer-contraseña/confirmar')
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <div className="content-wrapper">
                <section className="wrapper bg-dark text-white">
                    <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="display-1 text-white mb-3">Restablecer Contraseña</h1>
                                <nav className="d-inline-block" aria-label="breadcrumb">
                                    <ol className="breadcrumb text-white">
                                        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Restablecer Contraseña</li>
                                    </ol>
                                </nav>
                                {/* <!-- /nav --> */}
                            </div>
                            {/* <!-- /column --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>
                {/* <!-- /section --> */}
                <section className="wrapper bg-light">
                    <div className="container pb-14 pb-md-16">
                        <div className="row">
                            <div className="col mt-n19">
                                <div className="card shadow-lg">
                                    <div className="row gx-0 text-center">
                                        <div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block" style={{ backgroundImage: `url("${bgImage}")` }} data-image-src="../../assets/img/photos/tm3.jpg"></div>
                                        {/* <!--/column --> */}
                                        <div className="col-lg-6">
                                            <div className="p-10 p-md-11 p-lg-13">
                                                <h2 className="mb-3 text-start">Contraseña</h2>
                                                <p className="lead mb-6 text-start">Ingrece su correo electrónico para restablecer su contraseña.</p>
                                                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                                                    {({ errors, touched }) => (
                                                        <Form className="text-start mb-3">
                                                            <div className="form-floating mb-4">
                                                                <Field type="email" name="email" id="loginEmail" className={ `form-control` } placeholder="Email" />
                                                                <label htmlFor="loginEmail">Correo</label>
                                                                { errors.email && touched.email ? <div style={{ color: '#C92A2A' }}>{errors.email}</div> : null }
                                                            </div>
                                                            <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">Restablecer Contraseña</button>
                                                        </Form>
                                                    )}
                                                </Formik>
                                                {/* <!-- /form --> */}
                                                <p className="mb-1"><Link to="/iniciar-sesion" className="hover">Iniciar Sesión</Link></p>
                                                <p className="mb-0">No tienes cuenta? <Link to="/registro" className="hover">Registrate</Link></p>
                                                {/* <div className="divider-icon my-4">or</div>
                                                <nav className="nav social justify-content-center text-center">
                                                    <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google"></i></a>
                                                    <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f"></i></a>
                                                    <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter"></i></a>
                                                </nav> */}
                                                {/* <!--/.social --> */}
                                            </div>
                                            {/* <!--/div --> */}
                                        </div>
                                        {/* <!--/column --> */}
                                    </div>
                                    {/* <!--/.row --> */}
                                </div>
                                {/* <!-- /.card --> */}
                            </div>
                            {/* <!-- /column --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>
                {/* <!-- /section --> */}
            </div>
        </>
    )
}
import { Field, Form, Formik } from "formik"
import { Link, useNavigate, useParams } from "react-router-dom"
import bgImage from '../../assets/img/photos/tm3.jpg'
import { resetPasswordConfirm } from "../../api/auth.api"

export function PasswordResetConfirm() {

    const navigate = useNavigate()
    const params = useParams()

    const initialValues = {
        new_password: '',
        re_new_password: '',
    }

    const validate = values => {
        const errors = {}

        if( !values.new_password ) {
            errors.new_password = 'Requerido'
        }

        if( !values.re_new_password ) {
            errors.re_new_password = 'Requerido'
        } else if( values.new_password !== values.re_new_password ) {
            errors.re_new_password = 'Las contraseñas no coinciden'
            errors.new_password = 'Las contraseñas no coinciden'
        }

        return errors
    }

    const onSubmit = async values => {
        const response = await resetPasswordConfirm({ ...values, ...params })

        if( response ) {
            navigate('/iniciar-sesion')
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
                                                            <div className="form-floating password-field mb-4">
                                                                <Field type="password" name="new_password" id="loginPassword" className={ `form-control` } placeholder="Password" />
                                                                <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                                                <label htmlFor="loginPassword">Nueva Contraseña</label>
                                                                { errors.new_password && touched.new_password ? <div style={{ color: '#C92A2A' }}>{errors.new_password}</div> : null }
                                                            </div>
                                                            <div className="form-floating password-field mb-4">
                                                                <Field type="password" name="re_new_password" id="loginRePassword" className={ `form-control` } placeholder="Password" />
                                                                <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                                                <label htmlFor="loginRePassword">Confirmar Nueva Contraseña</label>
                                                                { errors.re_new_password && touched.re_new_password ? <div style={{ color: '#C92A2A' }}>{errors.re_new_password}</div> : null }
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
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { registerApi } from "../../api/auth.api";

import bgImgae from '../../assets/img/photos/tm3.jpg'
import { useState } from "react";

export function Register() {

    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    }

    const validate = values => {
        const errors = {}

        if( !values.first_name ) {
            errors.first_name = 'Requerido'
        }

        if( !values.last_name ) {
            errors.last_name = 'Requerido'
        }

        if( !values.email ) {
            errors.email = "Requerido"
        } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
            errors.email = 'Correo Invalido'
        }

        if( !values.password ) {
            errors.password = 'Requerido'
        }

        if( !values.re_password ) {
            errors.re_password = 'Requerido'
        } else if( values.password !== values.re_password ) {
            errors.re_password = 'Las contraseñas no coinciden.'
            errors.password = 'Las contraseñas no coinciden.'
        }

        return errors
    }

    const onSubmit = async values => {
        const response = await registerApi(values)
        if( response ) {
            navigate('/registro/confirmar')
        } else {
            setErrorMsg("Ya existe un usuario con este correo")
        }
    }

    return (
        <>
            <section className="wrapper bg-dark text-white">
                <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 text-white mb-3">Registro</h1>
                            <nav className="d-inline-block" aria-label="breadcrumb">
                                <ol className="breadcrumb text-white">
                                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Registro</li>
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
                                    <div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block" style={{ backgroundImage: `url("${ bgImgae }")` }} data-image-src="../../assets/img/photos/tm3.jpg"></div>
                                    {/* <!--/column --> */}
                                    <div className="col-lg-6">
                                        <div className="p-10 p-md-11 p-lg-13">
                                            <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
                                            <p className="lead mb-6 text-start">Registration takes less than a minute.</p>

                                            { errorMsg ? 
                                                <div className="alert alert-danger alert-icon" role="alert">
                                                    <i className="uil uil-times-circle"></i> { errorMsg }.
                                                </div> : null
                                            }

                                            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} >
                                                {({ errors, touched }) => (
                                                    <Form className="text-start mb-3">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-floating mb-4">
                                                                    <Field type="text" name="first_name" className="form-control" placeholder="Nombre" id="loginFirst" />
                                                                    <label htmlFor="loginFirst">Nombre</label>
                                                                    { errors.first_name && touched.first_name ? <div style={{ color: '#C92A2A' }}>{errors.first_name}</div> : null }
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-floating mb-4">
                                                                    <Field type="text" name="last_name" className="form-control" placeholder="Nombre" id="loginLast" />
                                                                    <label htmlFor="loginLast">Apellido</label>
                                                                    { errors.last_name && touched.last_name ? <div style={{ color: '#C92A2A' }}>{errors.last_name}</div> : null }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-floating mb-4">
                                                            <Field type="email" name="email" className="form-control" placeholder="Correo" id="loginEmail" />
                                                            <label htmlFor="loginEmail">Email</label>
                                                            { errors.email && touched.email ? <div style={{ color: '#C92A2A' }}>{errors.email}</div> : null }
                                                        </div>
                                                        <div className="form-floating password-field mb-4">
                                                            <Field type="password" name="password" className="form-control" placeholder="Contraseña" id="loginPassword" />
                                                            <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                                            <label htmlFor="loginPassword">Contraseña</label>
                                                            { errors.password && touched.password ? <div style={{ color: '#C92A2A' }}>{errors.password}</div> : null }
                                                        </div>
                                                        <div className="form-floating password-field mb-4">
                                                            <Field type="password" name="re_password" className="form-control" placeholder="Confirme Contraseña" id="loginPasswordConfirm" />
                                                            <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                                            <label htmlFor="loginPasswordConfirm">Confirme Contraseña</label>
                                                            { errors.re_password && touched.re_password ? <div style={{ color: '#C92A2A' }}>{errors.re_password}</div> : null }
                                                        </div>
                                                        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">Registrarme</button>
                                                    </Form>
                                                )}
                                            </Formik>
                                            {/* <!-- /form --> */}
                                            <p className="mb-0">Ya tienes cuenta? <Link to="/iniciar-sesion" className="hover">Iniciar Sesión</Link></p>
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
        </>
    )
}
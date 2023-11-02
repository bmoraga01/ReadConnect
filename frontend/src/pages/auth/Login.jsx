import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik'

import bgImage from '../../assets/img/photos/tm3.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginApi, getUserApi } from "../../api/auth.api";
import { authLogin } from "../../store/slices/auth/authSlice";

export function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.auth.isLogged)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect( () => {
        if( isLogged ) {
            navigate("/")
        }
    }, [isLogged, navigate] )

    const initialValues = {
        email: '',
        password: '',
    }

    const validate = values => {
        const errors = {}

        if( !values.email ) {
            errors.email = "Requerido"
        } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
            errors.email = 'Correo Invalido'
        }

        if( !values.password ) {
            errors.password = "Requerido"
        }

        return errors
    }

    const onSubmit = async values => {
        const response = await loginApi(values.email, values.password)

        if( response.ok ) {
            const userData = await getUserApi(response.access)
            const data = { user: `${ userData.first_name } ${ userData.last_name }`, id: userData.id, access: response.access, refresh: response.refresh }
            dispatch(authLogin(data))
        } else {
            setErrorMsg('Usuario o contraseña incorrectos')
        }
    }

    return (
        <div className="content-wrapper">
            <section className="wrapper bg-dark text-white">
                <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 text-white mb-3">Iniciar Sesión</h1>
                            <nav className="d-inline-block" aria-label="breadcrumb">
                                <ol className="breadcrumb text-white">
                                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Iniciar Sesión</li>
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
                                            <h2 className="mb-3 text-start">Bienvenido</h2>
                                            <p className="lead mb-6 text-start">Complete su correo electrónico y contraseña para iniciar sesión.</p>
                                            
                                            { errorMsg ? 
                                                <div className="alert alert-danger alert-icon" role="alert">
                                                    <i className="uil uil-times-circle"></i> { errorMsg }.
                                                </div> : null
                                            }

                                            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                                                {({ errors, touched }) => (
                                                    <Form className="text-start mb-3">
                                                        <div className="form-floating mb-4">
                                                            <Field type="email" name="email" id="loginEmail" className={ `form-control` } placeholder="Email" />
                                                            <label htmlFor="loginEmail">Correo</label>
                                                            { errors.email && touched.email ? <div style={{ color: '#C92A2A' }}>{errors.email}</div> : null }
                                                        </div>
                                                        <div className="form-floating password-field mb-4">
                                                            <Field type="password" name="password" id="loginPassword" className={ `form-control` } placeholder="Password" />
                                                            <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                                            <label htmlFor="loginPassword">Contraseña</label>
                                                            { errors.password && touched.password ? <div style={{ color: '#C92A2A' }}>{errors.password}</div> : null }
                                                        </div>
                                                        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">Iniciar Sesión</button>
                                                    </Form>
                                                )}
                                            </Formik>
                                            {/* <!-- /form --> */}
                                            <p className="mb-1"><Link to="/restablecer-contraseña" className="hover">Olvidó su contraseña?</Link></p>
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
    )
}
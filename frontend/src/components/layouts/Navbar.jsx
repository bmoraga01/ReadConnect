import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import logo from '../../assets/img/logo.png'
import logo2x from '../../assets/img/logo@2x.png'
import logoLight from '../../assets/img/logo-light.png'
import logoLight2x from '../../assets/img/logo-light@2x.png'
import bgNav from '../../assets/img/photos/bg3.jpg'
import { useState } from "react";

export function Navbar() {
    const [responsiveMenu, setResponsiveMenu] = useState(false)

    const auth = useSelector(state => state.auth)

    console.log(auth);

    const handleResponsiveMenu = () => {
        setResponsiveMenu(!responsiveMenu)
    }

    return (
        <>
            <header className="wrapper image-wrapper bg-image pb-1" style={{ backgroundImage: `url("${bgNav}")` }} >
                <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark">
                    <div className="container flex-lg-row flex-nowrap align-items-center">
                        <div className="navbar-brand w-100">
                            <Link href="/">
                                <img className="logo-dark" src={ logo } srcSet={ `${ logo2x } 2x` } alt="" />
                                <img className="logo-light" src={ logoLight } srcSet={ `${ logoLight2x } 2x` } alt="" />
                            </Link>
                        </div>
                        <div className={`navbar-collapse offcanvas offcanvas-nav offcanvas-start ${ responsiveMenu ? 'show' : null }`} aria-modal="true" role="dialog">
                            <div className="offcanvas-header d-lg-none">
                                <Link to="/"><img src={ logoLight } srcSet={ `${ logoLight2x } 2x` } alt="" /></Link>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleResponsiveMenu}></button>
                            </div>
                            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link to="/libros" className="nav-link">Libros</Link></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="dropdown-item" href="#">Action</a></li>
                                            <li className="dropdown dropdown-submenu dropend">
                                                <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown dropdown-submenu dropend">
                                                        <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                                                        <ul className="dropdown-menu">
                                                            <li className="nav-item"><a className="dropdown-item" href="#">Action</a></li>
                                                            <li className="nav-item"><a className="dropdown-item" href="#">Another Action</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">Action</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="#">Another Action</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a className="dropdown-item" href="#">Another Action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown dropdown-mega">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mega Menu</a>
                                        <ul className="dropdown-menu mega-menu">
                                            <li className="mega-menu-content">
                                                <div className="row gx-0 gx-lg-3">
                                                    <div className="col-lg-6">
                                                        <h6 className="dropdown-header">One</h6>
                                                        <div className="row gx-0">
                                                            <div className="col-lg-6">
                                                                <ul className="list-unstyled">
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!--/column --> */}
                                                            <div className="col-lg-6">
                                                                <ul className="list-unstyled">
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!--/column --> */}
                                                        </div>
                                                        {/* <!--/.row --> */}
                                                    </div>
                                                    {/* <!--/column --> */}
                                                    <div className="col-lg-3">
                                                        <h6 className="dropdown-header">Two</h6>
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!--/column --> */}
                                                    <div className="col-lg-3">
                                                        <h6 className="dropdown-header">Three</h6>
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                            <li><a className="dropdown-item" href="#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!--/column --> */}
                                                </div>
                                                {/* <!--/.row --> */}
                                            </li>
                                            {/* <!--/.mega-menu-content--> */}
                                        </ul>
                                        {/* <!--/.dropdown-menu --> */}
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown Large</a>
                                        <div className="dropdown-menu dropdown-lg">
                                            <div className="dropdown-lg-content">
                                                <div>
                                                    <h6 className="dropdown-header">One</h6>
                                                    <ul className="list-unstyled">
                                                        <li><a className="dropdown-item" href="#">Link</a></li>
                                                        <li><a className="dropdown-item" href="#">Link</a></li>
                                                        <li><a className="dropdown-item" href="#">Another Link</a></li>
                                                    </ul>
                                                </div>
                                                {/* <!-- /.column --> */}
                                                <div>
                                                    <h6 className="dropdown-header">Two</h6>
                                                    <ul className="list-unstyled">
                                                        <li><a className="dropdown-item" href="#">Link</a></li>
                                                        <li><a className="dropdown-item" href="#">Link</a></li>
                                                        <li><a className="dropdown-item" href="#">Another Link</a></li>
                                                    </ul>
                                                </div>
                                                {/* <!-- /.column --> */}
                                            </div>
                                            {/* <!-- /auto-column --> */}
                                        </div>
                                    </li>
                                </ul>
                                {/* <!-- /.navbar-nav --> */}
                                <div className="d-lg-none mt-auto pt-6 pb-6 order-4">
                                    <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
                                    <br /> 00 (123) 456 78 90 <br />
                                    <nav className="nav social social-white mt-4">
                                        <a href="#"><i className="uil uil-twitter"></i></a>
                                        <a href="#"><i className="uil uil-facebook-f"></i></a>
                                        <a href="#"><i className="uil uil-dribbble"></i></a>
                                        <a href="#"><i className="uil uil-instagram"></i></a>
                                        <a href="#"><i className="uil uil-youtube"></i></a>
                                    </nav>
                                    {/* <!-- /.social --> */}
                                </div>
                                {/* <!-- /offcanvas-nav-other --> */}
                            </div>
                            {/* <!-- /.offcanvas-body --> */}
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                        <div className="navbar-other w-100 d-flex ms-auto">
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                                { auth.isLogged ?
                                <li className="nav-item dropdown language-select text-uppercase">
                                    <a className="nav-link dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">En</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="#">En</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="#">De</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="#">Es</a></li>
                                    </ul>
                                </li>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to="/iniciar-sesion" className="btn btn-sm btn-white rounded-pill">Iniciar Sesión</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/registro" className="btn btn-sm btn-outline-ash rounded-pill">Registrarse</Link>
                                    </li>
                                </>
                                }
                                <li className="nav-item d-lg-none">
                                    <button className="hamburger offcanvas-nav-btn" onClick={handleResponsiveMenu}><span></span></button>
                                </li>
                            </ul>
                            {/* <!-- /.navbar-nav --> */}
                        </div>
                        {/* <!-- /.navbar-other --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </nav>
                {/* <!-- /.navbar --> */}
            </header>
        </>
    )
}
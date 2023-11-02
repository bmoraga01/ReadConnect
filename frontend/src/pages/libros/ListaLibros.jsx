import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listaLibrosApi } from "../../api/libros.api";
import { FiltroLibros } from "../../components/libros/FiltroLibros";

const Paginador = ({ pageCount, changePage }) => {
    return (
        <>
            <ul className="pagination">
                { pageCount > 1 ?
                    <li className="page-item">
                        <button className="page-link" onClick={() => changePage(pageCount - 1)} aria-label="Previous">
                            <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                        </button>
                    </li> : null
                }
                <li className="page-item active"><button className="page-link">{ pageCount }</button></li>
                <li className="page-item"><button className="page-link" onClick={() => changePage(pageCount + 1)}>{ pageCount + 1 }</button></li>
                <li className="page-item"><button className="page-link" onClick={() => changePage(pageCount + 2)}>{ pageCount +2 }</button></li>
                <li className="page-item">
                    <button className="page-link" onClick={() => changePage(pageCount + 1)} aria-label="Next">
                        <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                    </button>
                </li>
            </ul>
        </>
    )
}

export function ListaLibros() {

    const [page, setPage] = useState(1)
    const [libros, setLibros] = useState([])

    const cargaLibros = async (page) => {
        const data = await listaLibrosApi(page)
        setLibros(data)
    }

    const handleChangePage = (changePage) => {
        setPage(changePage)
        cargaLibros(changePage)
    }

    useEffect(() => {
        if (libros.length === 0) {
            cargaLibros(page)
        }
    }, [libros, page])

    return (
        <>
            <section className="wrapper bg-gray">
                <div className="container py-3 py-md-5">
                    <nav className="d-inline-block" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Libros</li>
                        </ol>
                    </nav>
                    {/* <!-- /nav --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
            {/* <!-- /section --> */}
            <section className="wrapper bg-light">
                <div className="container pb-14 pb-md-16 pt-12">
                    <div className="row gy-10">
                        <div className="col-lg-9 order-lg-2">
                            <div className="row align-items-center mb-10 position-relative zindex-1">
                                <div className="col-md-7 col-xl-8 pe-xl-20">
                                    <h2 className="display-6 mb-1">Libros Amazon</h2>
                                    <p className="mb-0 text-muted">Mostrando 1–9 Resultados</p>
                                </div>
                                {/* <!--/column --> */}
                                <div className="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
                                    <div className="form-select-wrapper">
                                    <select className="form-select">
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="newness">Sort by newness</option>
                                        <option value="price: low to high">Sort by price: low to high</option>
                                        <option value="price: high to low">Sort by price: high to low</option>
                                    </select>
                                    </div>
                                    {/* <!--/.form-select-wrapper --> */}
                                </div>
                                {/* <!--/column --> */}
                            </div>
                            {/* <!--/.row --> */}
                            <div className="grid grid-view projects-masonry shop mb-13">
                                <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                                    {libros.map( libro => (
                                        <div className="project item col-md-6 col-xl-4" key={libro.id}>
                                            <figure className="rounded mb-6">
                                                <img src={ libro.imagen } srcSet={ libro.imagen } alt="" />
                                                <Link to={ `/libros/${ libro.id }` } className="item-like" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></Link>
                                            </figure>
                                            <div className="post-header">
                                                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                                    <div className="post-category text-ash mb-0">Libro</div>
                                                    { libro.prom_ranking > 0 ? <span className={ `ratings ${ libro.prom_ranking === 1 ? 'one' : libro.prom_ranking === 2 ? 'two' : libro.prom_ranking === 3 ? 'three' : libro.prom_ranking === 4 ? 'four' : libro.prom_ranking === 5 ? 'five' : null }` }></span> : '' }
                                                </div>
                                                <h2 className="post-title h3 fs-22"><Link to={ `/libros/${ libro.id }` } className="link-dark">{ libro.titulo }</Link></h2>
                                                <p className="price">{ libro.descripcion_corta ? libro.descripcion_corta.length > 50 ? `${libro.descripcion_corta.slice(0, 50)}...` : '' : '' }</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <!-- /.row --> */}
                            </div>
                            {/* <!-- /.grid --> */}
                            <nav className="d-flex" aria-label="pagination">
                                <Paginador pageCount={ page } changePage={handleChangePage} />
                                {/* <!-- /.pagination --> */}
                            </nav>
                            {/* <!-- /nav --> */}
                        </div>
                        {/* <!-- /column --> */}
                        <FiltroLibros />
                        {/* <!-- /column .sidebar --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
            {/* <!-- /section --> */}
        </>
    )
}


/*

<div className="project item col-md-6 col-xl-4">
    <figure className="rounded mb-6">
        <img src={ item01 } srcSet="./assets/img/photos/sh1@2x.jpg 2x" alt="" />
        <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart"></i></a>
        <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></a>
        <a href="#" className="item-cart"><i className="uil uil-shopping-bag"></i> Add to Cart</a>
        <span className="avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{ top: '1rem', left: '1rem' }}><span>Sale!</span></span>
    </figure>
    <div className="post-header">
        <div className="d-flex flex-row align-items-center justify-content-between mb-2">
            <div className="post-category text-ash mb-0">Shoes</div>
            <span className="ratings one"></span>
        </div>
        <h2 className="post-title h3 fs-22"><a href="./shop-product.html" className="link-dark">Nike Air Sneakers</a></h2>
        <p className="price"><del><span className="amount">$55.00</span></del> <ins><span className="amount">$45.00</span></ins></p>
    </div>
    </div>
    <div className="project item col-md-6 col-xl-4">
        <figure className="rounded mb-6">
            <img src={ item02 } srcSet="./assets/img/photos/sh2@2x.jpg 2x" alt="" />
            <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart"></i></a>
            <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></a>
            <a href="#" className="item-cart"><i className="uil uil-shopping-bag"></i> Add to Cart</a>
        </figure>
        <div className="post-header">
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                <div className="post-category text-ash mb-0">Electronics</div>
                <span className="ratings two"></span>
            </div>
            <h2 className="post-title h3 fs-22"><a href="./shop-product.html" className="link-dark">Apple Watch</a></h2>
            <p className="price"><span className="amount">$55.00</span></p>
        </div>
    </div>
    <div className="project item col-md-6 col-xl-4">
        <figure className="rounded mb-6">
            <img src={ item03 } srcSet="./assets/img/photos/sh3@2x.jpg 2x" alt="" />
            <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart"></i></a>
            <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></a>
            <a href="#" className="item-cart"><i className="uil uil-shopping-bag"></i> Add to Cart</a>
            <span className="avatar bg-aqua text-white w-10 h-10 position-absolute text-uppercase fs-13" style={{ top: '1rem', left: '1rem' }}><span>New!</span></span>
        </figure>
        <div className="post-header">
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                <div className="post-category text-ash mb-0">Electronics</div>
                <span className="ratings three"></span>
            </div>
            <h2 className="post-title h3 fs-22"><a href="./shop-product.html" className="link-dark">Headphones</a></h2>
            <p className="price"><span className="amount">$55.00</span></p>
        </div>
    </div>
    <div className="project item col-md-6 col-xl-4">
        <figure className="rounded mb-6">
            <img src={ item04 } srcSet="./assets/img/photos/sh4@2x.jpg 2x" alt="" />
            <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart"></i></a>
            <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></a>
            <a href="#" className="item-cart"><i className="uil uil-shopping-bag"></i> Add to Cart</a>
        </figure>
        <div className="post-header">
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                <div className="post-category text-ash mb-0">Shoes</div>
                <span className="ratings four"></span>
            </div>
            <h2 className="post-title h3 fs-22"><a href="./shop-product.html" className="link-dark">Colorful Sneakers</a></h2>
            <p className="price"><span className="amount">$55.00</span></p>
        </div>
    </div>
    <div className="project item col-md-6 col-xl-4">
        <figure className="rounded mb-6">
            <img src={ item05 } srcSet="./assets/img/photos/sh4@2x.jpg 2x" alt="" />
            <a className="item-like" href="#" data-bs-toggle="white-tooltip" title="Add to wishlist"><i className="uil uil-heart"></i></a>
            <a className="item-view" href="#" data-bs-toggle="white-tooltip" title="Quick view"><i className="uil uil-eye"></i></a>
            <a href="#" className="item-cart"><i className="uil uil-shopping-bag"></i> Add to Cart</a>
        </figure>
        <div className="post-header">
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                <div className="post-category text-ash mb-0">Shoes</div>
                <span className="ratings five"></span>
            </div>
            <h2 className="post-title h3 fs-22"><a href="./shop-product.html" className="link-dark">Colorful Sneakers</a></h2>
            <p className="price"><span className="amount">$55.00</span></p>
        </div>
    </div>


*/
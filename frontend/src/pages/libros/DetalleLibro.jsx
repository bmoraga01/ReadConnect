import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { detalleLibroApi } from "../../api/libros.api"

export function DetalleLibro() {
    const params = useParams()
    const [libro, setLibro] = useState(null)
    const navigate = useNavigate()

    console.log(libro);

    useEffect(() => {

        const consultaLibro = async () => {
            const getLibro = await detalleLibroApi(params.id)

            if( getLibro ) {
                setLibro(getLibro)
            } else {
                navigate('/libros')
            }
        }

        if( !libro ) {
            consultaLibro()
        }
    }, [libro, params, navigate])

    return (
        <>
            <section className="wrapper bg-gray">
                <div className="container py-3 py-md-5">
                    <nav className="d-inline-block" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                            <li className="breadcrumb-item"><Link to="/libros">Libros</Link></li>
                            <li className="breadcrumb-item active text-muted">{ params.id }</li>
                            <li className="breadcrumb-item active text-muted" aria-current="page">{ libro ? libro.titulo : '...' }</li>
                        </ol>
                    </nav>
                    {/* <!-- /nav --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
            {/* <!-- /section --> */}
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-md-8 gx-xl-12 gy-8">
                        <div className="col-lg-6">
                            <div className="swiper-container swiper-thumbs-container" data-margin="10" data-dots="false" data-nav="true" data-thumbs="true">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <figure className="rounded"><img src={ libro ? libro.imagen : '' } srcSet={ libro ? libro.imagen : '' } alt="" /><a className="item-link" href={ libro ? libro.imagen : '' } data-glightbox data-gallery="product-group" target="blank"><i className="uil uil-focus-add"></i></a></figure>
                                        </div>
                                    </div>
                                    {/* <!--/.swiper-wrapper --> */}
                                </div>
                                {/* <!-- /.swiper --> */}
                            </div>
                            {/* <!-- /.swiper-container --> */}
                        </div>
                        {/* <!-- /column --> */}
                        <div className="col-lg-6">
                            <div className="post-header mb-5">
                            <h2 className="post-title display-5">{ libro ? libro.titulo : '' }</h2>
                            <a className="link-body ratings-wrapper">{ libro ? <>{ libro.prom_ranking > 0 ? <span className={ `ratings ${ libro.prom_ranking === 1 ? 'one' : libro.prom_ranking === 2 ? 'two' : libro.prom_ranking === 3 ? 'three' : libro.prom_ranking === 4 ? 'four' : libro.prom_ranking === 5 ? 'five' : null }` }></span> : '' }<span>({ libro.rankings.length } Reviews)</span></> : '' }</a>
                        </div>
                        {/* <!-- /.post-header --> */}

                        <legend className="h6 fs-16 text-body mb-3">Categorias:</legend>
                        <div className="row mb-3">
                            { libro ? libro.categorias.map( categoria => (
                                    <>
                                        <div className="col-lg-3">
                                            <button className="btn btn-soft-ash btn-sm rounded-pill">{ categoria.categoria }</button>
                                        </div>
                                    </>
                                ) ) : null }
                        </div>

                        <legend className="h6 fs-16 text-body mb-3">Autores:</legend>
                        <div className="row mb-3">
                            { libro ? libro.autores.map( autor => (
                                    <>
                                        <div className="col-lg-3">
                                            <button className="btn btn-soft-ash btn-sm rounded-pill">{ autor.nombre }</button>
                                        </div>
                                    </>
                                ) ) : null }
                        </div>
                        
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <ul className="nav nav-tabs nav-tabs-basic mt-12">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab">Detalles</a>
                        </li>
                    </ul>
                    {/* <!-- /.nav-tabs --> */}
                    <div className="tab-content mt-0 mt-md-5">
                        <div className="tab-pane fade show active" id="tab1-1">
                            <p>{ libro ? libro.descripcion_larga : '' }</p>
                        </div>
                        {/* <!--/.tab-pane --> */}
                    </div>
                    {/* <!-- /.tab-content --> */}
                </div>
            </section>
        </>
    )
}
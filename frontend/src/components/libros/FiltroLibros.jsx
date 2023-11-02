import { useState } from "react"

export function FiltroLibros() {
    const [filtro, setFiltro] = useState({})
    
    const handleChange = e => {
        setFiltro({
            ...filtro,
            [e.target.name]: e.target.value,
    })
    }

    return (
        <>
            <aside className="col-lg-3 sidebar">
                <div className="widget mt-1">
                    <h4 className="widget-title mb-3">Categories</h4>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <a href="#" className="align-items-center rounded link-body" data-bs-toggle="collapse" data-bs-target="#clothing-collapse" aria-expanded="true"> Clothing <span className="fs-sm text-muted ms-1">(21)</span></a>
                            <div className="collapse show mt-1" id="clothing-collapse">
                                <ul className="btn-toggle-nav list-unstyled ps-2">
                                <li><a href="#" className="link-body">Dresses</a></li>
                                <li><a href="#" className="link-body">Knitwear</a></li>
                                <li><a href="#" className="link-body">Jeans</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#electronics-collapse" aria-expanded="false"> Electronics <span className="fs-sm text-muted ms-1">(19)</span></a>
                            <div className="collapse mt-1" id="electronics-collapse">
                                <ul className="btn-toggle-nav list-unstyled ps-2">
                                    <li><a href="#" className="link-body">Headphones</a></li>
                                    <li><a href="#" className="link-body">Computers</a></li>
                                    <li><a href="#" className="link-body">Cameras</a></li>
                                    <li><a href="#" className="link-body">Annually</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#shoes-collapse" aria-expanded="false"> Shoes <span className="fs-sm text-muted ms-1">(12)</span></a>
                            <div className="collapse mt-1" id="shoes-collapse">
                                <ul className="btn-toggle-nav list-unstyled ps-2">
                                    <li><a href="#" className="link-body">Sneakers</a></li>
                                    <li><a href="#" className="link-body">Sandals</a></li>
                                    <li><a href="#" className="link-body">Boots</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <a href="#" className="align-items-center rounded collapsed link-body" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false"> Home & Kitchen <span className="fs-sm text-muted ms-1">(16)</span></a>
                            <div className="collapse mt-1" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled ps-2">
                                    <li><a href="#" className="link-body">Clocks</a></li>
                                    <li><a href="#" className="link-body">Kettles</a></li>
                                    <li><a href="#" className="link-body">Kitchenware</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <!-- /.widget --> */}
                <div className="widget">
                    <h4 className="widget-title mb-3">Rating</h4>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="rating" id="rating5" />
                        <label className="form-check-label" htmlFor="rating5">
                        <span className="ratings five"></span>
                        </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="rating" id="rating4" />
                        <label className="form-check-label" htmlFor="rating4">
                        <span className="ratings four"></span>
                        </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="rating" id="rating3" />
                        <label className="form-check-label" htmlFor="rating3">
                        <span className="ratings three"></span>
                        </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="rating" id="rating2" />
                        <label className="form-check-label" htmlFor="rating2">
                        <span className="ratings two"></span>
                        </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="rating" id="rating1" />
                        <label className="form-check-label" htmlFor="rating1">
                        <span className="ratings one"></span>
                        </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                </div>
                {/* <!-- /.widget --> */}
                <div className="widget">
                    <h4 className="widget-title mb-3">Size</h4>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" id="xs" />
                        <label className="form-check-label" htmlFor="xs">XS <span className="fs-sm text-muted ms-1">(23)</span></label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" id="s" />
                        <label className="form-check-label" htmlFor="s">S <span className="fs-sm text-muted ms-1">(253)</span></label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" id="m" />
                        <label className="form-check-label" htmlFor="m">M <span className="fs-sm text-muted ms-1">(65)</span></label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" id="l" />
                        <label className="form-check-label" htmlFor="l">L <span className="fs-sm text-muted ms-1">(156)</span></label>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" id="xl" />
                        <label className="form-check-label" htmlFor="xl">XL <span className="fs-sm text-muted ms-1">(74)</span></label>
                    </div>
                </div>
                {/* <!-- /.widget --> */}
                <div className="widget">
                    <h4 className="widget-title mb-3">Price</h4>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="price" id="price1"/>
                        <label className="form-check-label" htmlFor="price1"> $0.00 - $50.00 </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="price" id="price2" />
                        <label className="form-check-label" htmlFor="price2"> $0.00 - $50.00 </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="price" id="price3" />
                        <label className="form-check-label" htmlFor="price3"> $50.00 - $100.00 </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="price" id="price4" />
                        <label className="form-check-label" htmlFor="price4"> $150.00 - $200.00 </label>
                    </div>
                    {/* <!-- /.form-check --> */}
                    <div className="row">
                        <div className="col-7 col-md-5 col-lg-12 col-xl-10 col-xxl-10">
                            <div className="d-flex align-items-center mt-4">
                                <input type="number" className="form-control form-control-sm" placeholder="$0.00" min="0" />
                                <div className="text-muted mx-2">‒</div>
                                <input type="number" className="form-control form-control-sm" placeholder="$50.00" max="50" />
                            </div>
                        </div>
                        {/* <!-- /column --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.widget --> */}
            </aside>
        </>
    )
}
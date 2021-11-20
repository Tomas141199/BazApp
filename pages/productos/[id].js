import styled from "@emotion/styled";
import { left } from "@popperjs/core";
import Layout from "../../components/layouts/Layout";

//Declaramos una variable para la etiqueta img de la card
const imgDetalleProducto = styled.img`width: 220px;`;

const Producto = () => {

    return (
        <Layout>
            <div className="container my-5 rounded bg-light shadow-lg">
                <div className="row g-3 mt-5">
                    <p className="d-block fs-4 text-muted ms-3 my-3" style={{ textAlign: 'center' }}>
                        Detalles del producto
                    </p>
                    <div className="row">
                        <div className="col mb-3">
                            <div className="card ml-4" >
                                <img src="..." className="card-img-top mb-5" alt="..." />
                                <div className="m-auto mb-4">
                                    <a href="#" className="btn btn-primary">Solicitar Compra</a>
                                </div>
                            </div>
                        </div>
                        { /*Segundo DIV principal QUE CONTIENE LOS DATOS DEL PRODUCTO   */}
                        <div className="col mb-3" >
                            { /*Div con la ficha tecnica  del producto  */}
                            <div className="FiCHA PRODUCTO">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mt-2 mb-2">Nombre del Producto</h4>
                                        <h5 className="card-subtitle  mt-4 mb-4 text-muted">Talla Producto</h5>

                                        <p className="card-text"><h6>Descripcion</h6></p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                        <p className="card-text"><h6>Precio del producto: $1000 USD</h6></p>
                                    </div>

                                    { /*Div de la ficha con las categorias  */}
                                    <div className="p-3">
                                        <h5 className="card-subtitle  mb-4 text-muted">Categorias</h5>
                                        <div className="form-check" style={{ float: left, marginRight: '10px', marginLeft: '10px' }}>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                            <label className="form-check-label" for="flexCheckDefault">Categoria</label>
                                        </div>
                                        <div className="form-check " style={{ float: left, marginLeft: '10px' }}>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                            <label className="form-check-label" for="flexCheckChecked">Categoria</label>
                                        </div>
                                    </div>

                                    { /*Div de la ficha de los datos del vendedor */}
                                    <div className="p-3">
                                        <h6 className="card-subtitle text-muted">Datos del vendedor</h6>
                                        <p className="card-text ">Este producto es ofertado por: Nombre Vendedor </p>

                                        { /*Div del Boton para que te contacte con el vendedor  */}
                                        <div className="d-flex flex-row-reverse">
                                            <a href="#" className="btn btn-primary">Contactar al vendedor</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /*PRIMER DIV PRINCIPAL QUE CONTIENE LA IMAGEN Y EL BOTON DE COMPRA */}
            </div>
        </Layout >
    );
};

export default Producto;
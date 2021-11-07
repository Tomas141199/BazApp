import styled from "@emotion/styled";
import { FireContext } from "../../fire";
import { useContext } from "react";
import Router from "next/router";

const AgregarProducto = () => {
    return ( 
        <div className="container w-75 bg-white mt-5 rounded shadow">
        <div className="row align-items-stretch mb-3 abs-center">
            <div className="col p-5  rounded-end">
            <h3 className="my-3 text-center titulo_morado">¿Qué quieres vender?</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" placeholder="Producto"/>
                </div>
                <div className="row mt-3 ">
                    <div className="col-md-6">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" id="precio" name="precio" placeholder="$0.000"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="talla" className="form-label">Talla</label>
                        <input type="text" className="form-control" id="talla" placeholder="CH"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea className="form-control" id="descripcion" name="descripcion" rows="3"></textarea>
                    </div>
                </div>
                <p>Categorias</p>
                <div className="">
                   
                    <div className="form-check me-2 mt-1">
                        <input className="form-check-input" type="checkbox" value="" id="dama" name="dama"/>
                        <label className="form-check-label" htmlFor="dama">
                            Dama
                        </label>
                    </div>
                    <div className="form-check me-2 mt-1">
                        <input className="form-check-input" type="checkbox" value="" name="caballero" id="caballero" />
                        <label className="form-check-label" htmlFor="caballero">
                            Caballero
                        </label>
                    </div>
                    <div className="form-check me-2 mt-1">
                        <input className="form-check-input" type="checkbox" name="nino" value="" id="nino" />
                        <label className="form-check-label" htmlFor="nino">
                            Niño
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="mt-3 btn bg-bazapp"> <img src="/mas.png" className="bg-mas"/> Guardar</button>
                </div>
                
            </form>
            </div>
            <div className="col align-items-stretch  abs-center">
                <div className="file-field">
                    <div className="z-depth-1-half mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className="img-fluid"
                        alt="example placeholder"/>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="btn btn-mdb-color btn-rounded float-left">
                        <p>Eligen una foto del producto</p>
                        <input type="file"/>
                    </div>
                    </div>
                </div>
                
            </div>
            

        </div>
      </div>
     );
}
 
export default AgregarProducto;
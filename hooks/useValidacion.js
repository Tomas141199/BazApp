//Este hook se encarga se manejar validaciones dinamicas con diferentes formularios
// toma como parametros un stateInicial(valores del formulario), validar(funcion de validacion correspondiente para el formulario y fn que es la funcion
// a ejecutar si es que no hay errores)

import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setValores] = useState(stateInicial);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  

  //Se ejecuta cada vez que el valor de submitForm cambie
  useEffect(() => {
    if (submitForm) {
      //Obtiene el numero de errores despues de la validacion
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); //fn = funcion que se ejecuta en el componente
      }
      //Se estable el valor determinado
      setSubmitForm(false);
    }
  }, [submitForm]);

  //Funcion que se ejecuta conforme al usuario escribe algo en el input/s
  const handleChange = (e) => {
    //Se guardan los nuevos cambios dinamicamente
    setValores({
      //Copia de los antiguos valores
      ...valores,
      //Actualizacion del nuevo valor
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cada que usurio entra en un input y despues sale
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
  };

  // funcion que se ejecuta cuando el usuario manda el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //valida los campos
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  return {
    valores,
    errores,
    submitForm,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useValidacion;

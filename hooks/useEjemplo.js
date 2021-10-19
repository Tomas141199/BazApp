import React, { useState } from "react";

const useEjemplo = () => {
  const [state, setstate] = useState(true);
  return state;
};

export default useEjemplo;

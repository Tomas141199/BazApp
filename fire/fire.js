//Funcion para inicializar la app
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
class Fire {
  constructor() {
    this.app = initializeApp(firebaseConfig);
  }
}

const fire = new Fire();

export default fire;

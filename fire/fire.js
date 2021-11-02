//Funcion para inicializar la app
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
//firebaseAuth
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
//Firestore
import { getFirestore, addDoc, collection } from "firebase/firestore";
class Fire {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  async autenticar(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async cerrarSesion() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Se cerro sesion");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async registrar(nombre, email, password, userData) {
    const auth = getAuth();
    //Creacion del usuario en firebase
    const nuevoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //Actualizacion del nombre del usuario
    updateProfile(auth.currentUser, {
      displayName: nombre,
    })
      .then(() => {
        console.log("Perfil acutualizado");
        return nuevoUsuario;
      })
      .catch((error) => {
        console.log(error);
      });

    userData.propetario = nuevoUsuario.user.uid;

    await this.addUserData(userData);
  }

  async addUserData(userData) {
    const db = getFirestore();
    try {
      const docRef = await addDoc(
        collection(db, "informacionUsuarios"),
        userData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

const fire = new Fire();

export default fire;

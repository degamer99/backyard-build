// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
        signOut, onAuthStateChanged} from 'firebase/auth';
import  { getFirestore, collection, setDoc, doc, getDoc, updateDoc, getDocs} from 'firebase/firestore';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEY1Uds0XBSk2gwfsgrWqygyy3ova2y7A",
  authDomain: "stfx-4b23c.firebaseapp.com",
  projectId: "stfx-4b23c",
  storageBucket: "stfx-4b23c.appspot.com",
  messagingSenderId: "727035317274",
  appId: "1:727035317274:web:09645375e3b7210e4915a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
let userRef;
const storage = getStorage();
const storageRef = ref(storage);
export let user;
export let userdata;
export let userLocalData;
export let canSignin;
export let userId;
export let AllUserDoc = [];

export const Signin = (email, password) => {

  return(
    signInWithEmailAndPassword(auth, email, password)
      .then(
        async (userCredential) => {
          user = userCredential.user;
          localStorage.setItem("user.uid", user.uid);
          userId = localStorage.getItem("user.uid");
          userRef = doc (db, "users", userId);
          userdata = await getDoc(userRef);
          localStorage.setItem(userId, JSON.stringify(userdata.data()));
          userLocalData = JSON.parse(localStorage.getItem(userId));
          console.log(userLocalData);
          if (user.uid != null){
            canSignin = true;
            console.log(canSignin);
          }else{
            canSignin = false;
            console.log(canSignin);

          }
        }
      ).catch (
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        }
      )
  ) 
}
export const Signup = (email, password, fullName, phone) => {
  return(
    createUserWithEmailAndPassword(auth, email, password)
      .then(
         async (userCredential) => {
          user = userCredential.user;
          localStorage.setItem("user.uid", user.uid);
          userId = localStorage.getItem("user.uid");
          userRef = doc (db, "users", userId);
          addDocument(email, password, fullName, phone, user);
          userdata = await getDoc(userRef);
          console.log(userdata.data());
          localStorage.setItem(userId, JSON.stringify(userdata.data()));
          userLocalData = JSON.parse(localStorage.getItem(userId));
          console.log(userLocalData);
          console.log(user);
        }
      )
      .catch (
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        }
      )
  ) 
}

export const addDocument = async (email, password, name, phoneNo, user) => {
       await setDoc(userRef, {
           name: name,
           email: email,
           phoneNo: phoneNo,
           password: password
       })
      }

export const updateDocument = async (data) => {
  await updateDoc(userRef, data)
}

export const uploadsiteData = async (name ,data) => {
  await setDoc (doc (db, "site data", name), data);
}

export const downloadsiteData = async (name) => {
  const data = await getDoc(doc (db, "site data", name));
  localStorage.setItem("site", JSON.stringify(data.data()));
  
}

export const Signout = ()=> {
  return( signOut(auth)
  .then(
    (userCredential) => {
      user = userCredential.user;
      console.log(user);
    }
  ).catch (
    (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  ))
}

export const upload = (file)=>{
    const picturesRef = ref(storage, user.uid ); 
    try {
      uploadBytes(picturesRef, file)
      .then((snapshot)=>{console.log('it is done')})
      
    } catch (error) {
      console.log(error);
    }
}

export const GetAllDoc = async () => {
  AllUserDoc = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    AllUserDoc.push(doc.data());
  })
  console.log(AllUserDoc);
}

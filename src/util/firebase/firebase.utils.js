// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signOut, getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE7VQiIomlToSU6jGorNyaAn2jTPAall8",
    authDomain: "crwn-clothing-db-6fd48.firebaseapp.com",
    projectId: "crwn-clothing-db-6fd48",
    storageBucket: "crwn-clothing-db-6fd48.appspot.com",
    messagingSenderId: "293613907253",
    appId: "1:293613907253:web:d24769279e8dce6c7f307c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInGoogleRedirect = () => signInGoogleRedirect(auth, googleProvider)

export const db = getFirestore()


export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)   //sets a document with a given name to the given data. In this case a JSON object.
    })
    await batch.commit()  //commit the batch to the database. This will return a promise that is fulfilled when the changes are commited.   
    console.log('Document written with success')
}
export const getCategoriesAndDocs = async () => {
    const collectionRef = collection(db, "categories")  //collection name is set to "categories"
    const q = query(collectionRef)  //query is set to get all documents in the collection. In this case, it is all documents.

    const querySnapshot = await getDocs(q)  //get all docs in the collection. In this case, it is all docs.
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())


}


export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, "users", userAuth.uid)
    const getUserDocRef = await getDoc(userDocRef)

    if (!getUserDocRef.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('error while creating user', error);
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPass = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPass = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth)

export const onAuthStateListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'



export default defineNuxtPlugin(() => {
    // Doing something with nuxtApp
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyBLC077rz2HmmPCT4ZmtNUchLgo4eikZDQ",
        authDomain: "arabia-meet-d4ee0.firebaseapp.com",
        projectId: "arabia-meet-d4ee0",
        storageBucket: "arabia-meet-d4ee0.appspot.com",
        messagingSenderId: "1049153172713",
        appId: "1:1049153172713:web:f3caf466be00ed06ff2c78"
    })

    const auth = getAuth(firebaseApp)
    const db = getFirestore(firebaseApp)

    return {
        provide: {
            auth,
            db
        }
    }
})
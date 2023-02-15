import auth from "@react-native-firebase/auth";
const Logout=()=>{
    return new Promise(async(resolve,reject)=>{
    auth().signOut().then(() => console.log('User signed out!'));})
 }
 const LoginWithEmailPassword = async(email,password) => {
    console.log("Entrou")
    return new Promise(async(resolve,reject)=>{
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                alert('Email já está em uso')
                setErrEmail(true)
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                alert('Email invalido')
                setErrEmail(true)
            }
            if(error.code==="auth/user-not-found"){
                alert("Usuário não encontrado")
            }else{
                setErrEmail(true)
                setErrPass(true)
                alert(error.code)
            }
            console.error(error.code);
            console.error(error);
        });})
        console.log("logou")
}
const CreateLoginWithEmailPassword =async (email,password,userName) => {
    console.log("Entrou")
    return new Promise(async(resolve,reject)=>{
     await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async() => {
            console.log('User account created & signed in!');
            const update = {
                displayName: userName                
              };
              
              await auth().currentUser.updateProfile(update).then(()=>{
                console.log("Foi")
              }).catch((err)=>{
                console.log(err)
              })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });}
    )
        
}
const LoginAnonymous=async (email,password,userName) => {
    console.log("Entrou")
    return new Promise(async(resolve,reject)=>{
     await auth()
     .signInAnonymously()
     .then(() => {
       console.log('User signed in anonymously');
     })
     .catch(error => {
       if (error.code === 'auth/operation-not-allowed') {
         console.log('Enable anonymous in your firebase console.');
       }
     
       console.error(error);
     });}
    )
        
}
export {Logout, LoginWithEmailPassword,CreateLoginWithEmailPassword,LoginAnonymous};
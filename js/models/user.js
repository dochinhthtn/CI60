export function register(name, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log("Create account successfully");
}

export function login() {

}
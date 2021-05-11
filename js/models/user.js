export async function register(name, email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        });

        console.log(firebase.auth().currentUser);

        alert("Create account successfully");
    } catch(error) {
        alert(error.message);
    }

    console.log("This code must be executed");
}

export async function login(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Login successfully");
    } catch(error) {
        alert(error.message)
    }
}

export function authStateChanged() {

    // đăng kí, đăng nhập, đăng xuất
    firebase.auth().onAuthStateChanged(function(user) {
        if(user != null) {
            console.log(user);
        } else {
            console.log("User logged out");
        }
    });
}
// authentication system

class FacebookAuthProvider {
  authenticateWithFacebook() {
    console.log("Authenticating with facebook....");
    // logic implementation
  }
}

class GoogleAuthProvider {
  authenticateWithGoogle() {
    console.log("Authenticating with google....");
    // logic implementation
  }
}

class GithubAuthProvider {
  authenticateWithGithub() {
    console.log("Authenticating with Github....");
    // logic implementation
  }
}

const facebookAuth = new FacebookAuthProvider();
const googleAuth = new GoogleAuthProvider();
const githubAuth = new GithubAuthProvider();

facebookAuth.authenticateWithFacebook();
googleAuth.authenticateWithGoogle();
githubAuth.authenticateWithGithub();

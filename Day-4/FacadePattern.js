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

class TwitterAuthProvider {
  authenticateWithTwitter() {
    console.log("Authenticating with Twitter....");
    // logic implementation
  }
}

class Auth {
  constructor() {
    this.facebookAuth = new FacebookAuthProvider();
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
    this.twitterAuth = new TwitterAuthProvider();
  }

  facebook() {
    this.facebookAuth.authenticateWithFacebook();
  }

  google() {
    this.googleAuth.authenticateWithGoogle();
  }

  github() {
    this.githubAuth.authenticateWithGithub();
  }

  twitter() {
    this.twitterAuth.authenticateWithTwitter();
  }
}

const auth = new Auth();
auth.facebook();
auth.google();
auth.twitter();

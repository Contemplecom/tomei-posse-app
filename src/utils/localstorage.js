
// save firabase user to local storage from firebase and save to local
export function fetchUserObject(obj) {
  return new Promise((resolve, reject) => {
    const user = {
      'email': obj.email,
      'uid': obj.uid,
      'u': obj.u,
      'displayName': obj.displayName,
      'refreshToken': obj.refreshToken,
      'emailVerified': obj.emailVerified,
      'isAnonymous': obj.isAnonymous,
      'photoUrl': obj.photoUrl,
    };
    localStorage.setItem('tomeiPosseCurrentUser', JSON.stringify(user));
    const userObject = localStorage.getItem('tomeiPosseCurrentUser');
    resolve(JSON.parse(userObject));
  });
}

// save current user and than return it Proise this
export function currentUserPromise() {
  return new Promise((resolve, reject) => {
    const userObject = localStorage.getItem('tomeiPosseCurrentUser');
    resolve(JSON.parse(userObject));
  });
}

// get current user without promise
export function currentUser() {
  return JSON.parse(localStorage.getItem('tomeiPosseCurrentUser'));
}

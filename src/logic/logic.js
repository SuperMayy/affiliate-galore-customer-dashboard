export const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export const postUserData = (payload) => {
    localStorage.setItem('updateUser', 'false');
    fetch(`${process.env.REACT_APP_AG_API}v1/users/save`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      return res.json();
    }).catch(() => {
      localStorage.clear();
    })
}
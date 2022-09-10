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
    fetch('/v1/users/save', {
      method: 'post',
      body: payload,
    }).then(
      console.log('user data has been saved')
    ).catch(
      console.log('error')
    );
}
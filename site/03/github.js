class Github {
  constructor(){ 
    //this.client_id = '3c56e042ba0eb95c6be0';
    //this.client_secret = 'c3962b679a181eec030049fed392e682e3db443c';
    //this.client_secret = '62d7af21f73138adb6d69a6a6755ca25594e1e81';
    //seduc    
    //this.client_id = '94b9e7fe7d9c3146cc22';
    //this.client_secret = '0e5c25c68bc1111ec3ecbd9e665d95f645935572';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    
    return {
      profile: profile
    }
  
  }//getUser

}//Class
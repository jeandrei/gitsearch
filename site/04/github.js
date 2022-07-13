class Github {
  constructor(){ 
    this.client_id = '3c56e042ba0eb95c6be0';
    this.client_secret = 'c3962b679a181eec030049fed392e682e3db443c';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    
    return {
      profile: profile
    }
  
  }//getUser

}//Class
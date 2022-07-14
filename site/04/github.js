class Github {
  constructor(){ 
    this.client_id = '3c56e042ba0eb95c6be0';
    this.client_secret = 'c3962b679a181eec030049fed392e682e3db443c';

    //number of repos to show
    this.repos_count = 5;
    //show by order of created and order by text
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    //Get profile user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Get user's repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile: profile,
      repos: repos
    }
  
  }//getUser

}//Class
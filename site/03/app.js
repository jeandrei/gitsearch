const github = new Github;

//Init UI
const ui = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;  
  if(userText !== ''){       
    github.getUser(userText)
    .then(data => {     
      if(data.profile.messsage === 'Not Found'){
       
      } else {
        // Show profile  
        ui.showProfile(data.profile);      
      }
    })

  } else {
  
  }
});
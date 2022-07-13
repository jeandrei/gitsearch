// Init GitHub
const github = new Github;

// Searh input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  // Check if text is not empty
  if(userText !== ''){
    //De um console.log e verifique se aparece o texto
    //console.log(userText);
    
    // Make http call
    github.getUser(userText)
    .then(data => {
      // se digitar qualquer coisa lá na busca
      // quando não encontrado no console vai aparecer
      // profile:{message: 'Not found'} que vem do api
      // logo verificamos se a mensagem é Not Found 
      // para tratarmos quando não existe a profile
      if(data.profile.messsage === 'Not Found'){
        // Show alert aqui iremos apresentar um alerta que não existe a profile
      } else {
        // Show profile aqui apresentamos a profile        
      }
    })

  } else {
    // Clear profile aqui quando limpar o input limpamos as profiles
  }
});
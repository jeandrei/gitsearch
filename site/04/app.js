const github = new Github;

//timer tem que ficar fora da função
let timer;

const ui = new UI;

const searchUser = document.getElementById('searchUser');


/*crio uma promisse que toda vez que digito um caractere reinicia o 
timer clearTimeout(timer) e um setTimeout de 3 segundos
então cada vez que digito algo ele zera o timer e começa a contar
3 segundos, só vai executar o resolve se nada for pressionado em 
3 segundos e vai retornar o valor passado na função
setTimer('Teste') depois de 3 segundos ele vai retornar Teste
*/
function setTimer(value){ 
  clearTimeout(timer);
  return new Promise((resolve,reject)=>{
    timer = setTimeout(()=>{
      resolve(value);
    },3000)
  }) 
}

/**
 * Aqui crio uma função async await passando o "e" do event listener
 * passo o "e" da linha searchUser.addEventListener('keyup', (e)
 * logo tenho acesso a tudo o que for passado
 * essa função vai fazer a busca no API
 */
async function Search(e){
  //aqui chamo a função setTimer que vai retornar o texto após 3 segundos
  const userText = await setTimer(e.target.value);
  //console.log(userText);
  if(userText !== ''){       
    github.getUser(userText)
    .then(data => {     
      if(data.profile.messsage === 'Not Found'){
       //Show Alert case not found
        ui.showAlert('User not found', 'alert alert-danger');
      } else {         
        ui.showProfile(data.profile);      
      }
    })

  } else {
    //Clear profile
    ui.clearProfile();
  }
}



//aqui chamo a função Search no evento keyup que é qualquer tecla
searchUser.addEventListener('keyup', (e) => {
  Search(e);
});
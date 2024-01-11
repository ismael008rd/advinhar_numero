const chances = document.querySelectorAll('.icones_chance')
const conte = chances[0]
const inputValue = document.querySelector('.numeros')
const btnPegar = document.querySelector('.btn')
const sumir_none = document.querySelector('.sumir_none')
const h2pensado = document.querySelector('.h2pensado')
const numAcerto = document.querySelector('.num_acerto')
const caixa_acerto = document.querySelector('.acerto')
console.log(conte)
const btnJogarNovamente = document.querySelector('.btn_jogar')
const infChutarh3=document.querySelector('.chute')

const btn_dGameOver = document.querySelector('.btn_jogarGame')

console.log(btnJogarNovamente)

let chanceMort =3
let chance=-1
let numeroPensado =Math.floor(Math.random() * 10)




console.log(numeroPensado)
const gameOver=document.querySelector('.gameOver')

function play(){

    infChutarh3.style.display='block'
    if(inputValue.value==''){
     alert('estar vazio')
    }
    
    if(!(inputValue.value==numeroPensado) && !(inputValue.value=='')){
        console.log('não é esse número pensado imorale')
        chanceMort--
        chance++
     conte.children[chance].style.backgroundColor='red'
     verValor(numeroPensado,inputValue.value,chanceMort)
    }else if(inputValue.value==numeroPensado && !(inputValue.value=='')){
        infChutarh3.style.display='none'
        console.log('sim é esse número')
       sumir_none.style.display='none'
       caixa_acerto.style.display='flex'
       h2pensado.innerText=`Sim era o número ${numeroPensado} pensado`
       numAcerto.innerHTML=numeroPensado

      chances.forEach((e)=>{
       const items = e.children
       console.log(items)
       for(let i =0; i<items.length; i++){
        items[i].style.backgroundColor='white'
        console.log(items[i])
       }

      })
      
    //   verValor(numeroPensado,inputValue.value)
      numeroPensado =Math.floor(Math.random() * 10)
      console.log(numeroPensado)
    }
   
    inputValue.value=''
}

function GameOver(){
    chances.forEach((e)=>{
        const items = e.children
        console.log(items)
        for(let i =0; i<items.length; i++){
         items[i].style.backgroundColor='white'
         console.log(items[i])
        }
 
       })
    infChutarh3.style.display='none'
    sumir_none.style.display='none'
    gameOver.style.display='flex'
  
}
function jogarAgain(){
    infChutarh3.style.display='block'
    console.log('jogar novamente')
    gameOver.style.display='none'
    sumir_none.style.display='flex'
    caixa_acerto.style.display='none'
    chanceMort=3
    chance=-1
   
    

}

const subirNome = document.querySelector('.subirNome')
function AtulizarNome(nome){
   subirNome.style.display='block'
    const h3_informacao= document.querySelector('.h3_inform').innerHTML=nome

    setTimeout(()=>{
        subirNome.style.display='none'
    },1800)
}

const container_button = document.querySelector('.btn_button')
const container_numeroDigitado = document.querySelector('.numero_digitar')


function verValor(pensado, chutado, chance){
   if(chutado>pensado){
      let nomeI=`você chutou muito alto você só tem mais ${chance} chance`
      atulizarInfoma()
       
      AtulizarNome(nomeI)
 
   }else if(chutado<pensado){
    let nomeI=`você chutou muito baixo você só tem mais ${chance} chance`
    atulizarInfoma()
    AtulizarNome(nomeI)
   
   }
   if(chance==0){
    nomeI=''
    AtulizarNome(nomeI)
    console.log('morreu')
   GameOver()
   }
}
function atulizarInfoma(){
    container_button.style.display='none'
    container_numeroDigitado.style.display='none'

    setTimeout(()=>{
        container_button.style.display='block'
        container_numeroDigitado.style.display='block'
    },2000)

}

btn_dGameOver.addEventListener('click',jogarAgain)
btnJogarNovamente.addEventListener('click',jogarAgain)

btnPegar.addEventListener('click',play)
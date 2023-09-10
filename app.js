var btn = document.getElementById('btn')
var again = document.getElementById('again')
var h2 = document.getElementById('h2')
var math = Math.floor(Math.random()*10)
console.log(math);
btn.addEventListener('click',function(){
    var user= document.getElementById('a').value
    if(math==user){
h2.innerHTML='CORRECT ANSWER'
h2.style.color='green'

}
else if(math<user){
        h2.innerHTML='YOUR ANSWER IS TOO HIGH'
h2.style.color='red'
        
    }
    else if(math>user){
        
        h2.innerHTML='YOUR ANSWER IS TOO LOW'
h2.style.color='#F78702'

    }
    again.addEventListener('click',function(){
        location.reload();
    })
})
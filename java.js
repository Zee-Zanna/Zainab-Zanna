// number 1
let time=22;
if (   time<=11 & time>0) {
    console.log('Good Morning')
    
}
 else if(time<=15 & time>0) {
     console.log('Good Afternoon')
    
}
else if(time<=20 & time>0){
    console.log('Good Evening')

}
else if( time>0){
    console.log('Good Night')
}

//NUMBER 2

for(let num=1;num<=100; num++){
    if(num%2==0){
        console.log(`${num} is Even`)
    }
    else{
        console.log(`${num} is Odd`)
    }
}

//NUMBER 4
 let i=0
while (i<=10) {
    console.log(`While loop Number: ${i}`)
    i++
}



//Number 5
    let counter=0
function count(){
    counter=counter+1
    document.querySelector('h1').innerHTML=counter


}
let btn=document.querySelector('button')

btn.addEventListener('click', count)


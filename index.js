let curr=1
function swapView(index){
    let questionArr=[]
    questionArr[1]=document.getElementById("Q1")
    questionArr[2]=document.getElementById("Q2")
    questionArr[3]=document.getElementById("Q3")
    
    questionArr[curr].classList.add("hide")
    questionArr[index].classList.remove("hide")
    curr=index
}

function reverseString(){
    let inp=document.getElementById("inp1").value
    let ret=""
    for(let i=inp.length-1;i>=0;i--){
    ret=ret.concat(inp[i])
    }

    document.getElementById("out1").innerText=ret
}

function palindrome(){
    let inp=document.getElementById("inp2").value.split("")
    for(let i=0;i<inp.length/2;i++){
        if(inp[i]!=inp[inp.length-i-1]){
             document.getElementById("out2").innerText="This is not a palindrome!"
             return
        }
    }
    document.getElementById("out2").innerText="This is a palindrome!"
}

function tipCalculator(){
    let subtotal=parseFloat(document.getElementById("inp3sub").value)
    let tipPercent=parseFloat(document.getElementById("inp3tip").value)
    document.getElementById("out3").innerText="$"+(subtotal+Math.round(subtotal*tipPercent)/100)
}
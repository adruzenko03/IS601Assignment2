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


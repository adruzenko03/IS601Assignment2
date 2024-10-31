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

function operation(n1,n2,callback){
    callback(n1,n2)
}
operation(10,5,add)
operation(10,5,sub)
operation(10,5,mul)
operation(10,5,div)
operation(10,5,modu)
operation(10,5,expo)

function add(n1,n2){
    console.log(n1+n2)
}

function sub(n1,n2){
    console.log(n1-n2)
}

function mul(n1,n2){
    console.log(n1*n2)
}

function div(n1,n2){
    console.log(n1/n2)
}

function modu(n1,n2){
    console.log(n1%n2)
}

function expo(n1,n2){
    console.log(n1**n2)
}
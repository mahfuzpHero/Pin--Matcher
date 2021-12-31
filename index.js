function generateCode() {
    const code = Math.round(Math.random()*1000000);
    const codeStringify = code + "";
    if(codeStringify.length == 6){
        return code;
    }
    else{
        return generateCode();
    }
}
function getCode() {
    const code = generateCode();
    document.getElementById("code-display").value = code;
}
document.getElementById("generate-button").addEventListener("click",function () {
    const code = generateCode();
    document.getElementById("code-display").value = code;
})
document.getElementById("key-pad").addEventListener("click",function () {
    const keyValue = event.target.innerText;
    const inputDisplay = document.getElementById("typed-number");
    if (keyValue == "C") {
        inputDisplay.value = "";
    }
    else{
        const oldInput = inputDisplay.value;
        const newInput = oldInput + keyValue;
        inputDisplay.value = newInput;
    }
})
// document.getElementById("back").addEventListener("click",function () {
//     // const input = document.getElementById("typed-number").value;
//     // const after = input.substring(0,input.length -1);
//     // document.getElementById("typed-number").value = after;
// })
function matchCode() {
    const randomPin = document.getElementById("code-display").value;
    const typedNumber = document.getElementById("typed-number").value;
    if(randomPin == typedNumber){
        document.getElementById("positive-msg").style.display = "block";
    }
    else{
        document.getElementById("negative-msg").style.display = "block";
    }
}
document.getElementById("submit").addEventListener("click",function () {
    matchCode();
})
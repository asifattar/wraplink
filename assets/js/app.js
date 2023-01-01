var cl = console.log;

let info=document.getElementById(`wraplinks`);

let text=info.innerHTML.trim();

let array = text.split(" ");

let result =" ";
for (let i=0 ; i<array.length ; i++){
    if (array[i].includes(`https`)){
        result += `<a href=${array[i]} traget="_blank">${array[i]}</a>`
    }
    else{
        result += array[i]+` `
    }
}

info.innerHTML=result;





























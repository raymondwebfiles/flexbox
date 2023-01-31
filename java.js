document.write("Welcome to my Javascript");
console.log('Javascript Hello');

// aricmetic
let sum=0; numOne=2; numTwo=3;
sum=numOne+numTwo;
document.write('<br><hr>');
document.write('The sum of two numbers are: '+sum+'<br><hr>');

//pop push shift unshift to Array
let array=[];
document.write('<h1>Array</h1>'+'<br>');
document.write('If no data is correct: '+array+'<br>');

display=array.push('ako0');
document.write('Pushed data: '+display+'<br>');
document.write('First(Push) data inside array: '+array+'<br>');

display=array.push('ako1');
document.write('Pushed data: '+display+'<br>');
document.write('Second(Push) data inside array: '+array+'<br>');

display=array.push('ako2');
document.write('Pushed data: '+display+'<br>');
document.write('Third(Push) data inside array: '+array+'<br><hr>');

display=array.pop();
document.write('Poped data: '+display+'<br>');
document.write('First(Pop) data inside array: '+array+'<br><hr>');

display=array.unshift('ako-1');
document.write('Unshifted data: '+display+'<br>');
document.write('First(Unshift) data inside array: '+array+'<br>');

display=array.unshift('ako-2');
document.write('Unshifted data: '+display+'<br>');
document.write('Second(Unshift) data inside array: '+array+'<br><hr>');

display=array.shift();
document.write('Shifted data: '+display+'<br>');
document.write('First(shift) data inside array: '+array+'<br><br><hr>');

//Object
let gpu = {
    brand: 'Asus',
    model: 'rog strix',
    memory: '4gb OC',
    color: 'black mamba',
}
document.write('<h1>Object</h1>'+'<br>');
document.write('Brand Name: '+gpu.brand+'<br>');
document.write('Model: '+gpu.model+'<br>');
document.write('Memory: '+gpu.memory+'<br>');
document.write('Color: '+gpu.color+'<br><br>');

gpu['brand']='MSI';
gpu['model']='GTX 1660 Super';
gpu['memory']='6gb Overclocking';
gpu['color']='Red Dragon King';

document.write('Brand Name: '+gpu['brand']+'<br>');
document.write('Model: '+gpu['model']+'<br>');
document.write('Memory: '+gpu['memory']+'<br>');
document.write('Color: '+gpu['color']+'<br><br><hr><br>');

//for loop for array
for(let i=0; i<array.length; i++){
    document.write('Array '+[i]+': '+array[i]+'<br>');
}document.write('<br>');

//for loop for object
let c;
for(c in gpu){
    document.write([c]+': '+gpu[c]+'<br>');
}document.write('<br>');

let f=0;
while(f<array.length){
    document.write('Array '+[f]+': '+array[f]+'<br>');
    f++;
}   document.write('<br>');


//Testing Loop
let a=['a','b','c','d','e'];
for(let n=0; n<a.length;n++){
    document.write('For loop'+[n]+': '+a[n]+'<br>');
}document.write('<br>');

let t;
for(t in a){
    document.write('For shorthand '+[t]+': '+a[t]+'<br>');
}document.write('<br>');

let r=0;
while(r<a.length){
    document.write('While '+[r]+': '+a[r]+'<br>');
    r++;
}document.write('<br>');

//sample
let insertarray=['val','ddo','err'];
for(let l=0; l<insertarray.length; l++){
    document.write('Insert: '+insertarray[l]+'<br>');
}


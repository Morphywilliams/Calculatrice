let btn_une = document.querySelector('#un');
let btn_deux = document.querySelector('#deux');
let btn_trois = document.querySelector('#trois');
let btn_quatre = document.querySelector('#quatre');
let btn_cinq = document.querySelector('#cinq');
let btn_six = document.querySelector('#six');
let btn_sept = document.querySelector('#sept');
let btn_huit = document.querySelector('#huit');
let btn_neuf = document.querySelector('#neuf');
let btn_zero = document.querySelector('#zero');
let btn_cos = document.querySelector('.cos');
let btn_sin= document.querySelector('.sin');
let btn_addition = document.querySelector('#addition');
let btn_division = document.querySelector('#soustraction');
let btn_multiplication = document.querySelector('#multiplication');
let btn_soustraction = document.querySelector('#moins');
let btn_egal = document.querySelector('#egale');
let btn_point =document.querySelector('#point')
let btn_off = document.querySelector('#off');
let btn_on = document.querySelector('#on');
let btn_acos = document.querySelector('.acos');
let btn_color =  document.querySelector('#color');
let contenaire = document.querySelector('.sous_contenaire');

btn_une.onclick = function(){
    document.querySelector('.resultat').textContent +='1';
}
btn_deux.onclick = function(){
    document.querySelector('.resultat').textContent +='2';
}
btn_trois.onclick = function(){
    document.querySelector('.resultat').textContent +='3';
}
btn_quatre.onclick = function(){
    document.querySelector('.resultat').textContent +='4';
}
btn_cinq.onclick = function(){
    document.querySelector('.resultat').textContent +='5';
}
btn_six.onclick = function(){
    document.querySelector('.resultat').textContent +='6';
}
btn_sept.onclick = function(){
    document.querySelector('.resultat').textContent +='7';
}
btn_huit.onclick = function(){
    document.querySelector('.resultat').textContent +='8';
}
btn_neuf.onclick = function(){
    document.querySelector('.resultat').textContent +='9';
}
btn_zero.onclick = function(){
    document.querySelector('.resultat').textContent +='0';
}
btn_egal.onclick = function()
{
    document.querySelector('.resultat').textContent = eval(document.querySelector('.resultat').textContent);
}
//Operateurs

btn_addition.onclick = function()
{
    document.querySelector('.resultat').textContent += '+';
}
btn_soustraction.onclick = function()
{
    document.querySelector('.resultat').textContent += '-';
}
btn_multiplication.onclick = function()
{
    document.querySelector('.resultat').textContent += '*';
}
btn_division.onclick = function()
{
    document.querySelector('.resultat').textContent += '/';
}
btn_point.onclick = function()
{
    document.querySelector('.resultat').textContent += '.';
}
btn_off.onclick = function(){
    document.querySelector('.resultat').style.backgroundColor = 'black';
}
btn_on.onclick = function(){
    document.querySelector('.resultat').style.backgroundColor = ' rgb(221, 231, 173)';
    document.querySelector('.resultat').textContent = '';
}
// Calculs scientifique

btn_cos.onclick = function()
{
    document.querySelector('.resultat').textContent = Math.cos(eval(document.querySelector('.resultat').textContent))
}
btn_sin.onclick = function()
{
    document.querySelector('.resultat').textContent = Math.sin(eval(document.querySelector('.resultat').textContent))
}
btn_color.onclick = function(){
    contenaire.style.backgroundColor ='#'+ Math.random().toString().slice(6, 12); 
}
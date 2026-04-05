/* TIPOS DE VARIAVEIS 30/03/2026 19:15
->var
->let
->const
*/

/*VAR

//var a = 2;
//var b = 3;
//var c = a + b; 

MESMA COISA */
var a,b,c;
a =2;
b=3;
c=a+b;
//alert(c);

//Pertmite reatribuição==
c = 9;
//alert(c)

var nome, sobrenome, nomeClmpleto;
nome = "Kalinca";
sobrenome = "Souza";
nomeCompleto = nome + " "+ sobrenome;
document.getElementById("nome").innerHTML = nomeCompleto;

/*LET
Não permite reatribuição(somente no escopo)

*/
let n1, n2, n3;//mais usadoo
n1 = 5; 
n2 = 3;
n3 = n1 + n2;
document.getElementById("valor").innerHTML = n3;
/*
CONST
-Não permite reatribuição
-nunca muda
*/

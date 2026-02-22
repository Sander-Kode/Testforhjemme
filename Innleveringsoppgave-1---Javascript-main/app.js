/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

//Her løser jeg oppgaven med å lage varibler med datatypen String
{
    let fornavn = "Sander";
    let age = 28;

    let string = "Hei, mitt navn er " + fornavn + ", jeg er " + age + " år gammel."
    console.log(string);
}

// Her løser jeg oppgaven med å lage varibler med datatypen Number

{
    const num1 = 5;
    const num2 = 8;
    let sum = num1 + num2;
    console.log (sum);

    const num3 = 10;
    const num4 = 4;
    let sum2 = num3 + num4;
    console.log(sum2);

//Totalsum
    sum += sum2;
    console.log(sum);
}

//Her løser jeg oppgaven med datatypen Boolean

{
    let isOnline = true;
    console.log("Is the user online? " + isOnline);

    let myAge = 18;
    let isAdult = myAge >= 18;

    console.log("Is this user an adult? " + isAdult);}


//Her løser jeg oppgaven med datatypen Array

{
    let myCars = ["Volvo", "Bmw", "Mercedes", "Toyota" ];
    console.log(myCars[2])

    let myNumbers = [1,2,3,4,5,6,7,8,9];
    console.log(myNumbers[4]);
}


/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

// med + operator

{
   const a = 5;
   const b = 7;
   let c = a + b;
   console.log(c);
}

// med - operator
{
    const a = 19;
    const b = 11;
    let c = a - b;
    console.log(c);
}
// med * operator

{
    const a = 9;
    const b = 3;

    console.log(a * b);
}

// med / operator
{
    const a = 8;
    const b = 3;

    console.log(a / b);

}

// med ++ operator
{
    let a = 5;
    a++;
    console.log(a);
}

// med -- operator

{
    let a = 10;
    a--;

    console.log(a);
}

// med += operator

{
    let a = 6;
    let b = 4;

    a += b;

    console.log(a);
}
// med -= operator
{
    let a = 9;
    let b = 4;

    a -= b;

    console.log(a);
}



/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Sander";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

if (userAge >= 18 && userName !== "" && userIsBlocked === false) {
    userIsLoggedIn = true; 
    goToPage = "/home";
    console.log("Velkommen, du er nå logget inn.")
} else {
    console.log("error: brukeren oppfyller ikke kravene.")
}




/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her

// Her sier jeg at usertitle = Mr. om userMale er true, men Mrs. om userMale er false.
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle)


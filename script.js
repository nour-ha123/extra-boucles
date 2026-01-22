//ex 1
function iterateAndLogWithFor(n) {
    for(var i=0; i<=n; i++) {
        if (i%2 === 0 ) {
             console.log(i + " est pair")
        }
        else 
         console.log(i + " est impair")

    }
}
iterateAndLogWithFor(3);

function iterateAndLogWithWhile(n) {
    var counter =0;
    while(counter <= n) {
        if (i%2 === 0 ) {
             console.log(i + " est pair")
        }
        else 
         console.log(i + " est impair")
        counter ++

    }
}
iterateAndLogWithFor(3);

//ex 2
function reverseIterateAndLogWithFor(n) {
    for(var i=n; i>=0; i--) {
        if (i%2 === 0 ) {
             console.log(i + " est pair")
        }
        else 
         console.log(i + " est impair")

    }
}
reverseIterateAndLogWithFor(3);

function iterateAndLogWithWhile(n) {
    while(n>=0) {
        if (n%2 === 0 ) {
             console.log(n + " est pair")
        }
        else 
         console.log(n + " est impair")
        
        i--

    }
}
iterateAndLogWithWhile(3);

//ex 3
function weirdDivisionWithFor(n) {
    for(var i=1; i<=n; i++) {
        if (i%3 === 0 ) {
             console.log("Julia")
        }
        else if (i%5 === 0 ) {
            console.log("James")
        }
        else if (i%3 === 0 && i%5 === 0 ) {
            console.log("JuliaJames")
       }
       else 
        console.log(i)

    }
}
weirdDivisionWithFor(3);

function weirdDivisionWithWhile(n) {
    var counter = 1;
    while(counter <=n) {
        if (counter%3 === 0 ) {
             console.log("Julia")
        }
        else if (counter%5 === 0 ) {
            console.log("James")
        }
        else if (counter%3 === 0 && i%5 === 0 ) {
            console.log("JuliaJames")
       }
       else 
        console.log(counter)
        counter++

    }
}
weirdDivisionWithWhile(3);

//ex 4
function laughWithFor(number) {
    var chaine ="ha";
    for(var i =1; i< number; i++) {
        chaine += "ha"
    }
    return chaine
}
laughWithFor(6);

function laughWithWhile(number) {
    var chaine ="ha";
    var counter =1;
    while(counter< number) {
        chaine += "ha"
        counter++
    }
    return chaine
}
laughWithWhile(6);

// ex 5
function addDigits(num) {
    
}
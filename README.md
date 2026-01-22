# extra-boucles
#  Exercices JavaScript – Boucles `for` et `while`

---

## Exercice 1 — Itérer de 0 à n (pair / impair)

Écris une fonction qui parcourt les nombres de `0` à `n`.
Pour chaque nombre, affiche un message indiquant s’il est **pair** ou **impair**.

Fonctions à écrire :

* `iterateAndLogWithFor(n)`
* `iterateAndLogWithWhile(n)`

Exemple :

```js
iterateAndLog(3);
// "0 est pair"
// "1 est impair"
// "2 est pair"
```

---

## Exercice 2 — Itérer de n à 0 (pair / impair)

Écris une fonction qui parcourt les nombres de `n` jusqu’à `0`.
Pour chaque nombre, affiche s’il est **pair** ou **impair**.

Fonctions à écrire :

* `reverseIterateAndLogWithFor(n)`
* `reverseIterateAndLogWithWhile(n)`

---

##  Exercice 3 — Julia / James

Parcours les nombres de `1` à `n` et applique les règles suivantes :

* Si le nombre est divisible par **3**, affiche `"Julia"`
* S’il est divisible par **5**, affiche `"James"`
* S’il est divisible par **3 et 5**, affiche `"JuliaJames"`
* Sinon, affiche le nombre

Fonctions à écrire :

* `weirdDivisionWithFor(n)`
* `weirdDivisionWithWhile(n)`

---

## Exercice 4 — Répéter "ha"

Écris une fonction `laugh` qui retourne la chaîne `"ha"` répétée un nombre donné de fois.

Fonctions à écrire :

* `laughWithFor(number)`
* `laughWithWhile(number)`

Exemple :

```js
laugh(6); // "hahahahahaha"
```

---



##  Exercice 5 — Somme des chiffres

Écris une fonction qui retourne la somme des chiffres d’un nombre entier.

Fonction à écrire :

* `addDigits(num)`

Exemples :

```js
addDigits(29); // 11
addDigits(90); // 9
```

---

##  Exercice 6 — Premier chiffre dans une chaîne

Écris une fonction qui retourne **le premier chiffre** trouvé dans une chaîne de caractères.
Les chiffres peuvent se trouver n’importe où dans la chaîne.

Fonction à écrire :

* `firstDigit(str)`

Exemples :

```js
firstDigit("sdsa3dsad020a2"); // 3
firstDigit("tdhs020a2"); // 0
```

---


## Exercice 7 — Chiffres pairs uniquement

Écris une fonction qui vérifie si **tous les chiffres** d’un nombre sont pairs.
Le nombre est fourni sous forme de **chaîne de caractères**.

Fonction à écrire :

* `evenDigitsOnly(input)`

Exemples :

```js
evenDigitsOnly("1253"); // false
evenDigitsOnly("62680"); // true
```

---

##  Exercice 8 — Palindrome

Écris une fonction qui vérifie si une chaîne est un palindrome.
(Un palindrome se lit de la même façon dans les deux sens.)

Fonction à écrire :

* `palindrome(str)`

Exemples :

```js
palindrome("aaba"); // false
palindrome("kayak"); // true
palindrome("2002"); // true
```

---




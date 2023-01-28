function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let obj = {};
   for (let i = 0; i < string.length; i++) {
      if (obj.hasOwnProperty(string[i])) {
         obj[string[i]]++;
      } else {
         obj[string[i]] = 1;
      }
   }
   return obj;
}
console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => a.length - b.length);
   return arrayOfStrings;
}
let arrayOfStrings = ["You", "Certainly","are", "wonderfully","beautiful", "looking"];
// sortArray(arrayOfStrings)
// arrayOfStrings = arrayOfStrings.sort()
arrayOfStrings.sort((a, b) => a.length - b.length)
// console.log(arrayOfStrings)



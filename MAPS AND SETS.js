              //----------MAPS AND SETS EXERCISE----------


// new Set([1,1,2,2,3,4])
//----- it returns a set with only the unique values. 

[...new Set("referee")].join("")

//----- we are creating a new data structure Set. it will safe only unique values in this case that means any letter only once. 
//----- so now we have the data structure Set. We are spreading it to get an array. 
//----- we are joining the array togheter with the join() method. 
//----- From set to array to joined string. 

let m = new Map();
m.set([1,2,3], true);     //----- we are setting up a new Map data structure. Here we giving it a key value of an array and a value of an boolean. 
m.set([1,2,3], false);    //----- here we are giving it a key value of an array again and giving it a value of wrong. 



/*
hasDuplicate
*/

const hasDuplicate = (array) => new Set (array).size !== array.length;
//----- our function will return a new Set. Than we are checking if the size of the Set is equal to the lenght of the array. If not it means the Set found a double value and did not return it. If it is the same size than the array does not contain any double values. 
//  return the Set if its size is not equal to the array length. 


/*
vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/


function isVowel(char){
  return "aeiou".includes(char);  //----- is any char included in aeiou
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
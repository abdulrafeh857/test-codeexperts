import React, { useState } from 'react';

const TestService = () => {
  const [array] = useState([3, 2, 7, 4, 6, 9]);
  const [sortedArray, setSortedArray] = useState([]);
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);
  const [arraySum] = useState([3, 7, 1, 5, 11, 19]);
  const [sum, setSum] = useState(0);
  const [arrayMissing] = useState([3, 4, 9, 1, 7, 3, 2, 6]);
  const [missingArray, setMissingArray] = useState([]);
  const [arrayRepeating] = useState([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]);
  const [repeated, setRepeated] = useState('');
  const [arrayRotate] = useState([3, 8, 9, 7, 6]);
  const [rotatedArray, setRotatedArray] = useState([]);

  const sortArrayDesc = (array) => {
    let len = array.length; // get the length of the array
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          // check if the current element is less than the next element
          let temp = array[j]; // swap the elements
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };

  const checkPalindrome = (str) => {
    // check if the string is a palindrome
    let string = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // remove special characters and convert to lowercase
    let len = string.length; // get the length of the string
    for (let i = 0; i < len / 2; i++) {
      // loop through the string
      if (string[i] !== string[len - 1 - i]) {
        return false; // return false if the characters do not match
      }
    }
    return true; // return true if the string is a palindrome
  };

  const sumOfTwoLargest = (array) => {
    // get the sum of the two largest numbers in the array
    let first = 0;
    let second = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > first) {
        // check if the current element is greater than the first element
        second = first; // set the second element to the first element
        first = array[i]; // set the first element to the current element
      } else if (array[i] > second && array[i] !== first) {
        // check if the current element is greater than the second element and not equal to the first element
        second = array[i]; // set the second element to the current element
      }
    }
    return first + second;
  };

  const missingNumbers = (array) => {
    // get the missing numbers in the array
    let highestValue = 0;
    for (let num of array) {
      // loop through the array
      if (num > highestValue) {
        // check if the current element is greater than the highest value
        highestValue = num; // set the highest value to the current element
      }
    }

    const presentArray = new Set(array); // create a set of the array elements
    const missingArray = []; // create an array for the missing numbers

    for (let i = 0; i <= highestValue; i++) {
      // loop through the numbers from 0 to the highest value
      if (!presentArray.has(i)) {
        // check if the number is not in the set
        missingArray.push(i); // add the number to the missing array
      }
    }

    return missingArray;
  };

  const mostRepeated = (array) => {
    // get the most repeated number in the array
    let object = {};
    let maximum = 0;
    let number = 0;
    for (let num of array) {
      // loop through the array
      object[num] = object[num] ? object[num] + 1 : 1; // count the number of times each element appears
      if (object[num] > maximum) {
        // check if the count is greater than the maximum
        maximum = object[num]; // set the maximum to the count
        number = num; // set the number to the current element
      }
    }
    return `${number} is repeated ${maximum} times`;
  };

  const rotateArray = (array) => {
    // rotate the array
    let lastItem = array[array.length - 1]; // get the last element of the array
    for (let i = array.length - 1; i > 0; i--) {
      array[i] = array[i - 1]; // shift the elements to the right
    }
    array[0] = lastItem; // set the first element to the last element
    return array;
  };

  return {
    array,
    sortedArray,
    setSortedArray,
    input,
    setInput,
    isPalindrome,
    setIsPalindrome,
    arraySum,
    sum,
    setSum,
    arrayMissing,
    missingArray,
    setMissingArray,
    arrayRepeating,
    repeated,
    setRepeated,
    arrayRotate,
    rotatedArray,
    setRotatedArray,
    sortArrayDesc,
    checkPalindrome,
    sumOfTwoLargest,
    missingNumbers,
    mostRepeated,
    rotateArray,
  };
};

export default TestService;

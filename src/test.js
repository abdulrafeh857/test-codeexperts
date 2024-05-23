/* eslint-disable no-unused-vars */
import React from 'react';
import Questions from './components/questions';
import Button from './components/button';
import Divider from './components/divider';
import Answer from './components/answer';
import TestService from './test-service';

const Test = () => {
  const {
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
  } = TestService();

  return (
    <div className="flex flex-col justify-center items-center space-y-5 p-5  w-full h-full">
      <Questions question="Q1:Write a function that will take an array as input, sort, and return the array in descending order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]."></Questions>

      <Answer answer={'Orignal Array: [' + array.join(', ') + ']'} />

      <Button onClick={() => setSortedArray(sortArrayDesc([...array]))} text="Sort Array"></Button>

      <Answer answer={'Sorted Array: [' + sortedArray.join(', ') + ']'} />

      <Divider />

      <Questions question="Q2: Write a function that will take a string as input, check and return if it is palindrome or not. For example, if the string is “madam” the function should return true and if the string is “doctor” it should return false."></Questions>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a string" className="text-black min-h-16 rounded px-5	" />

      <Button onClick={() => setIsPalindrome(checkPalindrome(input))} text="Check Palindrome"></Button>

      <Answer answer={isPalindrome === null ? '' : isPalindrome ? 'This is a Palindrome' : 'This is not a Palindrome'} />

      <Divider />

      <Questions question="Q3: Write a function that will take an array as input and return the sum of the two largest numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30 because 11 and 19 are the largest numbers."></Questions>

      <Answer answer={'Orignal Array: [' + arraySum.join(', ') + ']'} />

      <Button onClick={() => setSum(sumOfTwoLargest([...arraySum]))} text="Sum of Two Largest Numbers"></Button>

      <Answer answer={sum === null ? '' : 'Sum of Two Largest Numbers: ' + sum} />

      <Divider />

      <Questions question="Q4: Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest entry is 9, and missing numbers are [0,5,8]"></Questions>

      <Answer answer={'Orignal Array: [' + arrayMissing.join(', ') + ']'} />

      <Button onClick={() => setMissingArray(missingNumbers([...arrayMissing]))} text="Missing Numbers"></Button>

      <Answer answer={'Missing Numbers: [' + missingArray.join(', ') + ']'} />

      <Divider />

      <Questions
        question={
          'Q5: Write a function that will take an array of numbers and return the number most repeated in the array with how many times it was repeated. For example, if the array is [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.'
        }
      ></Questions>

      <Answer answer={'Orignal Array: [' + arrayRepeating.join(', ') + ']'} />

      <Button onClick={() => setRepeated(mostRepeated([...arrayRepeating]))} text="Most Repeated"></Button>

      <Answer answer={repeated === null ? '' : repeated} />

      <Divider />

      <Questions
        question={
          'Write a function that will take an array as input, it will rotate the array to the right 1 time and return the rotated array. Rotation of the array means that each element is shifted right by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]'
        }
      ></Questions>

      <Answer answer={'Orignal Array: [' + arrayRotate.join(', ') + ']'}></Answer>

      <Button onClick={() => setRotatedArray(rotateArray([...arrayRotate]))} text="Rotate Array"></Button>

      <Answer answer={rotatedArray === null ? '' : 'Rotated Array: [' + rotatedArray.join(', ') + ']'} />

      <Divider />
    </div>
  );
};

export default Test;

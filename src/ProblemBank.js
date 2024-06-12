const ProblemBank = [
  {
    title: "Maximum Number in an Array",
    description: "Write a function to find the maximum number in an array. The function should return the maximum number if the array is not empty, and null if the array is empty.",
    sampleInput: "[1, 2, 3]",
    expectedOutput: "3",
    testCases: [
      { input: [1, 2, 3], output: 3 },
      { input: [10, 5, 20, 15], output: 20 },
      { input: [-1, -5, -10], output: -1 },
      { input: [5, 5, 5, 5], output: 5 },
      { input: [], output: null }
    ]
  },
  {
    title: "Reverse a String",
    description: "Write a function to reverse a string. The function should return the reversed string.",
    sampleInput: "'hello'",
    expectedOutput: "'olleh'",
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "racecar", output: "racecar" },
      { input: "12345", output: "54321" },
      { input: "", output: "" },
      { input: "abcdef", output: "fedcba" }
    ]
  },
  {
    title: "Check if a Number is Prime",
    description: "Write a function to check if a number is prime. The function should return true if the number is prime and false otherwise.",
    sampleInput: "2",
    expectedOutput: "true",
    testCases: [
      { input: 2, output: true },
      { input: 7, output: true },
      { input: 10, output: false },
      { input: 13, output: true },
      { input: 1, output: false }
    ]
  },
  {
    title: "Check if Two Strings are Anagrams",
    description: "Write a function to check if two strings are anagrams. The function should return true if the strings are anagrams and false otherwise.",
    sampleInput: "['listen', 'silent']",
    expectedOutput: "true",
    testCases: [
      { input: ["listen", "silent"], output: true },
      { input: ["hello", "world"], output: false },
      { input: ["debit card", "bad credit"], output: true },
      { input: ["astronomer", "moon starer"], output: true },
      { input: ["hello", "hey"], output: false }
    ]
  },
  {
    title: "Calculate the Factorial of a Number",
    description: "Write a function to calculate the factorial of a number. The function should return the factorial of the number.",
    sampleInput: "5",
    expectedOutput: "120",
    testCases: [
      { input: 5, output: 120 },
      { input: 0, output: 1 },
      { input: 1, output: 1 },
      { input: 10, output: 3628800 },
      { input: 3, output: 6 }
    ]
  },
  {
    title: "Check if a String is a Palindrome",
    description: "Write a function to check if a string is a palindrome. The function should return true if the string is a palindrome and false otherwise.",
    sampleInput: "'racecar'",
    expectedOutput: "true",
    testCases: [
      { input: "racecar", output: true },
      { input: "hello", output: false },
      { input: "level", output: true },
      { input: "madam", output: true },
      { input: "apple", output: false }
    ]
  },
  {
    title: "Sum of All Even Numbers in an Array",
    description: "Write a function to find the sum of all even numbers in an array. The function should return the sum of all even numbers in the array.",
    sampleInput: "[1, 2, 3, 4, 5, 6]",
    expectedOutput: "12",
    testCases: [
      { input: [1, 2, 3, 4, 5, 6], output: 12 },
      { input: [2, 4, 6, 8, 10], output: 30 },
      { input: [1, 3, 5, 7, 9], output: 0 },
      { input: [0, 2, 4, 6, 8], output: 20 },
      { input: [], output: 0 }
    ]
  },
  {
    title: "Second Largest Number in an Array",
    description: "Write a function to find the second largest number in an array. The function should return the second largest number if the array has at least two distinct numbers, and null if the array has less than two distinct numbers.",
    sampleInput: "[1, 2, 3, 4, 5]",
    expectedOutput: "4",
    testCases: [
      { input: [1, 2, 3, 4, 5], output: 4 },
      { input: [10, 20, 30, 40, 50], output: 40 },
      { input: [5, 5, 5, 5, 5], output: 5 },
      { input: [5, 10, 15, 5], output: 10 },
      { input: [], output: null }
    ]
  },
  {
    title: "Remove Duplicate Characters from a String",
    description: "Write a function to remove duplicate characters from a string. The function should return the string with duplicate characters removed.",
    sampleInput: "'hello'",
    expectedOutput: "'helo'",
    testCases: [
      { input: "hello", output: "helo" },
      { input: "banana", output: "ban" },
      { input: "mississippi", output: "misp" },
      { input: "aabbcc", output: "abc" },
      { input: "abcdef", output: "abcdef" }
    ]
  },
  {
    title: "Add Two Numbers",
    description: "Write a function to add two numbers. The function should return the sum of the two numbers.",
    sampleInput: "[1, 2]",
    expectedOutput: "3",
    testCases: [
      { input: [1, 2], output: 3 },
      { input: [0, 0], output: 0 },
      { input: [-1, 1], output: 0 },
      { input: [5, -3], output: 2 },
      { input: [10, 20], output: 30 }
    ]
  }
];

export default ProblemBank;

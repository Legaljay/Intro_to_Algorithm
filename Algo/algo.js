/*
VAR

length := 0
wordCount := 0
vowelCount := 0

BEGIN
    READ inputSentence character by character UNTIL reaching the point:
        currentChar = next character from inputSentence
        length = length + 1

        IF currentChar is a letter:
            IF currentChar is a vowel:
                vowelCount = vowelCount + 1

        IF currentChar is a space:
            IF previous character was not a space:
                wordCount = wordCount + 1

    wordCount = wordCount + 1

    output length
    output wordCount
    output vowelCount
END

*/

//implementation

function analyzeSentence(sentence) {
    let length = 0;      // Counter for the length of the sentence
    let wordCount = 0;   // Counter for the number of words in the sentence
    let vowelCount = 0;  // Counter for the number of vowels in the sentence
  
    for (let i = 0; i < sentence.length; i++) {
      let currentChar = sentence[i];
      length++;  // Increment length for each character in the sentence
  
      if (/[a-zA-Z]/.test(currentChar)) {
        // Check if the current character is a letter
        if (/[aeiouAEIOU]/.test(currentChar)) {
          // Check if the current character is a vowel
          vowelCount++;  // Increment vowelCount if it is a vowel
        }
      }
  
      if (currentChar === ' ') {
        // Check if the current character is a space
        if (i > 0 && sentence[i - 1] !== ' ') {
          // Check if the previous character was not a space (to handle multiple spaces between words)
          wordCount++;  // Increment wordCount for each word separated by a space
        }
      }
    }
  
    wordCount++;  // Increment wordCount for the last word after the final space
  
    // Output the results
    console.log('Length of the sentence: ' + length);
    console.log('Number of words in the sentence: ' + wordCount);
    console.log('Number of vowels in the sentence: ' + vowelCount);
  }
  
  // Example usage:
  const sentence = 'Hello, how are you today?';
  analyzeSentence(sentence);
  
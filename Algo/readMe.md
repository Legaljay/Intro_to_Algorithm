Problem:
At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:
The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.


Solution:
Initialize three variables as counters:

length to keep track of the length of the sentence (initially set to 0).
wordCount to count the number of words (initially set to 0).
vowelCount to count the number of vowels (initially set to 0).
Read the input sentence character by character until reaching the point (end of the sentence):

Read the next character from the input.

Increment length by 1.

If the current character is a letter:

If the character is a vowel (e.g., 'a', 'e', 'i', 'o', 'u'), increment vowelCount by 1.
If the current character is a space:

If the previous character was not a space (to handle multiple spaces between words), increment wordCount by 1.
Increment wordCount by 1 (accounting for the last word after the final space).

Print the results:

Output the value of length as the length of the sentence.
Output the value of wordCount as the number of words in the sentence.
Output the value of vowelCount as the number of vowels in the sentence.

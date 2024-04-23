// Task: Reverse Words in a Sentence
// Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
// The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

// Constraints:
// - Words are separated by spaces, and the sentence may contain leading or trailing spaces.
// - Consider only spaces as word separators (no punctuation splitting).
export function reverseWords(sentence) {
    let reversed = sentence.trim().split(/\s+/).reverse().join(' ');
    return reversed;
}
console.log(reverseWords(sentence));

// Task: Word Frequency Counter
// Given a string of text, write a function `wordFrequency` that counts the
// frequency of each unique word in the text. The function should return an
// object where the keys are the unique words and the values are the counts
// of each word. The comparison of words should be case-insensitive.

// Additional instructions:
// - Words are separated by spaces, and the text may contain punctuation.
// - The function should not count punctuation as part of the words.
// - Return the result with words in lowercase.
export function wordFrequency(text) {
    let words = text.toLowerCase().match(/\b\w+\b/g);
    let frequencies = {};

    for (let word of words) {

        if (frequencies[word]) {
            frequencies[word]++;
        }
        else {
            frequencies[word] = 1;
        }
    }
    return frequencies;
}
console.log(wordFrequency(text));
// Task: Top N Frequent Words
// Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
// The function should return an array of tuples where each tuple contains a word and its frequency,
// sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

// Constraints:
// - Text is case-insensitive.
// - Words are separated by spaces, and the text may contain punctuation.
// - Ignore punctuation, and consider only alphabetic characters for word separation.
//export function topNFrequentWords(text, n) {
//}

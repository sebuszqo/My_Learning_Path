import {levenshteinDistance} from './levenshtein'

import {strict as assert} from "assert";

assert.throws(
    () => levenshteinDistance("Sebastian", undefined),
    {
        message: "Incorrect input type."
    }
    , 'levenshteinDistance() does not throw an error.'
)

assert.doesNotThrow(
    () => levenshteinDistance("Sebastian", "Tak"),
    'levenshteinDistance() throws an error.'
)

assert.doesNotThrow(
    () => levenshteinDistance("", ""),
    'levenshteinDistance() throws an error on empty strings.'
)

assert.strictEqual(
    levenshteinDistance("granit", "granat"),
    1,
    'granit to granat has another distance than expected'
)

assert.strictEqual(
    levenshteinDistance("", ""),
    0,
    'empty string should return 0'
)


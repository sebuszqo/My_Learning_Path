export function levenshteinDistance(s1: string, s2: string): number {

    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        throw new Error("Incorrect input type.")
    }

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs: number[] = [];

    for (let i = 0, len = s1.length; i <= len; i++) {
        let lastValue = i;

        for (let j = 0, jLen = s2.length; j <= jLen; j++) {
            // since we look at (i - 1) and (j - 1) later,
            // these checks make sure they're both > 0;
            if (i == 0) costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];

                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }

        if (i > 0) costs[s2.length] = lastValue;
    }

    return costs[s2.length];
}

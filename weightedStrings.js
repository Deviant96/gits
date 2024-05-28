const sumArray = arr => {
    return arr.reduce((a, b) => a + b, 0);
};

function weightedStrings(str, queries) {
    // Memberi bobot pada masing-masing abjad dalam alfabet
    var anum = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };

    // Mengganti abjad dengan bobot dalam queries
    const res = str.split('').map((x) => {
        return x.length === 1 ? anum[x] : ' ';
    });
    const arr = [...res];

    const resLength = res.length;
    for (let i = 0; i < resLength; i++) {
        if (res[i] === res[i - 1]) {
            arr[i] = res[i] + arr[i - 1];
        } else {
            arr[i] = res[i];
        }
    }


    // Mengganti isi dari queries dengan 'YES' atau 'NO' 
    // secara berurutan sesuai eksistensinya di array arr
    const queriesLength = queries.length;
    for (let x = 0; x < queriesLength; x++) {
        queries[x] = arr.indexOf(queries[x]) !== -1 ? 'YES' : 'NO';
    }

    return queries;
}

// Test cases
console.log(weightedStrings('accdggxxzz', [24, 48, 25, 49, 50, 72, 4, 28]));
console.log(weightedStrings('abbcccd', [1, 3, 9, 8]));
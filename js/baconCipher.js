function baconCipher() {
    var cipher = {
        A: 'AAAAA',
        a: 'aaaaa',
        B: 'AAAAB',
        b: 'aaaab',
        C: 'AAABA',
        c: 'aaaba',
        D: 'AAABB',
        d: 'aaabb',
        E: 'AABAA',
        e: 'aabaa',
        F: 'AABAB',
        f: 'aabab',
        G: 'AABBA',
        g: 'aabba',
        H: 'AABBB',
        h: 'aabbb',
        I: 'ABAAA',
        i: 'abaaa',
        J: 'ABAAA',
        j: 'abaaa',
        K: 'ABAAB',
        k: 'abaab',
        L: 'ABABA',
        l: 'ababa',
        M: 'ABABB',
        m: 'ababb',
        N: 'ABBAA',
        n: 'abbaa',
        O: 'ABBAB',
        o: 'abbab',
        P: 'ABBBA',
        p: 'abbba',
        Q: 'ABBBB',
        q: 'abbbb',
        R: 'BAAAA',
        r: 'baaaa',
        S: 'BAAAB',
        s: 'baaab',
        T: 'BAABA',
        t: 'baaba',
        U: 'BAABB',
        u: 'baabb',
        V: 'BAABB',
        v: 'baabb',
        W: 'BABAA',
        w: 'babaa',
        X: 'BABAB',
        x: 'babab',
        Y: 'BABBA',
        y: 'babba',
        Z: 'BABBB',
        z: 'babbb'
    }
    var str = document.getElementById("text1").value;
    var newStr = null;
    var k;
    var output = '';

    for (k = 0; k < (str.length); k++) {
        var c = str[k];

        if (cipher[c] != undefined) {
            newStr = cipher[c];
        } else {
            newStr = c;
        }

        output += newStr;
    }

    document.getElementById("text2").innerHTML = output;
}
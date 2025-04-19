export default {
    // ✅ Caesar Cipher
    caesar: {
        requiresKey: true,
        encrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            key = key.toLowerCase()
            return text.replace(/[a-z]/gi, c => {
                const code = c.charCodeAt(0)
                const base = code >= 97 ? 97 : 65
                return String.fromCharCode(((code - base + +key) % 26) + base)
            })
        },
        decrypt: (text, key = 3) => {
            return text.replace(/[a-z]/gi, c => {
                const code = c.charCodeAt(0)
                const base = code >= 97 ? 97 : 65
                return String.fromCharCode(((code - base - +key + 26) % 26) + base)
            })
        }
    },

    // ✅ vigenere Cipher
    vigenere: {
        requiresKey: true,
        encrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            key = key.toLowerCase()
            let result = ''
            for (let i = 0, j = 0; i < text.length; i++) {
                const c = text[i]
                if (/[a-z]/i.test(c)) {
                    const base = c === c.toUpperCase() ? 65 : 97
                    result += String.fromCharCode(
                        (c.charCodeAt(0) - base + key.charCodeAt(j % key.length) - 97) % 26 + base
                    )
                    j++
                } else {
                    result += c
                }
            }
            return result
        },
        decrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            key = key.toLowerCase()
            let result = ''
            for (let i = 0, j = 0; i < text.length; i++) {
                const c = text[i]
                if (/[a-z]/i.test(c)) {
                    const base = c === c.toUpperCase() ? 65 : 97
                    result += String.fromCharCode(
                        (c.charCodeAt(0) - base - (key.charCodeAt(j % key.length) - 97) + 26) % 26 + base
                    )
                    j++
                } else {
                    result += c
                }
            }
            return result
        }
    },

    // ✅ ROT13 (no key needed)
    rot13: {
        requiresKey: false,
        encrypt: (text) => {
            return text.replace(/[a-z]/gi, c => {
                const base = c >= 'a' ? 97 : 65
                return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base)
            })
        },
        decrypt: (text) => {
            return text.replace(/[a-z]/gi, c => {
                const base = c >= 'a' ? 97 : 65
                return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base)
            })
        }
    },

    // ✅ AutoKey Cipher
    'auto-key': {
        requiresKey: true,
        encrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            text = text.toLowerCase().replace(/[^a-z]/g, '')
            key = (key + text).slice(0, text.length)
            return text.split('').map((c, i) =>
                String.fromCharCode(((c.charCodeAt(0) + key.charCodeAt(i) - 2 * 97) % 26) + 97)
            ).join('')
        },
        decrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            text = text.toLowerCase().replace(/[^a-z]/g, '')
            let result = ''
            for (let i = 0; i < text.length; i++) {
                const k = i < key.length ? key[i] : result[i - key.length]
                result += String.fromCharCode(((text.charCodeAt(i) - k.charCodeAt(0) + 26) % 26) + 97)
            }
            return result
        }
    },

    // ✅ Keyed Transposition Cipher
    keyed: {
        requiresKey: true,
        encrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            const cols = key.length
            const padded = text.padEnd(Math.ceil(text.length / cols) * cols, ' ')
            const rows = padded.length / cols
            let table = Array.from({ length: rows }, (_, r) =>
                padded.slice(r * cols, r * cols + cols).split('')
            )
            const sortedKey = [...key].map((k, i) => ({ char: k, index: i }))
                .sort((a, b) => a.char.localeCompare(b.char))
            return sortedKey.map(k => table.map(row => row[k.index]).join('')).join('')
        },
        decrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            const cols = key.length
            const rows = Math.ceil(text.length / cols)
            const sortedKey = [...key].map((k, i) => ({ char: k, index: i }))
                .sort((a, b) => a.char.localeCompare(b.char))
            const colLength = Math.floor(text.length / cols)
            let pos = 0
            const colsData = {}
            for (let i = 0; i < cols; i++) {
                const k = sortedKey[i]
                colsData[k.index] = text.slice(pos, pos + rows)
                pos += rows
            }
            let result = ''
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    result += colsData[c][r] || ''
                }
            }
            return result.trim()
        }
    },

    // ✅ Columnar Transposition Cipher
    column: {
        requiresKey: true,
        encrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            const numCols = key.length
            const numRows = Math.ceil(text.length / numCols)
            const padded = text.padEnd(numRows * numCols, ' ')
            const table = []
            for (let r = 0; r < numRows; r++) {
                table.push(padded.slice(r * numCols, (r + 1) * numCols).split(''))
            }
            const sortedKey = [...key].map((char, i) => ({ char, i }))
                .sort((a, b) => a.char.localeCompare(b.char))
            return sortedKey.map(k => table.map(row => row[k.i]).join('')).join('')
        },
        decrypt: (text, key) => {
            if (!key) return '⚠️ أدخل مفتاح.'
            const numCols = key.length
            const numRows = Math.ceil(text.length / numCols)
            const sortedKey = [...key].map((char, i) => ({ char, i }))
                .sort((a, b) => a.char.localeCompare(b.char))
            const colLength = numRows
            let pos = 0
            const columns = {}
            for (let i = 0; i < sortedKey.length; i++) {
                columns[sortedKey[i].i] = text.slice(pos, pos + colLength).split('')
                pos += colLength
            }
            let result = ''
            for (let r = 0; r < numRows; r++) {
                for (let c = 0; c < numCols; c++) {
                    result += columns[c][r] || ''
                }
            }
            return result.trim()
        }
    },
    // // ✅ Keyless Transposition Cipher
    // keyless: {
    //     requiresKey: false,
    //     encrypt: (text) => {
    //         let even = '', odd = ''
    //         for (let i = 0; i < text.length; i++) {
    //             (i % 2 === 0 ? even : odd) += text[i]
    //         }
    //         return even + odd;
    //     },
    //     decrypt: function (text) {
    //         const mid = Math.ceil(text.length / 2)
    //         const even = text.slice(0, mid)
    //         const odd = text.slice(mid)
    //         let result = ''
    //         for (let i = 0; i < mid; i++) {
    //             result += even[i] || ''
    //             result += odd[i] || ''
    //         }
    //         return result
    //     }
    // }, // تأكد من وجود فاصلة هنا إذا كان هذا جزء من كائن أكبر


}

Berikut, jawaban soal nomor dua yang mempunyai kompleksitas time O(n) dan space O(n) yang menurut saya merupakan kompleksitas terendah yang bisa saya capai.

# Time Complexity

1. Pemisahan bracket menjadi array
```js
brackets = brackets.replaceAll(' ', '').split('');
```
- `replaceAll` adalah O(n)
- `split` adalah O(n)

2. Loop
```js
for (let i = 0; i < brackets.length; i++) {
  const currentIteration = brackets[i];
}
```

- Loop hanya melakukan eksekusi pengulangan sekali saja (O(n))

3. Operasi pengandaian
```js
if (currentIteration === '(' || currentIteration === '{' || currentIteration === '[') {
  openings.push(currentIteration);
}
if (currentIteration === ')') {
  if (openings.pop() !== '(') return 'NO';
}
```
- `push` dan `pop` method yang dipakai merupakan kompleksitas waktu yang konstan (O(1))

# Space Complexity
1. Memori penyimpanan 
```js
brackets = brackets.replaceAll(' ', '').split('');
```
- Merupakan kompleksitas terendah (O(n))

2. Penyimpanan bracket
```js
const openings = [];
```
- Variabel `openings` digunakan untuk menyimpan bracket opening selama iterasi berlangsung, merupakan kompleksitas O(n)
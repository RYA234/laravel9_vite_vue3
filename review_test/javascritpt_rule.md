# コーディングルール
javascriptコーディングルール

## 記法について
アッパーキャメル記法を採用
```
//Good
let AmountWithTax;

//Bad
let amountWithTax;
let amount_with_tax;

```


## 配列のfor文について
for ofを使う

```
// Prepare
const students = [{id: 1, name: 'Tanaka', grade: 'A'},
{id: 2, name: 'Suzuki', grade: 'B'},
{id: 3, name: 'Kimura', grade: 'C'}]


// Good 
for (let student of students) {}

// Bad
for (let i in students) {}

```



## if文の書き方について
比較したい変数は比較演算子の左側に書く

```
//Good
if(age >= 10)

//Bad
if(10 <= age )

if(age - 10 >= 0) 

if( 0 <= age -10)

```

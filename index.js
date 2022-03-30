const type = (a) => {
    return typeof a;
};
const evenOrOdd = (number) => {
    return !(number % 2);
};
const stringOrNumber = (a) => {
    const b = type(a);
    if (b === 'string') {
        return a;
    } else if (b === 'number') {
        return evenOrOdd(a);
    }
};
const mulEvenAndOdd1 = (a) => {
    if (evenOrOdd(a)) {
        return a *= 2;
    } else {
        return a *= 3;
    }
};
const mulEvenAndOdd2 = (a) => {
    return (evenOrOdd(a)) ? a *= 2 : a *= 3;
};
const lastFunc = (a, b) => {
    return (evenOrOdd(+a) && evenOrOdd(+b)) ? (+a + +b) :
        (evenOrOdd(+a) || evenOrOdd(+b)) ? (+a - +b) :
            (+a * +b);
};
console.log('В последующих строках: true - четное число, false - нечетное число');
console.log('Определение типа данных в переменной. Случай 1: ' + stringOrNumber(9));
console.log('Определение типа данных в переменной. Случай 2: ' + stringOrNumber('9'));
console.log('Определение четности/нечетности числа и последующие действия с числом: ' + mulEvenAndOdd1(1));
console.log('Определение четности/нечетности числа и последующие действия с числом: ' + mulEvenAndOdd2(2));
console.log('Хз как кратко описать, что делает эта функция (⊙ˍ⊙): ' + lastFunc(2, 4));
console.log('Хз как кратко описать, что делает эта функция (⊙ˍ⊙): ' + lastFunc(2, 3));
console.log('Хз как кратко описать, что делает эта функция (⊙ˍ⊙): ' + lastFunc(1, 3));
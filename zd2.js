let num = prompt('введите число ')
if (typeof num === 'number'){
    console.log(num + ' - число')
} else if (typeof num === 'string'){
    console.log(num + ' - строка')
} else if (typeof num === 'boolean'){
    console.log(num + ' - логический тип')
} else {
    console.log('Тип ' + num + ' не определён')
}
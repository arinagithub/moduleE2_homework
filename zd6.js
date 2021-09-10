let arr = [1, 1, 2];

let x;
let equal = false;

for (i = 0; i < arr.length; i++){

    if (i === 0){

        x = arr[i];

    } else if (x == arr[i]){

        equal = true;

    } else {

        equal = false;
        break;

    }
}

console.log(equal);
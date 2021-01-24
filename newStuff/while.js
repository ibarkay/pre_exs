'use-strict';

let limit =0;

while (limit < 5){
    if (limit === 4 ){
        break;
    }
    console.log(limit +=1);
}

let condition = true;

do {
    console.log('excute once');
    condition = false;
}while (condition);
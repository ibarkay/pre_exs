//7-Boom by ibarkay.
'use-strict'

for (var i = 1; i < 100; i++){
    if (i % 7 == 0 || String(i).includes('7')){
        console.log('BooM!');
    }else {
        console.log(i);
    }
}
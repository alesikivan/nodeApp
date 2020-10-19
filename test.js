
function test(r){
    var { myObj1: arr, myObj1:ideal} = r;
    console.log(arr);
}

var myObj1 = {
    name: 1
}

var myObj2 = {
    name: 2
}

test( {myObj1, myObj2} )

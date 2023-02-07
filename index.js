const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
    let index = arr.indexOf(item);
        if (arr !== -1) 
            array.splice(index, 1);
        
    return arr;
}

console.log(removeElement(array, 5));
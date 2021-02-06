// Your code here:


for (var i = 99; i >= 1; i--) {
    var message = '';
    if (i == 1) {
        message = i + " bottle of milk on the wall, " + i + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall."
        message += "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";
    } else {
        message = i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + (i - 1) + " bottles of milk on the wall.";
    }
    console.log(message);

}


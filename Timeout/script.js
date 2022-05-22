function timeouttimeout() {
    console.log("it worked")
    setTimeout(timeouttimeout, 5000);
}

function middle() {
    console.log('middle')
}

function wowholdup() {
    console.log('start')
    setTimeout(middle, 5000)
    console.log('end')
}//start and end print then 5 seconds after middle function prints out middle

wowholdup()

setTimeout(wowholdup, 10000)

function first() {
    console.log('You')
}

function second() {
    console.log('Are')
}

function third() {
    console.log('Cool')
}

setTimeout(first, 11000)
setTimeout(second, 12000)
setTimeout(third, 13000)
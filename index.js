// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat() {
    return cats.push("Ralph")
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop("name")
}

function destructivelyRemoveFirstCat() {
    return cats.shift("name")
}

function appendCat() {
    const aCats = [...cats, "Broom"]
    return aCats
}

function prependCat() {
    const pCats = ["Arnold", ...cats]
    return pCats
}

function removeLastCat() {
    const slicedCat1 = cats.slice(0, -1)
    return slicedCat1
}

function removeFirstCat() {
    const slicedCatLast = cats.slice(1)
    return slicedCatLast
}
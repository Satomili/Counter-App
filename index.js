let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalCount = 0 

function increment() {
    count += 1
    countEl.textContent = count
    totalCount += 1 
    totalEl.textContent = "Total: " + totalCount
}

function decrement() {
    count -= 1
    countEl.textContent = count
    totalCount -= 1 
    totalEl.textContent = "Total: " + totalCount
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

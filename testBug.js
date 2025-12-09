// testBug.js
// This file intentionally contains simple bugs for BugSmith to fix.

function addNumbers(a, b) {
    // BUG 1: Should add, but subtracts
    return a - b
}

// BUG 2: Missing semicolon & inconsistent formatting
const message = "Hello from BugSmith"
console.log(message)

function fetchUser() {
    // BUG 3: Returns undefined instead of object
    return
}

// BUG 4: loadData never returns the JSON data
async function loadData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        // Missing: return res.json()
    } catch (err) {
        console.error("Load error!", err)
    }
}

module.exports = {
    addNumbers,
    fetchUser,
    loadData
}

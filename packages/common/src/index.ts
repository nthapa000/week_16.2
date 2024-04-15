export const VALUE = "nishant thapa"

export const BACKEND_URL = "https://api.google.com"
// Shared irrespective of frontend and backedn
// don't put react component

// step1: cd common
// step2: In common/package.json,
// "exports" : {
// "./config": "./dist/index.js"
// },
// step3: tsc -b (in common folder)
// step4: tsc -b (in backend folder)
// step5: node dist/index.js

// This should work!
// ************************************
// globalState.js
// ************************************

let globalStateCount = 0; // Initialise globalStateCount

// *********************************
// setGlobalState to change globalState
// *********************************
export function getGlobalStateCount(recAction) {    
    switch (recAction) {
        case "INCREMENT":
            console.log("**** setGlobalState-INCREMENT ****");
            return (globalStateCount += 1); // increment global count
        case "DECREMENT":
            console.log("**** setGlobalState-DECREMENT ****");
            return (globalStateCount -= 1); // decrement global count
        default:
            console.log("**** setGlobalState-STATE ****");
            return (globalStateCount); // return global count
    }
}

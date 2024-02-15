const saveBTN = document.getElementById("save");
const forTrainData_Input = document.getElementById("forTrainData_Input");
const forTrainData_Output = document.getElementById("forTrainData_Output");

let saveDataNumber = 0;

let newInput_Array = [], newOutput_Array = [];

saveBTN.onclick = () => {
    if (DebugMod) {
        newInput_Array.push(PreprocessedArray);
        newOutput_Array.push([saveDataNumber]);

        saveDataNumber++;

        if (saveDataNumber > 9) {
            saveDataNumber = 0;
        }

        const jsData = {
            Input_Array: newInput_Array,
            Output_Array: newOutput_Array
        }

        forTrainData_Input.innerHTML = `${JSON.stringify(jsData.Input_Array)}`;
        forTrainData_Output.innerHTML = `${JSON.stringify(jsData.Output_Array)}`;
    }
}

// newInput_Array.splice(newInput_Array.length - 1, 1); newOutput_Array.splice(newOutput_Array.length - 1, 1); saveDataNumber--;
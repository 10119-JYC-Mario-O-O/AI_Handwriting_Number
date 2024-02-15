function organizeOutput(output, outputUnit) {
    let hiddenArray = [], organizedOutput = [];
    
    for (let i = 0; i < output.length / outputUnit; i++) {
        hiddenArray.push(output.slice(i * outputUnit, (i + 1) * outputUnit));
    }

    for (let i = 0; i < hiddenArray.length; i++) {
        let readyArray = [];

        for (let j = 0; j < outputUnit; j++) {
            if (hiddenArray[i][j] >= 0.9) {
                readyArray.push(j);
            }
        }

        if (DebugMod) {
            console.log(hiddenArray[i]);
        }
        
        if (readyArray.length == 1) {
            organizedOutput.push(readyArray[0]);
        } else {
            organizedOutput.push("?");
        }
    }

    return organizedOutput;
}
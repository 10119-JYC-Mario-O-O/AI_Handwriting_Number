function Preprocessing(Array_Data) {
    const rmZ_Array = removeZeros(Array_Data);
    const rsOXO_Array = resize_One_X_One(rmZ_Array);
    const rsMoTF = resize_Mult_of_TwentyFive(rsOXO_Array);

    const PreprocessedArray = resize_Big_or_Small(rsMoTF);

    if (PreprocessedArray.length == 25 && PreprocessedArray[0].length == 25) {
        return PreprocessedArray;
    } else {
        return new Array(25).fill().map(() => new Array(25).fill(0));
    }
}

function removeZeros(Array_Data) {
    let Array_Height = 0, Array_StartX = 100, Array_EndX = 0;
    let Hidden_Array = [], resultArray = [];

    for (let y = 0; y < 100; y++) {
        if (Array_Data[y].includes(1)) {
            Hidden_Array.push(Array_Data[y]);

            Array_Height++;
        }
    }

    for (let y = 0; y < Array_Height; y++) {
        for (let x = 0; x < 100; x++) {
            if (Hidden_Array[y][x] == 1) {
                if (Array_StartX > x) {
                    Array_StartX = x;
                }

                if (Array_EndX < x) {
                    Array_EndX = x;
                }
            }
        }
    }

    for (let y = 0; y < Array_Height; y++) {
        let pushArray = [];

        for (let x = Array_StartX; x <= Array_EndX; x++) {
            pushArray.push(Hidden_Array[y][x]);
        }

        resultArray.push(pushArray);
    }

    return resultArray;
}

function resize_One_X_One(Array_Data) {
    if (Array_Data.length == 0) {
        return new Array;
    }

    const Array_Height = Array_Data.length;

    const Array_Width = Array_Data[0].length;

    let resultArray = [];

    if (Array_Height != Array_Width) {
        if (Array_Width == Math.max(Array_Height, Array_Width)) {
            const newArray_Top = Math.floor((Array_Width - Array_Height) / 2);

            for (let y = 0; y < newArray_Top; y++) {
                Array_Data.unshift(new Array(Array_Width).fill(0));
            }

            for (let y = newArray_Top + Array_Height; y < Array_Width; y++) {
                Array_Data.push(new Array(Array_Width).fill(0));
            }
        } else {
            const newArray_Left = Math.floor((Array_Height - Array_Width) / 2);

            for (let y = 0; y < Array_Height; y++) {
                for (let x = 0; x < newArray_Left; x++) {
                    Array_Data[y].unshift(0);
                }

                for (let x = newArray_Left + Array_Width; x < Array_Height; x++) {
                    Array_Data[y].push(0);
                }
            }
        }
    }

    resultArray = Array_Data;

    return resultArray;
}

function resize_Mult_of_TwentyFive(Array_Data) {
    if (Array_Data.length == 0) {
        return new Array;
    }

    const Array_Height = Array_Data.length;
    const newArray_Height = Math.ceil(Array_Height / 25) * 25;
    const newArray_Left = Math.floor((newArray_Height - Array_Height) / 2);

    let resultArray = [];

    if (Array_Height != newArray_Height) {
        for (let y = 0; y < Array_Height; y++) {
            for (let x = 0; x < newArray_Left; x++) {
                Array_Data[y].unshift(0);
            }

            for (let x = newArray_Left + Array_Height; x < newArray_Height; x++) {
                Array_Data[y].push(0);
            }
        }

        for (let y = 0; y < newArray_Left; y++) {
            Array_Data.unshift(new Array(newArray_Height).fill(0));
        }

        for (let y = newArray_Left + Array_Height; y < newArray_Height; y++) {
            Array_Data.push(new Array(newArray_Height).fill(0));
        }
    }

    resultArray = Array_Data;

    return resultArray;
}

function resize_Big_or_Small(Array_Data) {
    if (Array_Data.length == 0) {
        return new Array;
    }

    let resultArray = [];

    const ratio = Array_Data.length / 25;

    for (let y = 0; y < 25; y++) {
        let hiddenArray = [];
        
        for (let x = 0; x < 25; x++) {
            let average = 0;
            
            for (let dy = 0; dy < ratio; dy++) {
                for (let dx = 0; dx < ratio; dx++) {
                    average += Array_Data[y * ratio + dy][x * ratio + dx];
                }
            }

            average /= ratio * ratio;

            hiddenArray.push(Math.round(average));
        }

        resultArray.push(hiddenArray);
    }
    
    return resultArray;
}
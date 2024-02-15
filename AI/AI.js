(async () => {
    const outputUnit = 10;
    
    const model = await tf.loadLayersModel('My Model/My Model.json'); // Trained 50,000 Times

    // // const input_layer = tf.input({ shape: [25, 25] });
    // // const flatten_layer = tf.layers.flatten().apply(input_layer);
    // // const hidden_layer1 = tf.layers.dense({ units: 125, activation: 'relu' }).apply(flatten_layer);
    // // const hidden_layer2 = tf.layers.dense({ units: 125, activation: 'relu' }).apply(hidden_layer1);
    // // const output_layer = tf.layers.dense({ units: outputUnit, activation: 'softmax' }).apply(hidden_layer2);
  
    // // const model = tf.model({inputs: input_layer, outputs: output_layer});

    // const compileParam = {
    //     optimizer: 'adam', 
    //     loss: 'sparseCategoricalCrossentropy', 
    //     metrics: ['accuracy'] 
    // };

    // model.compile(compileParam);
  
    // const xs = tf.tensor3d(Input_Array, [Input_Array.length, 25, 25]);
    // const ys = tf.tensor2d(Output_Array, [Output_Array.length, 1]);

    // let fitParam = {
    //     epochs: 25000, 
    //     callbacks: {
    //         onEpochEnd: async (epoch, logs) => {
    //             document.getElementById('trainOutput').innerHTML = 
    //                 `Epoch ${epoch + 1}/${fitParam.epochs}, Loss: ${logs.loss}, Accuracy: ${logs.acc}`;
    //         }
    //     }
    // };

    // document.getElementById("aiSave").onclick = (e) => {
    //     model.save('downloads://My Model');
    // }

    // await model.fit(xs, ys, fitParam);

    document.getElementById("go").onclick = (e) => {
        PreprocessedArray = Preprocessing(Drawing);
        document.getElementById("aiOutput").innerHTML = goAI(model, outputUnit, [PreprocessedArray]);
    }
})();
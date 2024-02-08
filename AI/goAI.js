function goAI(model, outputUnit, input) {
    const testXs = tf.tensor3d(input, [input.length, 25, 25]);
    const testYs = model.predict(testXs).dataSync();

    const predictions = organizeOutput(testYs, outputUnit);

    return predictions;
}
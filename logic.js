const predictionsCache = {};

function getPrediction(latestIssueNumber) {
    if (predictionsCache[latestIssueNumber]) {
        return predictionsCache[latestIssueNumber];
    }

    const prediction = Math.random() < 0.5 ? 'Big' : 'Small';
    predictionsCache[latestIssueNumber] = prediction;
    
    return prediction;
}

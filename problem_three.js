function getMoneySpent(keyboards, drives, b) {
    let highestPrice;
    let tempHighestPrice;
    for(let i = 0; i < keyboards.length; i++) {
        for(let k = 0; k < drives.length; k++) {
            let sum  = keyboards[i] + drives[k];
            if(sum <= b) {
                if(sum > highestPrice) {
                    highestPrice = sum;
                }
            }
            else {
                highestPrice = -1
            }
        }
    }
    return highestPrice;
}

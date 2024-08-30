const width = 125
const height = 125

setDocDimensions(width, height)

const sharpness = bt.randIntInRange(35,42)
const tall = bt.randIntInRange(85,92)
const berry = bt.catmullRom([[75, 25], [90, sharpness], [100, 80], [75, tall], [50,80], [60,sharpness], [75, 25]])
const leaves = bt.catmullRom([[75, tall], [50, tall+8], [47, tall+12], [75, tall], [62, tall+10],[65, tall+13], [75,tall], [72,tall + 9],[75, tall+14], [75, tall], [76, tall+5], [85, tall+12], [75, tall], [85, tall+7], [97, tall+11], [75, tall]])
drawLines([berry])
drawLines([leaves])

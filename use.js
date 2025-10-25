function useMe (arr) {
    const duplicates = arr.filter((el, index, self) => self.indexOf(el) !== self.lastIndexOf(el))
    const sortedArr = arr.sort()
    const missing = []
    for (let index = 0; index < sortedArr.length; index++) {
        const element = sortedArr[index];
        if (sortedArr[index + 1] - element > 1) {
            missing.push(element + 1)
        }
    }
    return [...missing, duplicates[1]]
}

console.log(useMe([2,3]))
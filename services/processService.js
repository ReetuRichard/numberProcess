const files = {
    A: [],
    B: [],
    C: [],
    D: []
};

const filesSet = new Set();

const processNumber = (number) => {
    const result = number * 7;

    if (result > 140) {
        files.A.push(number);
        filesSet.add('A');
    } else if (result > 100) {
        files.B.push(number);
        filesSet.add('B');
    } else if (result > 60) {
        files.C.push(number);
        filesSet.add('C');
    } else {
        files.D.push(number);
        filesSet.add('D');
    }

    return filesSet.size === 4;
};

const getFiles = () => files;

module.exports = {
    processNumber,
    getFiles
};

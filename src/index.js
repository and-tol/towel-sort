// You should implement your task here.
/**
 *
 * @param {Array} matrix
 */
module.exports = function towelSort(matrix) {
    let result = [];

    if (!arguments.length || !matrix.length) {
        return result;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i])) {
            if (i % 2) {
                result.push(...matrix[i].reverse());
            } else {
                result.push(...matrix[i]);
            }
        } else {
            result.push(matrix[i]);
        }
    }
    return result;
};


// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
    if(matrix == undefined){
        return newArray
        }else if(matrix.length <= 1){
        return newArray
        } else if(matrix.length > 1 && matrix.length < 4) {
          for(let i = 0; i = matrix.length; i++){
            matrix[1].reverse()
            return matrix.join().split(',').map(v=> +v)}
        }else {
            matrix[1].reverse()
            matrix[3].reverse()
            return matrix.join().split(',').map(v=> +v)
        }
}

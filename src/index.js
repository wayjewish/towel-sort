
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  if (matrix) {
    matrix.forEach(function(item, index) {
			if (index % 2 != 0) {
				arr = arr.concat(item.reverse());
			}else{
				arr = arr.concat(item);
			}
		});
  }

  return arr;
}

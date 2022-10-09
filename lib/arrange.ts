export const padArray = (array: number[], length: number) => {
	const changeSize = length - array.length
	if (changeSize > 0) {
		return array.concat(Array(changeSize).fill(0))
	}
	return array.slice(0, length)
}

export const masonryArrange = (array: number[], columns: number = 3) => {
	const newLength: number = array.length % columns ? array.length + columns - (array.length % columns) : array.length

	const paddedArray = padArray(array, newLength)

	const rowLength = newLength / columns

	const rows = Array.from(Array(rowLength).keys())

	const resized = rows.map((row: number, index: number) =>
		paddedArray.slice(columns * index, columns * index + rowLength)
	)

	return resized.map((col, i) => resized.map((row) => row[i])).flat()
}


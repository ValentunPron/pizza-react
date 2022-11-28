

export const setSortBy = (name: string) => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setCategory = (index: number) => ({
	type: 'SET_CATEGORY',
	payload: index,
});


export const setSortBy = (name: string) => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setCategory = (name: string) => ({
	type: 'SET_CATEGORY',
	payload: name,
});
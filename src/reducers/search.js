export default function(state = [], action) {
	switch (action.type) {
		case 'SEARCH_LIST_LOADING':
			return {
				isLoading: true,
				items: state.items
			};
		case 'SEARCH_LIST_LOADED':
			return {
				isLoading: false,
				items: state.items.concat([action.data])
			};
		default:
			return state;
	}
}
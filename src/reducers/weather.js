export default function(state = [], action) {
	switch (action.type) {
		case 'WEATHER_LOADING':
			return {
				isLoading: true,
				items: state.items
			};
		case 'WEATHER_LOADED':
			return {
				isLoading: false,
				items: state.items.concat([action.data])
			};
		case 'WEATHER_LIST_LOADED':
			return {
				isLoading: false,
				items: state.items.concat(action.data.list)
			};
		case 'FORCAST_5_DAYS_LOADED':
			return {
				isLoading: false,
				items: state.items,
				forcast: action.data
			}
		default:
			return state;
	}
}
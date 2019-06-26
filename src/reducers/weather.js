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
		case 'WEADER_SEARCHED_ADD':
			return {
				isLoading: false,
				items: (() => {
					return state.items.length < 4 ? state.items.concat([action.data]) : state.items.slice(1).concat([action.data])
				})()
			}
		case 'WEATHER_LOAD_FAILTURE':
			console.error('ERROR:', action.error)
			return state;
		default:
			return state;
	}
}
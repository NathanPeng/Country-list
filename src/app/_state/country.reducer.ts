import * as ContriesAction from './country.action';


export const initialValue: any = [{ name: "Nathan" , capital:"need a job", population: 500, currencies:[{code:"Work"}], flag:'http://pngimg.com/uploads/usa_map/usa_map_PNG24.png'}];

export function countriesReducer(state = initialValue, action: ContriesAction.Actions){
    switch(action.type){
      case ContriesAction.GET_COUNTRIES_SUCCESS:

        return action.payload;

      default: return state;
    }
}

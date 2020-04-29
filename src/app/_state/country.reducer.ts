import * as ContriesAction from './country.action';


const initialValue: any = [{ name: "Nathan" , life:"need a job"}];

export function countriesReducer(state = initialValue, action: ContriesAction.Actions){
    switch(action.type){
      case ContriesAction.GET_COUNTRIES_SUCCESS:

        return action.payload;

      default: return state;
    }
}

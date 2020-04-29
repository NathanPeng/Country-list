import * as CountryAction from './onecountry.action';


const initialCountry: any = { };

export function countryReducer(state = initialCountry, action: CountryAction.Actions){
    switch(action.type){
      case CountryAction.GET_COUNTRY:

        return action.country;

      default: return state;
    }
}

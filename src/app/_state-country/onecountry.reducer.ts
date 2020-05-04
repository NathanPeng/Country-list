import * as CountryAction from './onecountry.action';


const initialCountry: any = { name: "Nathan" ,
 capital:"need a job",
 population: 500,
 currencies:[{code:"Work"}],
  flag:'http://pngimg.com/uploads/usa_map/usa_map_PNG24.png'};

export function countryReducer(state = initialCountry, action: CountryAction.Actions){
    switch(action.type){
      case CountryAction.GET_COUNTRY:

        return action.country;

      default: return state;
    }
}

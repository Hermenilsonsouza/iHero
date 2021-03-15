import {

    FIND_MOSTER,
    FIND_HERO,   
    EDIT_HERO,
    DELETE_HERO,
    FIND_EVENT,
    
} from '../types';


const INITIAL_STATE = {
MonsterList:[],
HerosList: [],
EventList: [],
}
 
export default (state=INITIAL_STATE, action)=>{ 

  if (action.type == FIND_MOSTER){ 
     
    return {...state,MonsterList: action.MonsterList}
}

if (action.type == FIND_HERO){ 
   
    return {...state, HerosList:[... state.HerosList, action.HerosList]}
}

if (action.type == EDIT_HERO){ 
    
   return {... state, HerosList: action.HerosList}
}
if (action.type == DELETE_HERO){ 
    
    return {... state, HerosList: action.HerosList}
 }
 if (action.type == FIND_EVENT){ 
    
    return  {...state, EventList:[... state.EventList, action.EventList]} 
 }
    
    return state;
}


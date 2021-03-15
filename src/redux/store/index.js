import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AsyncStorage } from 'react-native'
import rootReducer   from '../reducers';
const persistConfig = {
    key: `root`,    
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
   // blacklist: ['navigation']   // nome do reducer que queremos tirar do persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export const getPersistor = () => persistor;
export const getStore = () => store;
export const getState = () => {
    return store.getState();
};

export default {
    getStore,
    getState,
    getPersistor
}

import { REMOVE_FEATURE } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const emptyReducer = (state = initialState, action) => {
    console.log('RF: emptyReducer > state: ', state);
    console.log('RF: emptyReducer > action: ', action);
    switch (action.type) {
        case REMOVE_FEATURE:
        return {
            ...state,
            car: {...state.car, features: state.car.features.filter(feature => {
                if (feature.id === action.payload.id) {
                    return !feature
                }
                return feature;
            })}
        }
        default:
            return state;
    }
};
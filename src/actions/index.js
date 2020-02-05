export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = index => {
    console.log('actions/index.js: addFeature index: ', index);
    return {
        type: REMOVE_FEATURE,
        payload: index
    };
}
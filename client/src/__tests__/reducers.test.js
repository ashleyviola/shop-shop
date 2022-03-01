// import our actions 
import { reducer } from '../utils/reducers';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

// create a sample of what our global state will look like
const intitialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });
    expect(newState.products.length).toBe(2);
    expect(intitialState.products.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });
    expect(newState.categories.length).toBe(2);
    expect(intitialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(intitialState.currentCategory).toBe('1');
});
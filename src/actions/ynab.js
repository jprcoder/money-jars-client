import config from '../config'

export const FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED = 'FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED';
export const FETCH_YNAB_BUDGETS_REQUEST_SUCCESS = 'FETCH_YNAB_BUDGETS_REQUEST_SUCCESS';
export const FETCH_YNAB_BUDGETS_REQUEST_FAILURE = 'FETCH_YNAB_BUDGETS_REQUEST-FAILURE';

export function fetchYnabBudgets(query){
    const promise = fetch(`${config.API_BASE_URL}/ynab/auth/${query}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    return {
        onRequest: FETCH_YNAB_BUDGETS_REQUEST_TRIGGERED,
        onSuccess: FETCH_YNAB_BUDGETS_REQUEST_SUCCESS,
        onFailure: FETCH_YNAB_BUDGETS_REQUEST_FAILURE,
        promise,
    };
}

export const FETCH_YNAB_CATEGORIES_REQUEST_TRIGGERED = 'FETCH_YNAB_CATEGORIES_REQUEST_TRIGGERED';
export const FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS = 'FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS';
export const FETCH_YNAB_CATEGORIES_REQUEST_FAILURE = 'FETCH_YNAB_CATEGORIES_REQUEST-FAILURE';

export function fetchYnabCategories(userId, budgetid){
    const promise = fetch(`${config.API_BASE_URL}/ynab/categories/${userId}?budgetid=${budgetid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return {
        onRequest: FETCH_YNAB_CATEGORIES_REQUEST_TRIGGERED,
        onSuccess: FETCH_YNAB_CATEGORIES_REQUEST_SUCCESS,
        onFailure: FETCH_YNAB_CATEGORIES_REQUEST_FAILURE,
        promise,
    };
}


export const FETCH_YNAB_CATEGORY_BALANCE_TRIGGERED = 'FETCH_YNAB_CATEGORY_BALANCE_TRIGGERED'
export const FETCH_YNAB_CATEGORY_BALANCE_SUCCESS = 'FETCH_YNAB_CATEGORY_BALANCE_SUCCESS'
export const FETCH_YNAB_CATEGORY_BALANCE_FAILURE = 'FETCH_YNAB_CATEGORY_BALANCE_FAILURE'

export function fetchYnabCategoryBalance(userId){
    const promise = fetch(`${config.API_BASE_URL}/ynab/category/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return {
        onRequest: FETCH_YNAB_CATEGORY_BALANCE_TRIGGERED,
        onSuccess: handleCategoryBalance,
        onFailure: FETCH_YNAB_CATEGORY_BALANCE_FAILURE,
        promise,
    };
}

const handleCategoryBalance = (response, dispatch) =>{
    dispatch({
        type: FETCH_YNAB_CATEGORY_BALANCE_SUCCESS,
        response,
    })
}
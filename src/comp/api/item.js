import api from '../ax/axiosSetting'

export const itemList = (param) => {
    return api.get('/item/all', {
        params: param
    });
}

/**
 * 추천 아이템
 * @param {*} obj 
 * @returns 
 */
export const itemGood = (obj) => {
    return api.get('/item/good', {
        params: obj
    });
}
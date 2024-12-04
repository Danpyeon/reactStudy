import api from '../ax/axiosSetting'

/**
 * 
 * @param {id: 검사 아이디} obj 
 * @returns 
 */

export const memberIdCehck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export const areaList = () => {
    return api.get('/area/list');
}
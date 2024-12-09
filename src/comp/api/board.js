import api from "../ax/axiosSetting"


/**
 * 게시판 리스트 불러오기 
 * @param {*} param 
 * @returns 
 */
export const boardList = (obj) => {
    return api.get('/board/list' , {
        params: obj
    });
}

/**
 * 게시판 등록하기
 */
export const upDateBoard = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}


/**
 * 게시판 상세보기
 */
export const viewBoard = (obj) => {
    return api.get('/board/find', {
        params: obj
    });
}

/**
 * 삭제하기
 */

export const deleteBoard = (obj) => {
    return api.post('/board/remove', JSON.stringify(obj),{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

/**
 * 수정하기
 * @param {} obj 
 * @returns 
 */
export const modifyBoard = (obj) => {
    return api.post('/board/modify', JSON.stringify(obj),{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

/**
 * 추천하기
 * @param {*} obj 
 * @returns 
 */
export const boardGoodUp = (obj) => {
    return api.post('/board/good', JSON.stringify(obj),{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}
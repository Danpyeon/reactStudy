import api from "../ax/axiosSetting"


/**
 * 게시판 리스트 불러오기 
 * @param {*} param 
 * @returns 
 */
export const boardList = () => {
    return api.get('/board/list');
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

export const modifyBoard = (obj) => {
    return api.post('/board/modify', JSON.stringify(obj),{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

export const boardGoodUp = (obj) => {
    return api.post('/board/good', JSON.stringify(obj),{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}
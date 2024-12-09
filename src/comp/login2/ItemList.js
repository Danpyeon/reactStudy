import { useEffect, useState } from 'react';
import { itemList, itemGood, itemCateIdx } from '../api/item';
import ItemArea from '../login2/ItemArea';

export default function Study() {

    const [items, setItems] = useState([]);
    const [categoryId, setCateId] = useState(0);
    const [keyword, setKeyword] = useState('');

    const categoryLists = [
        {id: '0', 'name': '전체'},
        {id: '1', 'name': '도서'},
        {id: '2', 'name': '전자'},
        {id: '3', 'name': '생활'}
    ]

    function getItemList(searchItem) {
        itemList(searchItem)
        itemCateIdx(searchItem)
        .then(res => {
            console.log(res.data.data);
            if(res.data.code === '200') {
                setItems(res.data.data);
            }
        }) 
    }

    useEffect(() => {
        getItemList();
    }, [])


    /**useState 변화 감지 시 동작 */
    useEffect(() => {
        searchbtn();
    }, [keyword]);


    //카테고리 검색
    function categoryNum(num) {
        console.log('num : ', num);

        let param = new Object();
        param.categoryIdx = num;
        
        getItemList(param);

    }

    /** 검색 버튼 */
    function searchbtn() {
        let param = new Object();
        param.keyword = keyword;
        console.log(param)
        getItemList(param)
    }

    //item 추천 값 올리기
    function changeItem(idx) {
        const copyItems = [...items];
        copyItems[idx-1] = { ...copyItems[idx-1], good: copyItems[idx-1].good+1 };
        setItems(copyItems);

        let obj = new Object();
        obj.itemIdx = idx;
        itemGood(obj)
        .then(res => {
            console.log(res);
        })
    }



    return(
        <div>
            <h1>ItemList</h1>
            {/** Item Category */}
            {categoryLists.map(
                (item, index) => (
                    <div key={index}>
                        <a onClick={
                            e=> {
                                e.preventDefault();
                                categoryNum(item.id);
                            }
                        }>{item.name}</a> <br/><br/>
                    </div>
                )
            )}

            <input
            type='text'
            placeholder='Search'
            value={keyword}
            onChange={
                e=>setKeyword(e.target.value)
            }/>

            <input
            type='button'
            value='검색' 
            onClick={searchbtn}/>

            {/** Item List */}
            {items.map(
                (item, index) => (
                    <ItemArea key={index} item={item} index={index} onGoodUp={
                        (idx) => {
                            console.log(`부모 : ${idx}`);
                            const copy = items.copy;
                            changeItem(idx)
                        }
                    }>
                    </ItemArea>
                )
            )}
        </div>
    )
}
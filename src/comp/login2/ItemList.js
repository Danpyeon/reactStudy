import { useEffect, useState } from 'react';
import { itemList } from '../api/item';
import ItemArea from '../login2/ItemArea';

export default function Study() {

    const [items, setItems] = useState([]);

    const categoryLists = [
        {id: '1', 'name': '도서'},
        {id: '2', 'name': '전자'},
        {id: '3', 'name': '생활'}
    ]

    function getItemList() {
        console.log('=== Item List ===');
        itemList()
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

    function categoryNum(num) {
        console.log('num : ', num);
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

            {/** Item List */}
            {items.map(
                (item, index) => (
                    <ItemArea item={item} index={index}></ItemArea>
                )
            )}
        </div>
    )
}
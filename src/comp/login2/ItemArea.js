export default function AreaItem(props) {

    const item = props.item;
    const index = props.index;

    function goodUp(index) {
        console.log(index);
        props.onGoodUp(index);
    }
    return(
        <div>
            <div key={index} style={
                        {
                            'border' : '1px solid black',
                            'width' : '400px',
                            'margin' : '10px',
                            'cursor' : 'pointer'
                        }
                    }>
                        IDX : {item.itemIdx} <br/>
                        NAME : {item.name} <br/>
                        가격 : {item.price} <br/>
                        추천 : {item.good}
                        <a onClick={
                            e=> {
                                e.preventDefault();
                                goodUp(item.itemIdx)
                            }
                        }> 👍 추천하기</a><br/> 
                        카테고리 이름 : {item.categoryName} <br/>
                        카테고리 아이디 : {item.categoryId} <br/> <br/>
                    </div>
        </div>
    )
}
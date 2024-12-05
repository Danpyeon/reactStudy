export default function AreaItem(props) {

    const item = props.item;
    const index = props.index;
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
                        추천 : {item.good} <br/>
                        카테고리 이름 : {item.categoryName} <br/>
                        카테고리 아이디 : {item.categoryId} <br/> <br/>
                    </div>
        </div>
    )
}
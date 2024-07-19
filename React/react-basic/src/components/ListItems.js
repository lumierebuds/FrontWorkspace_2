function ListItems({array}) {
    
    console.log(array);
    // const { array } = props;  // 키값이 array인 요소를 가져온다. 


    return (
        <>
            {

                array.map((value) => {
                    return (
                        <li>{value}</li>
                    )
                })
                    
                // (() => {
                //     let liarr = [];
                //     for (let i = 0; i < array.length; i++){
                //         liarr.push(<li>{ array[i]}</li>)
                //     }
                //     return liarr;
                // })()
            }
        </>
        // 임시로 묶어주는 역할을 하는 Fragment -원래 이름은 React.Fragment
        // 렌더링 되며 사라짐
    );
}

export default ListItems;
// export ListItems;
import React from 'react'
const Box = props => {
    const {getFilterData} = props


    return (
        <div>

            <ul className="c-list__Funks">
                {getFilterData().map(item => {
                        return (

                            <li className="c-list__Funk" key={item.name}>
                                    <h5>Name:{item.name}</h5>
                                    <h5>Category:{item.category}</h5>
                                    <h5>Value{item.value}</h5>
                                    <h5>id:{item.id}-</h5>
                                    <img src={item.img} width="100" alt="item.img"/>

                            </li>
                        )
                    }

                )}
            </ul>
        </div>
    )
}

export default Box
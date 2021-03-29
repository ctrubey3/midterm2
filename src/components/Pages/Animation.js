import {data} from "../../data";
import {v4 as uuidv1} from "uuid";
import {Component} from "react";
import Box from "../Box";
class Animation extends Component {
    state = {
        data: data,
        name: '',
        category: '',
        value: '',
        id: uuidv1(),
        img: '',
        search: '',

    }


    getFilterData = () => {
        return this.state.data.filter(item =>
            item.category.includes("animation")
        )}



    render(){
        return(
            <div className="App">
                <Box getFilterData={this.getFilterData}/>
            </div>
        )
    }}

export default Animation;
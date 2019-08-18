import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
   checkItem = (e) => {
      //your code here    
      this.props.store.checkItem(e.target.value)
   }
   editItem = () => {
      let newL = prompt("change location", "a location")
      this.props.store.editItem(this.props.item.name, newL)
   }
   deleteItem = () => {
      this.props.store.deleteItem(this.props.item.name)
   }
   render() {
      let item = this.props.item
      return (
         <div className={item.completed ? "crossed" : "notCompleted"}>
             we brought {item.name} from:  {item.location}
            < input type="checkbox" value={item.name} onClick={this.checkItem} />
            <button className="editButton" onClick={this.editItem}> Edit Location </button>
            <button className="deleteButton" onClick={this.deleteItem}> Remove </button>
         </div>)
   }
}


export default Item


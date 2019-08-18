import { observable } from 'mobx'
import React, { Component } from 'react';
import { observer } from 'mobx-react'



export class Item {
   @observable name
   @observable completed = false
   @observable location = "Super Sell"
   constructor(name) {
      this.name = name
   }
   
}


export default Item
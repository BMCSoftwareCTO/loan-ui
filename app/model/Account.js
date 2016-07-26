'use strict';
class Account {
    
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    
    /**
     * name of the object (required)
     */
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    
    /**
     * number of the object 
     */
    get number() {
        return this._number;
    }
    set number(val) {
        this._number = val;
    }
    
    toJson() {
        return {
            'name': this.name,
            'number': this.number
        };
    }
}
    
    
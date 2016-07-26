'use strict';
class Rate {
    constructor(percentage, term) {
        this.percentage = percentage;
        this.term = term;
    }
    
    /**
     * percentage of the object
     */
    get percentage() {
        return this._percentage;
    }
    set percentage(val) {
        this._percentage = val;
    }
    
    /**
     * term of the object 
     */
    get term() {
        return this._term;
    }
    set term(val) {
        this._term = val;
    }
    
    toJson() {
        return {
            'percentage': this.percentage,
            'term': this.term
        };
    }
}
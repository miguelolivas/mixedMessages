const mixedMesssages = {
    _advice1: ['Let go, or get dragged'],
    _advice2:["You could be the sweetest peach on the tree, some people just don't like peaches"],
    _advice3:["What's the point of living if you ain't living for you"],
    _advice4:["Treat yourself the way you'd treat the love of your life"],
    _advice5:["Being broken can be beautiful, just look at geodes."],
    _advice6:["Paciencia y Fe"],
    _qouotes(obj){
        switch(obj){
            case 0:
                this._quote(this._advice1[Math.floor(Math.random() * this.advice1.length)]);
            break;
            case 1:
                this._quote(this._advice2[Math.floor(Math.random() * this._advice2.length)]);
            break
            case 2:
                this._quote(this._advice3[Math.floor(Math.random() * this._advice3.length)]);
            break;
            case 3:
                this._quote(this._advice4[Math.floor(Math.random() * this._advice4.length)]);
            break;
            case 4:
                this._quote(this._advice5[Math.floor(Math.random() * this._advice5.length)]);
            break;
            case 5:
                this._quote(this._advice6[Math.floor(Math.random() * this._advice6.length)]);
            break;
        }
    },
    _quotes(obj){
        console.log(obj)
    },
    message(){
        this._qouotes(Math.floor(Math.random() * 5));
    }
}
mixedMesssages.message();

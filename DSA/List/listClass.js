class List {
    constructor(...num) {
        // console.log(num)  // what we can get as arguments
        this.dataStore = new Array(...num);
        this.lastSize = this.dataStore.length ;
        this.pos = 0;       
    }

    listSize() {
        return this.dataStore.length;
    }

    toString() {
        return this.dataStore.join("-")
    }

    append(element) {
        return this.dataStore[this.lastSize ++] = element
    }

    remove(index){
        return this.dataStore.slice(0, index).concat(this.dataStore.slice(index + 1))
    }

    find(element){
        for (let i = 0; i < this.dataStore.length; i++){
            if (this.dataStore[i] === element){
                return i
            }
        }
        return -1;
    }

    removeItem(element){
        const index = this.find(element);
        return this.remove(index)
    };

    insert(index,item){
        this.dataStore.splice(index, 0, item);
        this.lastSize ++;
    }

    clear(){
        this.dataStore = [];
        this.lastSize = this.pos = 0;
    }

}

const list1 = new List(1,2,3,4,5)
list1.append(6)
list1.append(7)
const list2 = list1.remove(2)
const list3 = list1.removeItem(2)
list1.insert(2, "bus")
// list1.clear() // this will clear this list
console.log(list1.toString(), list1.dataStore)




function Test(){
    console.log(new Array(...[1,2,3])) //spreading the array;
}

// Test()
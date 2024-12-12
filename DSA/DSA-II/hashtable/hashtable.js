
// let arr = [['name','suresh'],['naem','pranav'],['age',10]]

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let hash = this.hash(key)
        let bucket = this.table[hash]
        if(bucket){
            let searchVal = bucket.find((item)=>item[0]==key)
            console.log(searchVal)
            if(searchVal){
                searchVal[1] = value
            }else{
                bucket.push([key,value])
            }
        }else{
            this.table[hash] = [[key,value]]
        }
    }
    get(key){
        let hash = this.hash(key)
        let bucket = this.table[hash]
        if(bucket){
            let searchKey = bucket.find((item)=> item[0]==key)
            if(searchKey){
                return searchKey[1]
            }else{
                return -1
            }
        }else{
            return -1
        }
    }
    remove(key){
        let hash = this.hash(key)
        let bucket = this.table[hash]
        if(bucket){
            let searchKey = bucket.find((item)=>item[0]==key)
            if(searchKey){
                bucket.splice(bucket.indexOf(searchKey),1)
            }
        }
    }
    print(){
        if(this.table.length==0) return console.log('table is empty')
        
        for(let i=0;i<this.table.length;i++){
           if(this.table[i]){
                console.log(this.table[i])
           }
        }
    }
}


let table = new Hashtable(4)

for(let i=0;i<arr.length;i++){
    table.set(arr[i][0],arr[i][1])
}


console.log(table)
console.log(table.get('naem'))
console.log(table.get('age'))
table.print()


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let hash = this.hash(key)
//         let bucket = this.table[hash]
//         if(bucket){
//             let searchKey = bucket.find((item)=>item[0]==key)
//             if(searchKey){
//                 searchKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }else{
//             this.table[hash] = [[key,value]]
//         }
//     }
//     get(key){
//         let hash = this.hash(key)
//         let bucket = this.table[hash]
//         if(bucket){
//             let searchKey = bucket.find((item)=> item[0]==key)
//             if(searchKey){
//                 return searchKey[1]
//             }
//         }
//         return -1
//     }
//     print(){
//         if(this.table.length==0) return null

//         for(let i = 0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(this.table[i])
//             }
//         }
//     }
// }


// let table = new HashTable(4)
// table.set('name','suresh')
// table.set('naem','pranav')
// console.log(table)

// * Linear, quertic


class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const hash = this.hash(key)
        const bucket =  this.table[hash]
        if(bucket){
            let searchKey = bucket.find((item)=>item[0]==key)
            if(searchKey){
                searchKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }else{
            this.table[hash] = [[key,value]]
        }
    }
    get(key){
        let hash = this.hash(key)
        let bucket = this.table[hash]
        if(bucket){
            let searchKey = bucket.find((item)=> item[0]==key)
            if(searchKey){
                return searchKey[1]
            }
        }
        return -1
    }
    has(key){
       return this.get(key)!=-1
    }
    tableSize(){
        return this.size
    }
    delete(key){
        const hash = this.hash(key)
        const bucket = this.table[hash]
        if(bucket){
            let findItem = bucket.find((item)=>item[0]==key)
            if(findItem){
                bucket.splice(bucket.indexOf(findItem),1)
            }
            return true
        }
        return false
    }
}


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     // Set value using linear probing
//     setLinearProbing(key, value) {
//         let index = this.hash(key);
//         let startIndex = index; // To detect infinite loop
//         // console.log('key',key,key?.[0])
//         while (this.table[index] && this.table[index][0] !== key) {
//             index = (index + 1) % this.size; // Move to the next slot
//             if (index === startIndex) {
//                 throw new Error("Hash table is full! Cannot insert more items.");
//             }
//         }
//         this.table[index] = [key, value];
//     }

//     // Set value using quadratic probing
//     setQuadraticProbing(key, value) {
//         let index = this.hash(key);
//         let i = 1;
//         while (this.table[index] && this.table[index][0] !== key) {
//             index = (index + i * i) % this.size; // Quadratic probing formula
//             i++;
//             if (i > this.size) {
//                 throw new Error("Hash table is full! Cannot insert more items.");
//             }
//         }
//         this.table[index] = [key, value];
//     }

//     // Get value using linear probing
//     getLinearProbing(key) {
//         let index = this.hash(key);
//         let startIndex = index; // To detect infinite loop

//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 return this.table[index][1];
//             }
//             index = (index + 1) % this.size;
//             if (index === startIndex) {
//                 return undefined; // Key not found
//             }
//         }
//         return undefined;
//     }

//     // Get value using quadratic probing
//     getQuadraticProbing(key) {
//         let index = this.hash(key);
//         let i = 1;

//         while (this.table[index]) {
//             if (this.table[index][0] === key) {
//                 return this.table[index][1];
//             }
//             index = (index + i * i) % this.size; // Quadratic probing formula
//             i++;
//             if (i > this.size) {
//                 return undefined; // Key not found
//             }
//         }
//         return undefined;
//     }

//     display() {
//         console.log(this.table);
//     }
// }
// const hashTable = new HashTable(7);

// // Linear Probing
// console.log("Using Linear Probing:");
// hashTable.setLinearProbing("name", "Alice");
// hashTable.setLinearProbing("nmae", "suresh");
// hashTable.setLinearProbing("age", 25);
// hashTable.setLinearProbing("city", "Wonderland");
// hashTable.setLinearProbing("email", "alice@example.com");
// hashTable.display();

// console.log("Get using Linear Probing:");
// console.log("name:", hashTable.getLinearProbing("name")); // Alice
// console.log("age:", hashTable.getLinearProbing("age")); // 25
// console.log("city:", hashTable.getLinearProbing("city")); // Wonderland

// // Quadratic Probing
// const hashTable2 = new HashTable(7);
// console.log("\nUsing Quadratic Probing:");
// hashTable2.setQuadraticProbing("name", "Alice");
// hashTable2.setQuadraticProbing("age", 25);
// hashTable2.setQuadraticProbing("city", "Wonderland");
// hashTable2.setQuadraticProbing("email", "alice@example.com");
// hashTable2.display();

// console.log("Get using Quadratic Probing:");
// console.log("name:", hashTable2.getQuadraticProbing("name")); // Alice
// console.log("age:", hashTable2.getQuadraticProbing("age")); // 25
// console.log("city:", hashTable2.getQuadraticProbing("city")); // Wonderland


// * longest repeating charactor



let str = "helloworlddyttt"
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        
        return total%this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            bucket.push([key,value])
        }else{
        this.table[index] = [[key,value]]
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const searchKey = bucket.find((item)=>item[0]==key)
            if(searchKey) searchKey[1] 
        }
        return null
    }
    delete(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const findItem = bucket.find((item)=> item[0]==key)
            if(findeItem){
                bucket.splice(findItem,1)
            }
            return findItem[1]
        }
        return null
    }
    has(key){
        return Boolean(this.get(key))
    }
    findNonreapingCharector(){
        let res = ''
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] && this.table[i].length==1){
                console.log(this.table[i])
            }
        }
        return res
    }
}

const ht = new HashTable(str.length)

for(let i=0;i<str.length;i++){
    ht.set(str[i],str[i])
}

console.log(ht)
console.log(ht.findNonreapingCharector())
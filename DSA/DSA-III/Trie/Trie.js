

// class Node{
//     constructor(){
//         this.children={}
//         this.isWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root= new Node()
//     }
//     insert(word){
//         let curr= this.root
//      for(let key of word){
//          if(!(key in curr.children)){
//              curr.children[key] = new Node()
            
//          }
//          curr = curr.children[key]
//      }   
//      curr.isWord = true
//     }
//     find(word){
//         let curr = this.root
//         for(let key of word){
//             if(!(key in curr.children)){
//                 return false
//             }
//             curr = curr.children[key]
//         }
//         return curr.isWord
//     }
//     print(root=this.root,word='',result=[]){
//         if(root.isWord){
//             result.push(word)
//         }
//         for(let key in root.children){
//                 this.print(root.children[key],word+key,result)
//         }
//         return result
//     }
//     autoSugestion(word){
//         let curr = this.root
//         for(let key of word){
//             if(!(key in curr.children)){
//                 console.log(key,curr)
//                 return []
//             }
//             curr = curr.children[key]
//         }
//         const result = this.print(curr,word)
//         return result
//     }
// }


// const t = new Trie()

// console.log(t)
// t.insert('vimal') 
// t.insert('vimal2') 
// console.log(t)
// console.log(t.find('vimal'))
// t.insert('knew')
// t.insert('knewed')

// console.log(t.print())
// console.log(t.autoSugestion('knewe'))


class Node{
    constructor(){
        this.children = {}
        this.isWord = false
    }
}

class Node {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) {
                curr.children[char] = new Node();
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    find(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) {
                return false; // Word not found
            }
            curr = curr.children[char];
        }
        return curr.isWord;
    }

    getAllWords(root = this.root, word = '', result = []) {
        if (root.isWord) {
            result.push(word);
        }
        for (let char in root.children) {
            this.getAllWords(root.children[char], word + char, result);
        }
        return result;
    }

    getAutoSuggestions(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(char in curr.children)) {
                return []; // Prefix not found
            }
            curr = curr.children[char];
        }
        return this.getAllWords(curr, prefix, []);
    }

    hasPrefix(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(char in curr.children)) {
                return false; // Prefix not found
            }
            curr = curr.children[char];
        }
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert('hello');
trie.insert('hello world');
trie.insert('help');
trie.insert('helium');

console.log(trie.getAllWords()); // ['hello', 'hello world', 'help', 'helium']
console.log(trie.getAutoSuggestions('hel')); // ['hello', 'hello world', 'help', 'helium']
console.log(trie.hasPrefix('help')); // true
console.log(trie.find('hello')); // true
console.log(trie.find('hellish')); // false

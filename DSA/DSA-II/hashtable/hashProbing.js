class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function to calculate index
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    // Linear Probing
    setLinearProbing(key, value) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size; // Wrap around using modulo
            if (index === startIndex) return `Table is full`;
        }
        this.table[index] = [key, value];
    }

    // Quadratic Probing
    setQuadraticProbing(key, value) {
        let index = this.hash(key);
        let startIndex = index;
        let i = 1; // Quadratic probing starts with i = 1

        while (this.table[index] && this.table[index][0] !== key) {
            index = (startIndex + i * i) % this.size;
            i++;
            if (index === startIndex) return `Table is full`;
        }
        this.table[index] = [key, value];
    }

    // Get value by key
    get(key) {
        let index = this.hash(key);
        let startIndex = index;
        let i = 1;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1]; // Key found
            }
            index = (startIndex + i * i) % this.size; // Quadratic probing logic
            i++;
            if (index === startIndex) return null; // Table fully searched
        }
        return null; // Key not found
    }

    // Delete key-value pair
    delete(key) {
        let index = this.hash(key);
        let startIndex = index;
        let i = 1;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                this.table[index] = null; // Remove key-value pair
                return true;
            }
            index = (startIndex + i * i) % this.size; // Quadratic probing logic
            i++;
            if (index === startIndex) return false; // Table fully searched
        }
        return false; // Key not found
    }
}

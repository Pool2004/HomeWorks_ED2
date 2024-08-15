class Queue {
    constructor() {
        this.queue = []
    }

    push(element){
        this.queue.push(element);
    }

    shift(){ 
        return this.queue.shift();

    }

    isEmpty(){
        return this.queue.length === 0;
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    print(){
        console.log(this.queue);
    }

    menorTiempoLlegada(){
        return this.queue.sort((a, b) => a.Arrived - b.Arrived);
    }
}

const people1 = {Name: "Paco", Arrived: 10};
const people2 = {Name: "Lucia", Arrived: 7};
const people3 = {Name: "Sandro", Arrived: 6};

const queue = new Queue();

queue.push(people3);
queue.push(people2);
queue.push(people1);
queue.print()
console.log(queue.menorTiempoLlegada());
console.log(queue.size());
console.log(queue.shift());
console.log(queue.peek());
queue.print() 
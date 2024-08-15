class Stack {
    constructor() {
        this.stack = []
    }

    push(element){
        this.stack.push(element);
        
    }

    pop(){
        let variable = this.stack.pop()
        return variable;

    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}

const libro1 = {Name: "El coronel tiene quien le escriba", Isbn: 123456, Autor: "Julio", Editorial: "Editorial El mono S.A"};
const libro2 = {Name: "La divina recocha", Isbn: 654321, Autor: "Pedro", Editorial: "Guaracha S.A"};
const libro3 = {Name: "El señor de las pulseras", Isbn: 789112, Autor: "Paco", Editorial: "Ferxxo S.A"};

const stack = new Stack();

stack.push(libro3);
stack.push(libro2);
stack.push(libro1);
stack.print()
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
stack.print() 
/*
    Primer Parcial
    Jean Paul Ordoñez Ibarguen - 2221275
    Estructura de datos 2
*/

// Punto 1 Parcial

class Nodo {
    constructor(valor, previo = null, siguiente = null) {
        this.valor = valor;
        this.siguiente = siguiente;
        this.previo = previo;
    }
}

class LinkedList {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(valor) {
        const newNode = new Nodo(valor);

        if (!this.cabeza) {
            this.cabeza = newNode;
        } else {
            this.cola.siguiente = newNode;
            newNode.previo = this.cola;
        }

        this.cola = newNode;
    }

    peek(valor, current = this.cabeza) {
        if (this.cabeza === null) {
            return false;
        }

        if (current !== null) {
            if (current.valor === valor) {
                return true;
            } else {
                return this.peek(valor, current.siguiente);
            }
        }

        return false;
    }

    obtenerTamaño(current = this.cabeza, acum = 1) {
        if (this.cabeza === null) {
            return 0;
        }

        if (current.siguiente !== null) {
            return this.obtenerTamaño(current.siguiente, acum + 1);
        }

        return acum;
    }

    remover(valor, current = this.cabeza) {
        if (this.cabeza === null) {
            return false;
        }

        if (this.cabeza.valor === valor) {
            this.cabeza = this.cabeza.siguiente;
            if (this.cabeza) {
                this.cabeza.previo = null;
            }
            return true;
        }

        while (current.siguiente !== null) {
            if (current.siguiente.valor === valor) {
                current.siguiente = current.siguiente.siguiente;
                if (current.siguiente) {
                    current.siguiente.previo = current;
                }
                return true;
            } else {
                current = current.siguiente;
            }
        }

        return false;
    }

    mostrarDatos() {
        let node = this.cabeza;
        while (node != null) {
            console.log(`📦 Valor: ${node.valor} 🡒 Siguiente: ${node.siguiente ? node.siguiente.valor : '🚫'}`);
            node = node.siguiente;
        }
    }

    arreglo() {
        let node = this.cabeza;
        const array = [];
        while (node != null) {
            array.push(node.valor);
            node = node.siguiente;
        }
        return array;
    }

    deArray(array) {
        for (let valor of array) {
            this.agregar(valor);
        }
    }

    orderByDesc() {
        if (!this.cabeza) return;

        let node = this.cabeza;
        const array = [];

        while (node != null) {
            array.push(node.valor);
            node = node.siguiente;
        }

    
        array.sort((a, b) => b - a);

        this.cabeza = null;
        this.cola = null;


        this.deArray(array);
    }
}


function combinarListas(first_List, second_List) {
 
    const firstArray = first_List.arreglo();
    const secondArray = second_List.arreglo();

    const arrayCombinado = firstArray.concat(secondArray).sort((a, b) => a - b);

    const listaOrdenada = new LinkedList();
    listaOrdenada.deArray(arrayCombinado);

    return listaOrdenada;
}


const first_List = new LinkedList();
first_List.agregar(12);
first_List.agregar(7);
first_List.agregar(9);
first_List.agregar(3);

const second_List = new LinkedList();
second_List.agregar(2);
second_List.agregar(8);
second_List.agregar(6);
second_List.agregar(5);

first_List.orderByDesc();
second_List.orderByDesc();

console.log("Primera lista (Mayor a Menor)");
first_List.mostrarDatos(); 

console.log("Segunda lista (Mayor a Menor)");
second_List.mostrarDatos(); 

const listaOrdenada = combinarListas(first_List, second_List);

console.log("Lista combinada (Menor a mayor)");
listaOrdenada.mostrarDatos(); 



// Punto 2 Parcial


class Node {
    constructor(valor) {
        this.valor = valor;
        this.izq = null;
        this.der = null;
    }

    isLeaf() {
        return this.izq == null && this.der == null;
    }
}

// Creación de la clase

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Método para hacer inserción
    insert(valor) {
        const newNode = new Node(valor);

        if (!this.root) {
            this.root = newNode;
        } else {
            let posicionActual = this.root;
            let encontrado = false;

            while (!encontrado) {
                if (posicionActual.valor === valor) {
                    encontrado = true;
                    return null;
                }
                if (posicionActual.valor > valor) {
                    if (!posicionActual.izq) {
                        posicionActual.izq = newNode;
                        encontrado = true;
                        return this;
                    } else {
                        posicionActual = posicionActual.izq;
                    }
                } else {
                    if (!posicionActual.der) {
                        posicionActual.der = newNode;
                        encontrado = true;
                        return this;
                    } else {
                        posicionActual = posicionActual.der;
                    }
                }
            }
        }
    }

    calcularAltura(node = this.root) {
        if (node === null) {
            return -1;
        } else {
            const alturaIzquierda = this.calcularAltura(node.izq);
            const alturaDerecha = this.calcularAltura(node.der);
            return Math.max(alturaIzquierda, alturaDerecha) + 1;
        }
    }
}


const arbol = new BinaryTree();
arbol.insert(7);
arbol.insert(3);
arbol.insert(8);
arbol.insert(6);
arbol.insert(15);
arbol.insert(12);

console.log("El arbol tiene una altura de: " + arbol.calcularAltura());




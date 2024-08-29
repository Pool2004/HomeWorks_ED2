/*
    Challenge Arboles
    Jean Paul Ordoñez Ibarguen - 2221275
    Estructura de datos 2

*/

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
}

const arbol = new BinaryTree();
arbol.insert(7);
arbol.insert(3);
arbol.insert(8);
arbol.insert(6);
arbol.insert(15);

// Mostrar el árbol en diferentes órdenes
console.log(arbol);


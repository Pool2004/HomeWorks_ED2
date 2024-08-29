class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value, null, null);

        if(!this.root){
            this.root = newNode;
        }else{
            let current = this.root;
            let isFound = false;

        
            while(!isFound){
                if(current.value === value) {
                    isFound = true
                    return null
                }

                if(current.value > value) {
                    if(!current.left){
                        current.left = newNode
                        isFound = true
                        return this
                    } else {
                        current = current.left
                    }
                }else {
                    if(!current.right) {
                        current.right = newNode
                        isFound = true
                        return this

                    }else {
                        current = current.right
                    }
                }
            }
        }
    }

    preOrder(node = this.root){
        if(!node){
            return;
        }
        this.preOrder(node.left);
        this.preOrder(node.right);

    }

    postOrder(node = this.root){
        if(!node){
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
    }

    inOrder(node = this.root){
        if(!node){
            return;
        }

        this.inOrder(node.left);
        this.inOrder(node.right);
    }


 
}


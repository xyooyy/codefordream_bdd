function BinaryTreeNode(data, left, right)
{
    this.data = data;
    this.left = left;
    this.right = right;
    return this;
}

function BinaryTree()
{
    this.root = null;
}

BinaryTree.prototype.is_data_in_tree = function(data)
{
    for(var current_node = this.root; current_node != null;) {
        if (current_node.data == data) return current_node;
        else if (data < current_node.data)  current_node = current_node.left;
        else current_node = current_node.right;
    }
    return null;
};
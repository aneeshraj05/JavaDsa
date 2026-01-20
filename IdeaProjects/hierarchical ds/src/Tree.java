public class Tree<T> {
    Node root;
    public class Node{
        T data;
        Node left;
        Node right;
     Node (T data){
         this.data=data;
         left=null;
         right=null;

     }
    }
    Tree(){
        root=null;

    }



}

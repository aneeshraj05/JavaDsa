import java.util.ArrayList;
import java.util.List;

public class Main{
    public static void main(String[] args) {
        Tree<Integer> tree =new Tree<>();
        List<Integer> arr=new ArrayList<>();
        tree.root=tree.new Node(10);
        tree.root.left=tree.new Node(20);

        preorder(tree.root,arr);
        System.out.println(arr);






    }
    static void preorder(Tree<Integer>.Node root,List<Integer> arr){
        if(root==null){
            return;
        }
        arr.add(root.data);
        preorder(root.left,arr);
        preorder(root.right,arr);


    }
}
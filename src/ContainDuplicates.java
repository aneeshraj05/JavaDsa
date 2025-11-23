import java.util.*;
public class ContainDuplicates {
    public static void main(String[] args) {
        int arr[]={1,2,3,1};
        ArrayList<Integer> list=new ArrayList<>();
        for(int i=0;i<arr.length;i++){
            if(!list.contains(arr[i])){
                list.add(arr[i]);
            }
        }
        System.out.println("does not contain duplicate");
    }
}

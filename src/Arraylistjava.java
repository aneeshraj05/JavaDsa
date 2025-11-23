import java.util.ArrayList;

public class Arraylistjava {
    public static void main(String[] args) {

        ArrayList<Integer> list=new ArrayList<>();
     int arr[]={1,2,3,4,4,5,5,5,5};
     for(int i=0;i<arr.length;i++){
         if(list.contains(arr[i])){
             continue;
         }
       else{
           list.add(arr[i]);
         }
     }
        System.out.println(list);
    }
}

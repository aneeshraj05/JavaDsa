import java.util.Arrays;

public class SearchingArray {
    public static void main(String[] args) {

        int arr[][]={
                {
                    1,2,4
                },
                {2,3,4},
                {4,5,6},
        };
        int target=6;

     for(int i=0;i<arr.length;i++){
         for(int j=0;j<arr[i].length;j++){
             if(arr.length==0){
                 System.out.println("first create an array");
             }
             if(arr[i][j]==target){
                 System.out.println("elemnt found"+i+j);
             }
         }
     }



    }
}

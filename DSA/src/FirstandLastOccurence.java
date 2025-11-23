import java.util.ArrayList;

public class FirstandLastOccurence {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,4,4,5,60};


    }
    static int[] occurence(int[] arr, int target){
        int start=0;
        int end=arr.length-1;
        ArrayList<Integer> list=new ArrayList<>();
        while(start<=end){
            if(arr[start]==target){
list.add(start)     ;
          start++;

            } else if (arr[end]==target) {
                list.add((end));
                end--;


            }

        }
        return new int[]{-1,-1};

    }
}

import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int arr[]={9,2,1,3,1,2};
        selection(arr);
        System.out.println(Arrays.toString(arr));


    }
    static  void selection(int arr[]){
        for(int i=0;i<arr.length;i++){


                int last=arr.length-i-1;
               int max= max(arr,0,last);
                swap(arr,max,last);

        }
    }
    static int max(int arr[],int start,int end){
        int max=start;
        for(int i=0;i<=end;i++){

            if(arr[i]>arr[start]){
                max=arr[i];
            }

        }
        return max;
    }
    static void swap(int arr[],int max,int last){
        int temp=arr[max];
        arr[max]=arr[last];
        arr[last]=temp;
    }
}

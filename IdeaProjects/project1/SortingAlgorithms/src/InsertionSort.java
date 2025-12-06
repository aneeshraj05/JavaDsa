import java.util.Arrays;

public class InsertionSort {
    public static void main(String[] args) {
        int arr[]={1,4,3,5,6,7,5,3,12};
        insertion(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void insertion(int arr[]){
        for(int i=0;i<arr.length;i++){
            int key=arr[i];
            int j=i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1]=arr[j];
                j--;

            }
            arr[j+1]=key;

        }



    }
}

public class CyclicSort {
    public static void main(String[] args) {
int arr[]={3,4,2,1,5};
cyclic(arr);
        for(int number:arr){
            System.out.print(number + "  ");
        }
    }
    static void cyclic(int arr[]){
        int j=0;
        while( j<arr.length){
            int correct=arr[j]-1;

            if(arr[j]!=arr[correct]){
                swap(arr,j,correct);
            }
            else {
                j++;

            }
        }

    }
    static void swap(int arr[],int max,int last){
        int temp=arr[max];
        arr[max]=arr[last];
        arr[last]=temp;
    }
}

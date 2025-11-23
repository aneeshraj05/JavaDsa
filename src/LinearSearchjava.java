public class LinearSearchjava
{
    public static void main(String[] args) {
        int[] arr={1,2,4,22,2,2,4,4,555,4};
        int result=linearSearch(arr,444);
        if(result==-1){
            System.out.println("element not found");

        }
        else{
            System.out.println("element found");
        }

    }
    static int linearSearch(int arr[],int target){
        for(int i=0;i<arr.length;i++){
            if(arr[i]==target){
                return i;

            }
        }
        return -1;
    }
}

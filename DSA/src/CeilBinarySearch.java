public class CeilBinarySearch {
    public static void main(String[] args) {
        int arr[]={1,2,4,6,8,9};
        int target=5;
        System.out.println(BinarySearch(arr,target));
    }

    static int BinarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target ==arr[mid]) {
              return arr[mid];

            } else if (target>arr[mid]) {
start=mid+1;            }
            else{
end=mid-1;            }


        }
        return arr[end];

    }
}
public class TwoSum {
    public static void main(String[] args) {
        int sum=9;
        int[] arr={1,3,4,3,4,3,2,7};
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]==sum){
                    System.out.println("sum is found"+arr[i]+"and"+arr[j]);
                }
            }
        }
    }
}

public class MaximumValue {
    public static void main(String[] args) {

        int[] arr={1,2,3,1444,5,6,67};
        int max=arr[0];
        for(int i=0;i<arr.length;i++){
           if(arr[i]>max){
               max=arr[i];

           }
        }
        System.out.println("the greatest number is :"+max);

    }
}

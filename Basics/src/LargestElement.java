public class LargestElement {

    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,5,77};
        int largest=arr[0];
        int length=arr.length;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>largest){
                largest=arr[i];

            }
        }
        System.out.println("Largest is :"+ largest);
        System.out.println("Length of the Arr:"+length);
}
}
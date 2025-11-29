public class SecondLargest {
    public static void main(String[] args) {
        int arr[]={9,2,3,4,5,9,10,10};
        System.out.println("second largest is"+second(arr));
        System.out.println("second largest is"+secmin(arr));
    }

    static int second(int arr[]){
        int largest=arr[0];
        int slargest=-1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>largest){
                slargest=largest;
                largest=arr[i];

            }
            else if(arr[i]>slargest && arr[i]<largest){
                slargest=arr[i];
            }

        }
        return slargest;
    }

    static int secmin(int arr[]){
        int min=arr[0];
        int smin= Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i]<min){
                smin=min;
                min=arr[i];

            }
            else if(arr[i]<smin && arr[i]>min){
                smin=arr[i];

            }
        }
        return smin;

    }


}

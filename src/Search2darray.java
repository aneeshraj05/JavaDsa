public class Search2darray {
    public static void main(String[] args) {
        int arr[][]={{
            1,2,3
        },
                {
                    1,3,5
                },};


        for(int nums[]:arr){
            for(int ele:nums){
                if(ele==9){
                    System.out.println("element found");
                }
            }
        }
    }
}

public class EnhancedForloop {
    public static void main(String[] args) {
        int arr[][]={
                {9,2,3},
                {2,3,4,},
                {2,3,4,}
        };
        int min=arr[0][0];
        for(int[] row:arr){

            for(int column:row){

                if(column<min){
                    min=column;
                }
            }

        }
        System.out.println(min);
    }
}

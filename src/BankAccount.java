public class BankAccount {
    public static void main(String[] args) {
        int[][] bank={
            {1,2,3},
            {2,1},
        };
        int sum=0;
        int max= Integer.MIN_VALUE;
        for(int[] num:bank){
            sum=0;
            for(int element:num){
                sum+=element;
            }
            if(sum>max){
                max=sum;
            }

        }


        System.out.println(max);

    }
}

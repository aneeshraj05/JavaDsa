public class HappyNumber {
    public static void main(String[] args) {
        int sum=0;
        int square=0;
        int n=19;

        while(n>0){

            int digit=n%10;
            sum+=digit;
            square+=sum*sum;
            n=n/10;


        }
        if(sum%)
        System.out.println(sum);
        System.out.println(square);
    }
}

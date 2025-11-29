public class SumOfDigits {
    public static void main(String[] args) {
        int number=12345;
        int sum=0;


        while(number>0){
            int digits=number%10;
            sum+=digits;
            number=number/10;
        }
        System.out.println(sum);



    }
}

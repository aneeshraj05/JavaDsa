public class ReverseDigits {
    public static void main(String[] args) {
        int number=1234;
        int reverse=0;
        while(number>0){
            int digits=number%10;
            reverse=reverse*10+digits;
            number =number/10;

        }
        System.out.println(reverse);
    }
}

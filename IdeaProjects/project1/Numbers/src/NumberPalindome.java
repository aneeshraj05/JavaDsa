public class NumberPalindome {
    public static void main(String[] args) {
        int num=121;
        int number=num;
        int reverse=0;
        while(number>0){
            int digits=number%10;
            reverse=reverse*10+digits;
            number =number/10;

        }
        if(num==reverse){
            System.out.println("it is an reverse number");
        }
else{
            System.out.println("it is not a reverse number");
        }
    }
}

public class CheckPalindrome {
    public static void main(String[] args) {
        int n=121;
        int reverse=0;
        while(n>0){
            int digits=n%10;
            reverse=reverse*10+digits;
            n=n/10;

        }
        if(n==reverse){
            System.out.println("true");
        }
        else{
            System.out.println("false");
        }
    }
}

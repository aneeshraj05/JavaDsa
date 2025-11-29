public class CountDigitsLog10 {
    public static void main(String[] args) {
        int n=12345;
        int count=(int)Math.floor(Math.log10(n))+1;
        System.out.println(count);
    }
}

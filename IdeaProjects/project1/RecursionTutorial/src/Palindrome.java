public class Palindrome {
    public static void main(String[] args) {
        String s="madam";
        int n=s.length();
        System.out.println(pal(0,s,n));
    }
    static boolean pal(int i,String s,int n){
        if(i>=n/2){
            return true;
        }
        if(s.charAt(i)!=s.charAt(n-i-1)){
            return false;
        }
        return pal(i+1,s,n);

    }
}

public class ReverseString {
    public static void main(String[] args) {
        String s="abcdef";
        int k=2;
        int start=0;
        char[] str=s.toCharArray();

        int end=start+1;

        char temp='\0';
        for(int i=0;i<k;i++){
            temp=str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
        }
        System.out.println(str);
    }
}

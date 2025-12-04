import java.util.Arrays;

public class NumberToArray {

    public static void main(String[] args) {
        int  n=234;
        int even=0;
        int odd=0;

        String s=String.valueOf(n);
        int arr[]=new int[s.length()];
        for(int i=0;i<s.length();i++){
            arr[i]=s.charAt(i)-'0';

            if(i%2==0){
                even+=arr[i];
            }
            else{
                odd+=arr[i];

            }
        }


int diff=even-odd;
        System.out.println(diff);


    }


}

import java.util.Arrays;

public class AnagramJAva {
    public static void main(String[] args) {
        String s="abc";
        String t="abcdhd";
        System.out.println(anagram(s,t));

    }
    static boolean anagram(String s,String t){
        char[] str=s.toCharArray();
        char[] str1=t.toCharArray();

        if(s.length()==t.length()){
            return true;
        }
        for(int i=0;i<s.length();i++){

        }
        return false;
    }
}

public class StringEqual {
    public static void main(String[] args) {
        String[] word1={"ab", "c"};
        String[] word2={"a","b54c"};
        String s1=String.join(" ",word1).replaceAll(" ","");
        String s2=String.join(" ",word2).replaceAll(" ","");
if(s1.equals((s2))){
    System.out.println("true");
}
else{
    System.out.println("false");
}

    }
}

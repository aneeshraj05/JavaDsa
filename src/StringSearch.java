public class StringSearch {
    public static void main(String[] args) {
        String str="aneesh";

        System.out.println(StringSearc(str,'p'));
    }
    static String StringSearc(String str,char target){
       for(char s:str.toCharArray()){
           if(s==target){
               return "element found0";
           }

       }
       return "not found";
    }
}

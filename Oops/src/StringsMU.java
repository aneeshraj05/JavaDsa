public class StringsMU {
    public static void main(String[] args) {
       String s="NitiN";
       char[] arr=s.toCharArray();
       int start=0;
       int end=arr.length-1;

       while(start<=end){
           if(arr[start]==arr[end]){

               start++;
               end--;


           }
           else{
               System.out.println("not palaindrome");
               return;
           }

       }
        System.out.println("palindrome");



    }
}

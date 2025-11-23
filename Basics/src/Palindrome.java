public  class Palindrome {

    static boolean checkPalindrome(String name){
        char[] arr=name.toCharArray();
        int start=0;
        int end =arr.length-1;

        while(start<=end){
            if(arr[start]!=arr[end]){
               return false;

            }
            start++;
            end--;


        }
       return true;


    }


    public static void main(String[] args) {
        String name="bob";
        String name1="bablu";
        boolean isPalindrome=false;
        System.out.println(        checkPalindrome(name));
    }
}
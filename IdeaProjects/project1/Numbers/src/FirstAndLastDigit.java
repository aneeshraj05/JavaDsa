public class FirstAndLastDigit {

    public static void main(String[] args) {

        int first=0;
        int number=12334;
        int last=number%10;
        while(number>=10){
            number=number/10;
            first =number;



        }
        System.out.println(first);

        System.out.println(first+last);

    }




}

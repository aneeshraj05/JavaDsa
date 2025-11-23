public class CountDigit {

    public static void main(String[] args) {
        int number =123456789;
        int count =0;
        while(number>0){
           number =number/10;
            count+=1;

        }
        System.out.println(count);
    }


}

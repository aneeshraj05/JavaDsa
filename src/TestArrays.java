import java.util.Arrays;
import java.util.Scanner;


public class TestArrays
{

    public static void main(String[] args) {
        Scanner scanner =new Scanner(System.in);

        int[] arr=new int[5];
        System.out.println("enter 5 number to form an array");
        for (int i=0;i<arr.length;i++){
            arr[i]=scanner.nextInt();
        }


        System.out.println(Arrays.toString(arr));

        for(int num:arr){
            num+=num;
            System.out.println(num);

        }





    }
}

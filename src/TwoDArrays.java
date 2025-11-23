import java.util.*;

public class TwoDArrays {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int[][] arr=new int[3][3];
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                arr[i][j]=scan.nextInt();
            }
        }
        System.out.println("2d array orint");
        for(int i=0;i<arr.length;i++){

            System.out.println(Arrays.toString(arr[i]));
        }
    }
}

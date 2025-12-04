import java.util.Arrays;

public class BinarySearch2d {
    public static void main(String[] args) {

        int arr[][]={
                {1,2,3},
                {4,5,6},
                {7,8,9},
        };

        int target=9;


        System.out.println(Arrays.toString(Bs2d(arr, target)));    }



    static int[] Bs2d(int arr[][],int target){
int r=0;
int c=arr[0].length-1;
while(r<arr.length&& c>=0){
    if(arr[r][c]==target){
return new int[]{r,c};
    }
    else if(arr[r][c]<target){
        r++;

    }
    else{
        c--;
    }
}
        return new int[]{-1,-1};



    }

}

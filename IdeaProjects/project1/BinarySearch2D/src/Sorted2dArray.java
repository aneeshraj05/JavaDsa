import java.util.Arrays;

public class Sorted2dArray {
        public static void main(String[] args) {
            int[][] matrix = {
                    {1, 3, 5, 7},
                    {10, 11, 16, 20},
                    {23, 30, 34, 60}
            };
            int row=matrix.length;
            int target=23;

            System.out.println(Arrays.toString(SortedBs(matrix,target)));
        }

        static int[] SortedBs(int matrix[][],int target){
            int rows=matrix.length;
            int cols=matrix[0].length;
           int start=0;

           int end=rows*cols-1;
           while(start<=end){
               int mid=start+(end-start)/2;
               int row=mid/cols;
               int col=mid%cols;
               if(matrix[row][col]==target){
                   return new int[] {row, col};
               }
               else if(matrix[row][col]<target){
                   start=mid+1;
               }
               else{
                   end=mid-1;
               }


           }
           return new int[]{-1,-1};

        }
    }

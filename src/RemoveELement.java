import java.util.Arrays;

public class RemoveELement {
    public static void main(String[] args) {
        int[] nums={1,2,2,3,4};
        int j=0;
        int val=2;
        for(int i=0;i<nums.length;i++){
            if(nums[i]!=val){
                nums[j]=nums[i];
                j++;

            }
        }
        System.out.println(Arrays.toString(nums));
    }
}

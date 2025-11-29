import org.w3c.dom.ls.LSOutput;

import java.util.Arrays;

public class LeftRotate {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6};
        int k=2;

leftrotate(arr,k);
        System.out.println(Arrays.toString(arr));






    }

    static void reverse(int arr[],int start,int end){
       while(start<end){
           int temp=arr[start];
           arr[start]=arr[end];
           arr[end]=temp;
           start ++;
           end--;

       }


    }

    static void leftrotate(int arr[],int n){
int length=arr.length;
n=n%length;
reverse(arr,0,n-1);
reverse(arr,n,length-1);
reverse(arr,0,length-1);
    }


}

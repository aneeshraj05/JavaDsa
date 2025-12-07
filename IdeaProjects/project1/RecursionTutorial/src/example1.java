public class example1 {
    public static void main(String[] args) {
        Number(0,0);

    }
    static void Number(int i,int sum){
        if(i>5){
            return;
        }
        System.out.println();
        Number(i+1,sum+=sum);
    }
}

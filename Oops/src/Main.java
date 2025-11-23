class Calculator{
    public int add(int a,int b){
        return a+b;

    }
        }
public class Main {
    public static void main(String[] args) {

        int a=1;
        int b=2;
        Calculator calc =new Calculator();
        System.out.println(calc.add(a,b));

    }
}
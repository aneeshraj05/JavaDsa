class Human{
    private  int age;
    private String name;

    public  Human(String name){
this.name=name;
if(name.equals("subbu")){
    System.out.println("true");

}

else{

    System.out.println("false");

}

    }


    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }




}




public class Encapsulationjava {
    public static void main(String[] args) {


Human hum=new Human("subbu");
        System.out.println(hum);


            }
}

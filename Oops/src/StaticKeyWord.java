class Mobile{
    static String name;
    int model;

    public void show(){
        System.out.println(" your phone is" + " " +name + " "  +"your model is" + " " + model);
    }

    public static void  show1(Mobile object){
        System.out.println("Your phone is" + ":" + name + "and" + "your model is" + object.model);
    }

}


public class StaticKeyWord {
    public static void main(String[] args) {


        Mobile n=new Mobile();
//      n.name="Samsung";
//      n.model=19;
//
//      Mobile m=new Mobile();
//
//      m.model=20;
//
//
//Mobile.name="namisan";
//
//        n.show();
//        m.show();
        Mobile.name="samsung";
        n.model=19;
        Mobile.show1(n);



    }
}

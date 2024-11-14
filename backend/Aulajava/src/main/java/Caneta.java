public class Caneta {

    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada; /* sim ou não */

    void rabiscar(){
        if(tampada == true){
            System.out.println("Tenta escrever aí mula! ^^");
        }
        else{
            System.out.println("Pode Rabiscar com moderação!");
        }
    }
    void tampar(){
        tampada = true;
    }
    void destampar(){
        tampada = false;
    }

    void estado(){
        System.out.println("Caneta do modelo: " + modelo); /* Exatamente do modelo modelo :>  */
        System.out.println("Caneta tem a cor: " + cor);
        System.out.println("Caneta da ponta: " + ponta);
        System.out.println("Caneta está com a carga em: " + carga + "%");
        System.out.println("Caneta tampada? " + tampada);
    }


}

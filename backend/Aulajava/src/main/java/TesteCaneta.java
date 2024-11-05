public class TesteCaneta {
    public static void main(String[] args) {
        Caneta caneta1 = new Caneta();

        caneta1.modelo = "esferográfica";
        caneta1.cor = "Azul";
        caneta1.ponta = 0.5f;
        caneta1.carga = 90;
        //caneta1.tampada = true; >> //Disse que está tampada

        caneta1.tampar(); //tampei a caneta
        caneta1.estado();
        caneta1.rabiscar();

    }
}

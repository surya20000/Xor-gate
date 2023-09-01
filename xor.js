public class XORGate {
    public static void main(String[] args) {
        boolean inputA = true;
        boolean inputB = false;
        
        boolean result = xor(inputA, inputB);
        
        System.out.println("Input A: " + inputA);
        System.out.println("Input B: " + inputB);
        System.out.println("XOR Result: " + result);
    }
    public static boolean xor(boolean a, boolean b) {
        return (a || b) && !(a && b);
    }
}

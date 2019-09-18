import TwoStackQueue;

public class TestTwoStackQueue {
    public static void main(String[] args) {
        TwoStackQueue queue = new TwoStackQueue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.poll();
        queue.poll();
        queue.peek();
    }
}

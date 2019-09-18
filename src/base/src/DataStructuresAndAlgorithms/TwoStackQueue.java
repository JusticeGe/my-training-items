import java.util.Stack;

public class TwoStackQueue {

    public Stack<Integer> stackPush;
    public Stack<Integer> stackPop;

    public TwoStackQueue() {
        stackPop = new Stack<Integer>();
        stackPush = new Stack<Integer>();
    }

    private void pushToPop() {
        if (stackPop.empty()) {
            while (!stackPush.empty()) {
                stackPop.push(stackPush.pop());
            }
        }
    }

    public void add(int pushInt) {
        stackPush.push(pushInt);
        pushToPop();
    }

    public int poll() {
        if (stackPop.empty() && stackPush.empty()) {
            throw new RuntimeException("Queue is empty!");
        }
        pushToPop();
        return stackPop.pop();
    }

    public int peek() {
        if (stackPop.empty() && stackPush.empty()) {
            throw new RuntimeException("Queue is empty!");
        }
        pushToPop();
        return stackPop.peek();
    }

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

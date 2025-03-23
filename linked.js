class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Class for Singly Linked List
class SinglyLinkedList {
    Node head; 

    // node at the beginning
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head; 
        head = newNode; 
    }

    // node at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) { 
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null) { 
            temp = temp.next;
        }
        temp.next = newNode; 
    }

    // Delete a node from beginning
    public void deleteFromBeginning() {
        if (head == null) {
            System.out.println("List is empty, nothing to delete.");
            return;
        }
        head = head.next; 
    }

    // Linked List 
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("NULL");
    }

  
    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();

        list.insertAtBeginning(10);
        list.insertAtBeginning(20);
        list.insertAtEnd(30);
        list.insertAtEnd(40);

        System.out.println("Linked List:");
        list.display();

        list.deleteFromBeginning();
        System.out.println("After deleting from beginning:");
        list.display();
    }
}

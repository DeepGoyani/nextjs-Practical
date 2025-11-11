export interface Order {
  id: string;
  itemId: string;
  quantity: number;
  customerName: string;
  status: "pending" | "completed";
}

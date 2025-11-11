import { NextRequest, NextResponse } from "next/server";
import { Order } from "@/types/order";

let orders: Order[] = [];

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newOrder: Order = {
    id: Date.now().toString(),
    itemId: body.itemId,
    quantity: body.quantity,
    customerName: body.customerName,
    status: "pending",
  };

  orders.push(newOrder);
  return NextResponse.json(newOrder, { status: 201 });
}

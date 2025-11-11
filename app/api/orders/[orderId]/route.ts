import { NextRequest, NextResponse } from "next/server";
import { Order } from "@/types/order";

let orders: Order[] = [];

export async function GET(req: NextRequest, { params }: { params: { orderId: string } }) {
  const order = orders.find((o) => o.id === params.orderId);

  if (!order)
    return NextResponse.json({ message: "Order not found" }, { status: 404 });

  return NextResponse.json(order);
}

export async function PATCH(req: NextRequest, { params }: { params: { orderId: string } }) {
  const updates = await req.json();
  const index = orders.findIndex((o) => o.id === params.orderId);

  if (index === -1)
    return NextResponse.json({ message: "Order not found" }, { status: 404 });

  orders[index] = { ...orders[index], ...updates };
  return NextResponse.json(orders[index]);
}

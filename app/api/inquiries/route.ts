import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Field Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Cargo details / project summary must be at least 5 characters." },
        { status: 400 }
      );
    }

    // In a real database environment, record will be stored in MySQL.
    // In this prototype, generate clean receipt confirmation.
    const inquiryRecord = {
      id: `inq_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      company: company ? company.trim() : null,
      service: service || "General Inquiry",
      message: message.trim(),
      status: "received",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received by the Cargosent Shanghai dispatch desk.",
        inquiry: inquiryRecord,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}

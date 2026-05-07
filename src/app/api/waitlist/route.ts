import { NextRequest, NextResponse } from 'next/server'

type WaitlistPayload = {
  email: string
  product?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WaitlistPayload

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // TODO: wire to HubSpot, Resend, or Notion DB
    // Example HubSpot list enrollment:
    //   await fetch(
    //     `https://api.hubapi.com/contacts/v1/lists/${process.env.HUBSPOT_WAITLIST_LIST_ID}/add`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ emails: [body.email] }),
    //     }
    //   )
    //
    // Example Resend audience:
    //   await resend.contacts.create({
    //     email: body.email,
    //     audienceId: process.env.RESEND_AUDIENCE_ID!,
    //     unsubscribed: false,
    //   })

    console.info('[waitlist] New signup:', body.email, body.product ?? '')

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

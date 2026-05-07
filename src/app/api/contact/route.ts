import { NextRequest, NextResponse } from 'next/server'

type ContactPayload = {
  orgName: string
  name: string
  role: string
  orgType: string
  staffCount: string
  concerns: string[]
  message?: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload

    // Basic server-side validation
    if (!body.orgName || !body.name || !body.role || !body.orgType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: wire to HubSpot, Resend, or Notion DB
    // Example HubSpot:
    //   await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       properties: {
    //         email: body.email,
    //         firstname: body.name,
    //         company: body.orgName,
    //         jobtitle: body.role,
    //         hs_lead_status: 'NEW',
    //       },
    //     }),
    //   })
    //
    // Example Resend:
    //   await resend.emails.send({
    //     from: 'noreply@purpleriver.org',
    //     to: 'hello@purpleriver.org',
    //     subject: `New inquiry: ${body.orgName}`,
    //     text: JSON.stringify(body, null, 2),
    //   })

    console.info('[contact] New inquiry from', body.orgName)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

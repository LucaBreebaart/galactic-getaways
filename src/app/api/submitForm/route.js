import { NextResponse } from "next/server";
import { sendMail } from "@/app/modules/mail/Client";

export async function POST(request) {
    const fromdata = await request.json()

    await sendMail("to@example.com", "New website form submission",
        `
    <html>
    <head>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
        <table style="background-color: #fff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); padding: 20px; width: 100%;">
            <tr>
                <td colspan="2">
                    <h2 style="color: #333;">New Form Submission</h2>
                </td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding-bottom: 10px;">First Name:</td>
            </tr>
            <tr>
                <td style="padding-bottom: 10px;">${fromdata.name}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; padding-bottom: 10px;">Email:</td>
            </tr>
            <tr>
                <td style="padding-bottom: 10px;">${fromdata.email_adress}</td>
            </tr>
        </table>
    </body>
    </html>
        `, []
    )

    return NextResponse.json({
        Code: 200,
        Status: "Success"
    })
}
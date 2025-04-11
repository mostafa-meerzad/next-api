import { NextRequest ,NextResponse } from "next/server";

export async function GET (){
return NextResponse.json({message: "well done"})
}

export async function POST (request: NextRequest){

    const body = await request.json()

    console.log("body: ", body)

    return NextResponse.json({message: "thanks for posting", data: body})
}
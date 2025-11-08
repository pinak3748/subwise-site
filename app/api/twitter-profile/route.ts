import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const handle = request.nextUrl.searchParams.get("handle")

  if (!handle) {
    return NextResponse.json({ error: "Handle is required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${handle}?user.fields=profile_image_url`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
        },
      },
    )

    if (!response.ok) {
      // If Twitter API returns 404 or rate limit, return a placeholder
      return NextResponse.json(
        {
          profileImage: null,
          error: "Could not fetch Twitter profile",
        },
        { status: 200 },
      )
    }

    const data = await response.json()
    const profileImage = data.data?.profile_image_url || null

    return NextResponse.json({
      profileImage,
      handle,
    })
  } catch (error) {
    console.error("Error fetching Twitter profile:", error)
    return NextResponse.json(
      {
        profileImage: null,
        error: "Server error",
      },
      { status: 200 },
    )
  }
}

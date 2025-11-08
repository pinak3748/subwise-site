import { createClient } from "@/lib/supabase/client"

export interface LeaderboardEntry {
  id: number
  handle: string
  arrows: number
  time: number
  twitter_profile_image: string | null
}

export async function submitScore(handle: string, arrows: number, time: number): Promise<LeaderboardEntry | null> {
  const supabase = createClient()

  try {
    // Fetch Twitter profile image
    let profileImage: string | null = null
    try {
      const response = await fetch(`/api/twitter-profile?handle=${encodeURIComponent(handle)}`)
      const data = await response.json()
      profileImage = data.profileImage
    } catch (error) {
      console.error("Error fetching Twitter profile image:", error)
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("leaderboard")
      .insert([
        {
          handle,
          arrows,
          time,
          twitter_profile_image: profileImage,
        },
      ])
      .select()

    if (error) {
      console.error("Error submitting score:", error)
      return null
    }

    return data?.[0] || null
  } catch (error) {
    console.error("Error in submitScore:", error)
    return null
  }
}

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("leaderboard")
      .select("*")
      .order("arrows", { ascending: false })
      .order("time", { ascending: true })
      .limit(100)

    if (error) {
      console.error("Error fetching leaderboard:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in fetchLeaderboard:", error)
    return []
  }
}

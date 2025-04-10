
// Mock data for the music streaming app

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  duration: string;
  image: string;
  lyrics: string[];
  album?: string;
  year?: number;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songs: Song[];
}

export const genres = [
  "All",
  "Old is Gold",
  "90s Love",
  "Bollywood",
  "Pop",
  "Rock",
  "Hip Hop",
  "Electronic",
  "Lo-fi",
  "Jazz"
];

export const songs: Song[] = [
  {
    id: "song-001",
    title: "Your Eyes",
    artist: "Barney Sku ft. Taqiya Zaman",
    genre: "Lo-fi",
    mood: "Chill",
    duration: "3:25",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop",
    album: "Midnight Thoughts",
    year: 2023,
    lyrics: [
      "Your eyes reflect the sky",
      "Lost in the quiet night",
      "Whispers echo the stars",
      "Wonder where we are",
      "Your eyes, like moonlight beams",
      "Guiding through my dreams",
      "Time stops when we're apart",
      "Your eyes are where I start",
      "And I've been searching for answers",
      "Looking for a sign",
      "But all I need to discover",
      "Is right there in your eyes",
      "Your eyes tell stories untold",
      "Secrets of our souls",
      "Dancing in the light",
      "Shining oh so bright"
    ]
  },
  {
    id: "song-002",
    title: "Summer Daze",
    artist: "Lily Chen",
    genre: "Pop",
    mood: "Happy",
    duration: "2:58",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=300&auto=format&fit=crop",
    album: "Sunset Memories",
    year: 2022,
    lyrics: [
      "Summer breeze, feeling free",
      "Golden sand beneath my feet",
      "Ocean waves crash and play",
      "Perfect vibes all day",
      "Sunshine bright, warming my soul",
      "Summer stories yet untold",
      "Living life without a care",
      "Sweet moments everywhere"
    ]
  },
  {
    id: "song-003",
    title: "Midnight Drive",
    artist: "Alex Storm",
    genre: "Electronic",
    mood: "Energetic",
    duration: "4:15",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&auto=format&fit=crop",
    album: "Neon Roads",
    year: 2023,
    lyrics: [
      "Headlights cutting through the dark",
      "City lights like scattered stars",
      "Music loud, heart beating fast",
      "Making moments that will last",
      "Midnight drive, no destination",
      "Pure freedom, no limitation",
      "Racing thoughts begin to slow",
      "Just the road and where we'll go"
    ]
  },
  {
    id: "song-004",
    title: "Rainy Day Blues",
    artist: "Marcus Green",
    genre: "Jazz",
    mood: "Sad",
    duration: "5:32",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=300&auto=format&fit=crop",
    album: "Urban Melodies",
    year: 2021,
    lyrics: [
      "Raindrops falling on my window pane",
      "Each one carries memories and pain",
      "Jazz notes floating through the air",
      "Soothing souls in deep despair",
      "The city looks different in the rain",
      "Reflections, distortions, not the same",
      "These rainy day blues won't go away",
      "Just sitting here waiting for a sunny day"
    ]
  },
  {
    id: "song-005",
    title: "Desert Rose",
    artist: "Luna Pearl",
    genre: "World",
    mood: "Chill",
    duration: "3:47",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=300&auto=format&fit=crop",
    album: "Global Rhythms",
    year: 2023,
    lyrics: [
      "Desert winds carry ancient tales",
      "Through golden sands and dusty veils",
      "Rose blooming where none should grow",
      "Nature's strength in full show",
      "Under stars that light the night",
      "Whispered prayers take flight",
      "Desert rose so rare and bold",
      "Your story deserves to be told"
    ]
  },
  {
    id: "song-006",
    title: "City Lights",
    artist: "Neon Dreams",
    genre: "Synthwave",
    mood: "Energetic",
    duration: "4:05",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=300&auto=format&fit=crop",
    album: "Retrowave Nights",
    year: 2022,
    lyrics: [
      "Neon signs illuminate the night",
      "City pulse beating with delight",
      "Skyscrapers reaching for the stars",
      "Late-night diners and busy bars",
      "Lost in the rhythm of urban life",
      "Electric energy cutting like a knife",
      "City lights guiding me home",
      "Through streets I love to roam"
    ]
  },
  {
    id: "song-007",
    title: "Mountain Echo",
    artist: "Forest Whispers",
    genre: "Acoustic",
    mood: "Peaceful",
    duration: "4:38",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=300&auto=format&fit=crop",
    album: "Natural Wonders",
    year: 2020,
    lyrics: [
      "Standing tall against the sky",
      "Majestic peaks reaching high",
      "Echo of my voice returns",
      "While the sunset gently burns",
      "Ancient wisdom in the stone",
      "Teaching me I'm not alone",
      "Mountain spirits guide my way",
      "Through the mist of breaking day"
    ]
  },
  {
    id: "song-008",
    title: "Velvet Groove",
    artist: "Smooth Operators",
    genre: "R&B",
    mood: "Chill",
    duration: "3:55",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=300&auto=format&fit=crop",
    album: "Silky Soul",
    year: 2023,
    lyrics: [
      "Velvet voice, silky smooth",
      "Got me in a special mood",
      "Bass line deep, rhythm tight",
      "Perfect groove for tonight",
      "Candle light, wine so fine",
      "Everything feels divine",
      "Lost in the velvet groove",
      "No desire to move or prove"
    ]
  }
];

export const playlists: Playlist[] = [
  {
    id: "playlist-001",
    title: "Chill Vibes",
    description: "Perfect for relaxing evenings",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=300&auto=format&fit=crop",
    songs: [songs[0], songs[4], songs[7]]
  },
  {
    id: "playlist-002",
    title: "Workout Mix",
    description: "High energy tracks to keep you moving",
    coverImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=300&auto=format&fit=crop",
    songs: [songs[2], songs[5]]
  },
  {
    id: "playlist-003",
    title: "Mood Boosters",
    description: "Songs to lift your spirits",
    coverImage: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&w=300&auto=format&fit=crop",
    songs: [songs[1], songs[6]]
  },
  {
    id: "playlist-004",
    title: "Rainy Day Collection",
    description: "Perfect soundtrack for rainy days",
    coverImage: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=300&auto=format&fit=crop",
    songs: [songs[3], songs[7]]
  }
];

export const mostPlayedTrack = songs[0]; // "Your Eyes" is the most played track

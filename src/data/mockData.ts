// Here we're including mock data for the application

// Song interface definition
export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  image: string;
  album?: string;
  year?: number;
  audio?: string; // Added audio property to Song interface
  lyrics: string[];
}

// Playlist interface definition
export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songs: string[]; // Array of song IDs
}

// Available genres
export const genres = [
  "All",
  "Lo-fi",
  "Jazz",
  "Pop",
  "Rock",
  "Hip Hop",
  "Electronic"
];

// Mock songs data
export const songs: Song[] = [
  {
    id: "s001",
    title: "Drifting Away",
    artist: "Midnight Collective",
    genre: "Lo-fi",
    duration: "4:12",
    image: "https://images.unsplash.com/photo-1606761940304-129c8ab9beca?q=80&w=300&auto=format&fit=crop",
    album: "Late Night Vibes",
    year: 2022,
    audio: "https://cdn.trendybeatz.com/audio/Rema-Calm-Down-(TrendyBeatz.com).mp3",
    lyrics: [
      "City lights blur in the rain",
      "Another night, same old pain",
      "But in my dreams, I fly away",
      "To a place where I can stay"
    ]
  },
  {
    id: "s002",
    title: "Smooth Sailing",
    artist: "The Jazz Pioneers",
    genre: "Jazz",
    duration: "5:21",
    image: "https://images.unsplash.com/photo-1508700942705-55a98ab0e4ca?q=80&w=300&auto=format&fit=crop",
    album: "Timeless Classics",
    year: 1968,
    audio: "https://cdn.trendybeatz.com/audio/Davido-Feel-(TrendyBeatz.com).mp3",
    lyrics: [
      "The sax plays on, a sweet refrain",
      "In smoky rooms, we ease the pain",
      "With every note, a memory",
      "Of love and loss, eternally"
    ]
  },
  {
    id: "s003",
    title: "Sunset Boulevard",
    artist: "Indie Pop Stars",
    genre: "Pop",
    duration: "3:55",
    image: "https://images.unsplash.com/photo-1533628779413-97959653916e?q=80&w=300&auto=format&fit=crop",
    album: "Summer Anthems",
    year: 2023,
    audio: "https://cdn.trendybeatz.com/audio/Omah-Lay-Reason-(TrendyBeatz.com).mp3",
    lyrics: [
      "Driving down Sunset, windows down",
      "Chasing dreams in this lonely town",
      "Hoping for a break, a lucky sign",
      "Underneath the California shine"
    ]
  },
  {
    id: "s004",
    title: "Riff Master",
    artist: "Rock Titans",
    genre: "Rock",
    duration: "4:30",
    image: "https://images.unsplash.com/photo-1549480493-53e81a17694a?q=80&w=300&auto=format&fit=crop",
    album: "Stadium Rock",
    year: 1985,
    audio: "https://cdn.trendybeatz.com/audio/Asake-Amapiano-(TrendyBeatz.com).mp3",
    lyrics: [
      "Guitar screams, the crowd goes wild",
      "A sea of faces, every child",
      "Lost in the music, the driving beat",
      "Rock and roll, can't be beat"
    ]
  },
  {
    id: "s005",
    title: "City Heights",
    artist: "Urban Beats Crew",
    genre: "Hip Hop",
    duration: "3:20",
    image: "https://images.unsplash.com/photo-1516235692448-1e5b97346591?q=80&w=300&auto=format&fit=crop",
    album: "Street Anthems",
    year: 2021,
    audio: "https://cdn.trendybeatz.com/audio/Kizz-Daniel-Twe-Twe-(TrendyBeatz.com).mp3",
    lyrics: [
      "Concrete jungle, where dreams are made",
      "Hustle hard, never be afraid",
      "From the streets, we rise above",
      "In hip hop, we find our love"
    ]
  },
  {
    id: "s006",
    title: "Electric Dreams",
    artist: "Synth Wizards",
    genre: "Electronic",
    duration: "6:05",
    image: "https://images.unsplash.com/photo-1611262584375-53595ba133f1?q=80&w=300&auto=format&fit=crop",
    album: "Future Sounds",
    year: 2024,
    audio: "https://cdn.trendybeatz.com/audio/Burna-Boy-City-Boys-(TrendyBeatz.com).mp3",
    lyrics: [
      "Synthesizers hum, a digital trance",
      "In the club, we lose our chance",
      "To find ourselves, in the neon glow",
      "Electronic beats, help us flow"
    ]
  },
  {
    id: "s007",
    title: "Misty Morning",
    artist: "Chill Study Beats",
    genre: "Lo-fi",
    duration: "3:50",
    image: "https://images.unsplash.com/photo-1531867563544-c163684ddc7d?q=80&w=300&auto=format&fit=crop",
    album: "Cozy Vibes",
    year: 2022,
    audio: "https://cdn.trendybeatz.com/audio/Ayra-Starr-Rhythm-Blues-(TrendyBeatz.com).mp3",
    lyrics: [
      "Coffee steams, the day begins",
      "With gentle tunes, washing over sins",
      "In every note, a peaceful sign",
      "Lo-fi beats, make everything fine"
    ]
  },
  {
    id: "s008",
    title: "Saxophone Serenade",
    artist: "Jazzy Moods",
    genre: "Jazz",
    duration: "4:45",
    image: "https://images.unsplash.com/photo-1576897390395-f454a19b1110?q=80&w=300&auto=format&fit=crop",
    album: "Midnight Jazz",
    year: 1975,
    audio: "https://cdn.trendybeatz.com/audio/Wizkid-IDK-(TrendyBeatz.com).mp3",
    lyrics: [
      "Saxophone sings, a soulful plea",
      "In dimly lit bars, we feel so free",
      "With every chord, a story told",
      "Jazz music, never gets old"
    ]
  },
  {
    id: "s009",
    title: "Summer Love",
    artist: "Teen Pop Sensations",
    genre: "Pop",
    duration: "3:30",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=300&auto=format&fit=crop",
    album: "Beach Party",
    year: 2023,
    audio: "https://cdn.trendybeatz.com/audio/Young-Jonn-Aquafina-(TrendyBeatz.com).mp3",
    lyrics: [
      "Sun-kissed skin, and ocean breeze",
      "Summer love, puts us at ease",
      "With every touch, a sweet delight",
      "Pop songs play, all through the night"
    ]
  },
  {
    id: "s010",
    title: "Guitar Hero",
    artist: "Metal Gods",
    genre: "Rock",
    duration: "5:10",
    image: "https://images.unsplash.com/photo-1551859004-a3b5115f45b6?q=80&w=300&auto=format&fit=crop",
    album: "Headbangers Ball",
    year: 1990,
    audio: "https://cdn.trendybeatz.com/audio/Spyro-Who-Is-Your-Guy-(TrendyBeatz.com).mp3",
    lyrics: [
      "Heavy riffs, shake the ground",
      "Metal gods, all around",
      "With every solo, a burning fire",
      "Rock anthems, take us higher"
    ]
  },
  {
    id: "s011",
    title: "Urban Flow",
    artist: "Rap Legends",
    genre: "Hip Hop",
    duration: "3:40",
    image: "https://images.unsplash.com/photo-1605296867304-46d4625df7ea?q=80&w=300&auto=format&fit=crop",
    album: "City Streets",
    year: 2022,
    audio: "https://cdn.trendybeatz.com/audio/Seyi-Vibez-Hat-Trick-(TrendyBeatz.com).mp3",
    lyrics: [
      "From the block, to the top",
      "Hip hop beats, never stop",
      "With every rhyme, a story told",
      "Urban flow, brave and bold"
    ]
  },
  {
    id: "s012",
    title: "Techno Pulse",
    artist: "Dancefloor Kings",
    genre: "Electronic",
    duration: "6:30",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=300&auto=format&fit=crop",
    album: "Rave Nation",
    year: 2023,
    audio: "https://cdn.trendybeatz.com/audio/Shallipopi-Elon-Musk-(TrendyBeatz.com).mp3",
    lyrics: [
      "Techno beats, pulse so strong",
      "All night long, we can't go wrong",
      "With every drop, a pure sensation",
      "Electronic music, our liberation"
    ]
  }
];

// Most played track
export const mostPlayedTrack: Song = {
  id: "mp001",
  title: "Midnight Dreams",
  artist: "Luna Waves",
  genre: "Lo-fi",
  duration: "3:45",
  image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop",
  album: "Midnight Thoughts",
  year: 2023,
  audio: "https://cdn.trendybeatz.com/audio/Imagine-Dragons-Bad-Liar-(TrendyBeatz.com).mp3",
  lyrics: [
    "Your eyes reflect the sky",
    "Lost in the quiet night",
    "Memories passing by",
    "In the soft moonlight",
    "Time slows when you're near",
    "Words we need not speak",
    "The stars align so clear",
    "In dreams we always meet"
  ]
};

// Mock playlists
export const playlists: Playlist[] = [
  {
    id: "pl001",
    title: "Chill Lo-fi Beats",
    description: "Perfect for studying or relaxing.",
    coverImage: "https://images.unsplash.com/photo-1543784014-495ea3992341?q=80&w=300&auto=format&fit=crop",
    songs: ["s001", "s007"]
  },
  {
    id: "pl002",
    title: "Classic Jazz",
    description: "Timeless jazz standards for every mood.",
    coverImage: "https://images.unsplash.com/photo-1520523834775-226121970549?q=80&w=300&auto=format&fit=crop",
    songs: ["s002", "s008"]
  },
  {
    id: "pl003",
    title: "Summer Pop Hits",
    description: "The ultimate soundtrack for your summer adventures.",
    coverImage: "https://images.unsplash.com/photo-1504280390367-36fa6e14ca59?q=80&w=300&auto=format&fit=crop",
    songs: ["s003", "s009"]
  },
  {
    id: "pl004",
    title: "Rock Anthems",
    description: "The greatest rock songs of all time.",
    coverImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbb0ba4?q=80&w=300&auto=format&fit=crop",
    songs: ["s004", "s010"]
  },
  {
    id: "pl005",
    title: "Hip Hop Essentials",
    description: "Essential hip hop tracks from the golden age to today.",
    coverImage: "https://images.unsplash.com/photo-1584321539459-64e9499ca943?q=80&w=300&auto=format&fit=crop",
    songs: ["s005", "s011"]
  },
  {
    id: "pl006",
    title: "Electronic Dance",
    description: "The best electronic dance music for your workout.",
    coverImage: "https://images.unsplash.com/photo-1542654985-b1f1453f5691?q=80&w=300&auto=format&fit=crop",
    songs: ["s006", "s012"]
  }
];

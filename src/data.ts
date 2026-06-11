import type { Post } from './types'

const avatar1 = 'https://www.figma.com/api/mcp/asset/0de3216d-0661-452e-b646-3168b7a10712'
const avatar2 = 'https://www.figma.com/api/mcp/asset/dbd69729-5bdf-4f06-ab87-1ba5a9cd8944'
const avatar3 = 'https://www.figma.com/api/mcp/asset/b3627a0c-947e-475d-8a3a-7b8c331989c6'
const avatar4 = 'https://www.figma.com/api/mcp/asset/cfde11bc-1e3d-4b22-ad9e-7e6639f0458a'
const avatar5 = 'https://www.figma.com/api/mcp/asset/113ab4ae-9266-4195-812c-42fe08e9267e'
const avatar6 = 'https://www.figma.com/api/mcp/asset/46c5ecf6-c4c1-47c3-9ab4-346ab29a54c1'
const avatar7 = 'https://www.figma.com/api/mcp/asset/d08f34a7-735f-48cd-9a0c-d241408a5e7c'
const postImage1 = 'https://www.figma.com/api/mcp/asset/06723033-4fa5-4bbc-96de-c33ec9576d9f'
const postImage2 = 'https://www.figma.com/api/mcp/asset/942f03ae-fc0b-4c63-bac2-c5ffc3bc0968'
const postImage3 = 'https://www.figma.com/api/mcp/asset/6ae6d503-fca2-4272-a937-59ed39b3581d'
const avatar5b = 'https://www.figma.com/api/mcp/asset/7d38ac95-e66b-446d-b1a7-90ec095b190a'

export const currentUser = {
  university: 'University of Ilorin',
  course: '2019/20 Mec Eng',
  avatarUrl: avatar3,
  notifAvatarUrl: avatar2,
}

export const posts: Post[] = [
  {
    id: '1',
    author: 'David Okafor',
    avatarUrl: avatar3,
    timeAgo: '12h',
    content: "Hosting a small mixer for alumni in Lekki this Friday. Coffee and vibes. Who's in? ☕️",
    hashtags: ['#houseparties'],
    imageUrl: postImage1,
    comments: 28,
    retweets: 5,
    likes: 21,
    replies: [
      {
        id: '1-1',
        author: 'Adesina Ezekiel',
        avatarUrl: avatar4,
        timeAgo: '4h',
        content: 'I am in o, let party abeg.️ share details of location so we can show',
        comments: 28,
        retweets: 5,
        likes: 21,
      },
    ],
  },
  {
    id: '2',
    author: 'Joyce Uba',
    role: 'Admin',
    avatarUrl: avatar5,
    timeAgo: '12h',
    content:
      "📢 Reminder: The mentorship program applications close this Sunday. Don't miss out on the chance to guide the next generation of leaders.",
    comments: 28,
    retweets: 5,
    likes: 21,
    quotedPost: {
      priority: 'Normal ✅',
      timeAgo: '5m ago',
      title: 'The Future of tech in Africa: 2026 Outlook',
      description: "Join us for a deep dive into the emerging trends shaping the continents technology landscape",
      authorName: 'Joyce Uba',
      authorRole: 'Set Admin',
      avatarUrl: avatar5b,
    },
  },
  {
    id: '3',
    author: 'MTN Nigeria',
    role: 'Ad',
    avatarUrl: avatar6,
    timeAgo: '',
    content: 'Upgrade to unlimited broadband internet at 200mbps download speed',
    imageUrl: postImage2,
    comments: 28,
    retweets: 5,
    likes: 21,
  },
  {
    id: '4',
    author: 'David Okafor',
    avatarUrl: avatar3,
    timeAgo: '12h',
    content: "Hosting a small mixer for alumni in Lekki this Friday. Coffee and vibes. Who's in? ☕️",
    hashtags: ['#houseparties'],
    comments: 28,
    retweets: 5,
    likes: 21,
    replies: [
      {
        id: '4-1',
        author: 'Chioma Adebayo',
        avatarUrl: avatar7,
        timeAgo: '12h',
        content:
          'Just finished the Product Strategy module. The case study on fintech in Nigeria was eye-opening! Anyone else thinking about switching to product? 🚀 #ProductManagement ',
        comments: 28,
        retweets: 5,
        likes: 21,
        imageUrl: postImage3,
      },
    ],
  },
  {
    id: '5',
    author: 'Chioma Adebayo',
    avatarUrl: avatar7,
    timeAgo: '12h',
    content:
      'Just finished the Product Strategy module. The case study on fintech in Nigeria was eye-opening! Anyone else thinking about switching to product? 🚀 #ProductManagement ',
    imageUrl: postImage3,
    comments: 28,
    retweets: 5,
    likes: 21,
  },
  {
    id: '6',
    author: 'Chioma Adebayo',
    avatarUrl: avatar7,
    timeAgo: '12h',
    content:
      "Unilorin fam! Does anyone have contacts at the Registrar's office? Need help with some transcript issues. 🙏🏾",
    comments: 28,
    retweets: 5,
    likes: 21,
  },
]

export { avatar1, avatar2, avatar3, avatar5 }

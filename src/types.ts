export interface Post {
  id: string
  author: string
  role?: 'Admin' | 'Ad'
  avatarUrl: string
  timeAgo: string
  content: string
  hashtags?: string[]
  imageUrl?: string
  comments: number
  retweets: number
  likes: number
  replies?: Reply[]
  quotedPost?: QuotedPost
}

export interface Reply {
  id: string
  author: string
  avatarUrl: string
  timeAgo: string
  content: string
  comments: number
  retweets: number
  likes: number
  imageUrl?: string
}

export interface QuotedPost {
  priority?: string
  timeAgo: string
  title: string
  description: string
  authorName: string
  authorRole: string
  avatarUrl: string
}

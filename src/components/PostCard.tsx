import type { Post } from '../types'
import { PostActions } from './PostActions'
import { DotsIcon } from '../icons'

interface PostCardProps {
  post: Post
}

function AuthorName({ name, role }: { name: string; role?: string }) {
  return (
    <span>
      <span className="font-bold text-[#111113] text-base">{name}</span>
      {role === 'Admin' && (
        <span className="text-[#0e2af5] text-base font-normal"> - Admin</span>
      )}
    </span>
  )
}

function TimeAgo({ time }: { time: string }) {
  if (!time) return null
  return <span className="text-[#687684] font-normal text-base"> · {time}</span>
}

function AdBadge() {
  return (
    <span className="bg-[#111113] text-white text-xs font-['Satoshi'] uppercase px-1.5 py-0.5 rounded-sm tracking-wide">
      Ad
    </span>
  )
}

function QuotedPost({ quoted }: { quoted: NonNullable<Post['quotedPost']> }) {
  return (
    <div className="bg-[#f5f5ff] rounded-[10px] p-3 flex flex-col gap-4">
      <div className="flex items-end justify-between">
        <span className="bg-[#ecfdf3] text-[#12b76a] text-xs font-['Satoshi'] font-medium px-1 py-0.5 rounded-[5px]">
          {quoted.priority}
        </span>
        <span className="text-[#44444c] text-[13px] font-['Satoshi']">{quoted.timeAgo}</span>
      </div>
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-['Cabinet_Grotesk',sans-serif] font-medium text-2xl leading-7 text-[#111113] capitalize">
            {quoted.title}
          </h3>
          <p className="text-[#44444c] text-base font-['Satoshi'] leading-[22px]">{quoted.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={quoted.avatarUrl}
              alt={quoted.authorName}
              className="w-8 h-8 rounded object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[#111113] text-sm font-['Satoshi'] font-medium capitalize leading-[19px]">
                {quoted.authorName}
              </span>
              <span className="text-[#44444c] text-xs font-['Satoshi'] capitalize">{quoted.authorRole}</span>
            </div>
          </div>
          <button className="text-[#687684]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8H7a4 4 0 000 8h1" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function ReplyCard({ reply }: { reply: NonNullable<Post['replies']>[0] }) {
  return (
    <div className="flex gap-[11px] items-start">
      <div className="flex flex-col items-center gap-2 w-10 shrink-0">
        <img
          src={reply.avatarUrl}
          alt={reply.author}
          className="w-8 h-8 rounded-full object-cover shadow-sm"
        />
        <div className="flex-1 w-px bg-[rgba(0,0,0,0.1)] min-h-[40px]" />
      </div>
      <div className="flex flex-col gap-4 w-full pb-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[#111113] text-base">
              {reply.author}
              <span className="text-[#687684] font-normal"> · {reply.timeAgo}</span>
            </p>
            <DotsIcon className="w-4 h-1 text-[#687684]" />
          </div>
          <p className="text-[#111113] text-base font-['Satoshi'] leading-[22px]">{reply.content}</p>
        </div>
        {reply.imageUrl && (
          <img
            src={reply.imageUrl}
            alt="post image"
            className="w-full h-[245px] object-cover rounded-[10px]"
          />
        )}
        <PostActions comments={reply.comments} retweets={reply.retweets} likes={reply.likes} />
      </div>
    </div>
  )
}

export function PostCard({ post }: PostCardProps) {
  const hasReplies = post.replies && post.replies.length > 0

  return (
    <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-4 py-6 flex flex-col gap-4">
      {/* Main post */}
      <div className="flex gap-[11px] items-start">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <img
            src={post.avatarUrl}
            alt={post.author}
            className="w-10 h-10 rounded-full object-cover shadow-sm"
          />
          {hasReplies && (
            <div className="flex-1 w-px bg-[rgba(0,0,0,0.15)] min-h-[60px]" />
          )}
        </div>
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-base leading-[22px]">
                <AuthorName name={post.author} role={post.role === 'Admin' ? 'Admin' : undefined} />
                <TimeAgo time={post.timeAgo} />
              </p>
              <div className="flex items-center gap-1.5">
                {post.role === 'Ad' && <AdBadge />}
                <DotsIcon className="w-4 h-1 text-[#687684]" />
              </div>
            </div>
            <p className="text-[#111113] text-base font-['Satoshi'] leading-[22px]">{post.content}</p>
            {post.hashtags?.map(tag => (
              <p key={tag} className="text-[#0e2af5] text-base font-['Satoshi'] leading-[22px]">{tag}</p>
            ))}
          </div>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="post"
              className="w-full h-[245px] object-cover rounded-xl"
            />
          )}

          {post.quotedPost && <QuotedPost quoted={post.quotedPost} />}

          <PostActions comments={post.comments} retweets={post.retweets} likes={post.likes} />
        </div>
      </div>

      {/* Replies */}
      {post.replies?.map((reply) => (
        <ReplyCard key={reply.id} reply={reply} />
      ))}

      {/* Show more replies link */}
      {post.replies && post.replies.length > 0 && (
        <button className="text-[#0e2af5] text-base font-['Satoshi'] tracking-[-0.3px] text-left ml-[51px]">
          Show {post.comments} more replies
        </button>
      )}
    </div>
  )
}

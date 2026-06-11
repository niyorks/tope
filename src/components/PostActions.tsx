import { CommentIcon, RetweetIcon, HeartIcon, ShareIcon } from '../icons'

interface PostActionsProps {
  comments: number
  retweets: number
  likes: number
}

export function PostActions({ comments, retweets, likes }: PostActionsProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <button className="flex items-center gap-1 text-[#687684] hover:text-[#0e2af5] transition-colors">
        <CommentIcon className="w-[15px] h-[14px]" />
        <span className="text-xs font-['Satoshi'] tracking-[-0.3px]">{comments}</span>
      </button>
      <button className="flex items-center gap-1 text-[#687684] hover:text-green-500 transition-colors">
        <RetweetIcon className="w-[18px] h-[13px]" />
        <span className="text-xs font-['Satoshi'] tracking-[-0.3px]">{retweets}</span>
      </button>
      <button className="flex items-center gap-1 text-[#687684] hover:text-red-500 transition-colors">
        <HeartIcon className="w-[15px] h-[14px]" />
        <span className="text-xs font-['Satoshi'] tracking-[-0.3px]">{likes}</span>
      </button>
      <button className="text-[#687684] hover:text-[#0e2af5] transition-colors">
        <ShareIcon className="w-[15px] h-[15px]" />
      </button>
    </div>
  )
}

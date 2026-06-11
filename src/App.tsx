import { useState } from 'react'
import { posts, currentUser, avatar1 } from './data'
import { PostCard } from './components/PostCard'
import { SearchIcon, BellIcon, ChevronDownIcon, FilterIcon } from './icons'

const TABS = ['For you', 'Following', 'Categories'] as const
type Tab = typeof TABS[number]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('For you')
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="w-full max-w-[393px] min-h-screen bg-white flex flex-col">
      {/* Status Bar */}
      <div className="bg-white flex items-end justify-between px-8 pt-6 pb-3 shrink-0">
        <span className="text-[#111113] text-xs font-semibold">9:41</span>
        <div className="flex items-center gap-1 text-[#111113]">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
            <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.3"/>
            <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.5"/>
            <rect x="9" y="1" width="3" height="11" rx="1" opacity="0.7"/>
            <rect x="13.5" y="0" width="3" height="12" rx="1"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 2.4C5.2 2.4 2.7 3.6 1 5.5L0 4.4C2 2.2 4.8 1 8 1s6 1.2 8 3.4l-1 1.1C13.3 3.6 10.8 2.4 8 2.4zm0 3.2C6.1 5.6 4.4 6.4 3.2 7.7L2.2 6.6C3.7 5 5.7 4 8 4s4.3 1 5.8 2.6l-1 1.1C11.6 6.4 9.9 5.6 8 5.6zm0 3.2c-1 0-1.9.4-2.5 1.1L4.5 9C5.4 8 6.6 7.4 8 7.4s2.6.6 3.5 1.6L10.5 10C9.9 9.4 9 9 8 9z" opacity="0.8"/>
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-3 border border-[#111113] rounded-sm relative flex items-center px-0.5">
              <div className="bg-[#111113] h-2 rounded-[1px]" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Header / Search Section */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-4 py-3 flex flex-col gap-8 shrink-0">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* University selector */}
          <button className="flex items-center gap-1.5 rounded-full overflow-hidden">
            <img
              src={currentUser.avatarUrl}
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <span className="text-[#111113] text-[11px] font-['Satoshi'] font-medium uppercase tracking-[0.24px] leading-3">
                {currentUser.university}
              </span>
              <span className="text-[#44444c] text-[13px] font-['Satoshi'] leading-[18px]">
                {currentUser.course}
              </span>
            </div>
            <ChevronDownIcon className="w-4 h-4 text-[#111113]" />
          </button>

          {/* Action icons */}
          <div className="flex items-center gap-3">
            <button className="text-[#111113]">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button className="text-[#111113]">
              <BellIcon className="w-6 h-6" />
            </button>
            <div className="relative">
              <img
                src={avatar1}
                alt="notifications"
                className="w-8 h-8 rounded-[60px] object-cover"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#0e2af5] rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base leading-5 font-['Satoshi'] flex items-center gap-0.5 transition-colors ${
                activeTab === tab
                  ? 'text-[#0e2af5] font-medium'
                  : 'text-[#111113] font-normal'
              }`}
            >
              {tab}
              {tab === 'Categories' && (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Categories / Compose Section */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-4 py-6 flex flex-col gap-[18px] shrink-0">
        {/* Search Bar */}
        <div className="bg-[#f6f6f6] rounded-lg flex items-center gap-2.5 px-4 py-3">
          <SearchIcon className="w-4 h-4 text-[#74747b] shrink-0" />
          <input
            type="text"
            placeholder="Search, post people topics..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 bg-transparent text-[15px] font-['Satoshi'] text-[#74747b] outline-none placeholder:text-[#74747b]"
          />
          <FilterIcon className="w-3.5 h-3.5 text-[#74747b] shrink-0" />
        </div>

        {/* Compose input */}
        <div className="flex items-center gap-2 border-b border-[rgba(0,0,0,0.1)] pb-[18px]">
          <img
            src={currentUser.avatarUrl}
            alt="you"
            className="w-10 h-10 rounded-full object-cover shadow-sm shrink-0"
          />
          <div className="flex-1 bg-[#f6f6f6] rounded-full px-3.5 py-3 h-12 flex items-center cursor-pointer">
            <span className="text-[#44444c] text-base font-['Satoshi']">
              What's on your mind, share updates
            </span>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="flex flex-col overflow-y-auto">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

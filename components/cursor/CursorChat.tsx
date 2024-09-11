import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'
import CursorSVG from '@/public/assets/CursorSVG';

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  // {cursorState.mode === CursorMode.Chat && (
  // )}
  return (
    <div className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
        <>
          <CursorSVG color='#000' />

          <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]">
            {cursorState.previousMessage && (
              <div>
                {cursorState.previousMessage}
              </div>
            )}
            <input type="text" />
          </div>
        </>
    </div>
  )
}

export default CursorChat
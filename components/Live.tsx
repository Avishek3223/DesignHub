import React, { useCallback } from 'react'
import LiveCursor from './cursor/LiveCursor'
import { useOthers } from '@liveblocks/react'
import { useMyPresence } from '@/liveblocks.config';

const Live = () => {
    const others = useOthers(); //This hook return all the other user in the room
    const [{ cursor }, updateMyPresence] = useMyPresence() as any; //Returns the presence of the current user of the current room

    const handlePointerMove = useCallback((event: React.PointerEvent) => {
        event.preventDefault()
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y
        updateMyPresence({
            cursor: {
                x: x,
                y: y
            },
        });
    }, [updateMyPresence]);

    const handlePointerLeave = useCallback((event: React.PointerEvent) => {
        event.preventDefault()

        updateMyPresence({ cursor: null, message: null });
    }, []);


    const handlePointerDown = useCallback((event: React.PointerEvent) => {
        event.preventDefault()
        updateMyPresence({
            cursor: {
                x: event.clientX - event.currentTarget.getBoundingClientRect().x,
                y: event.clientY - event.currentTarget.getBoundingClientRect().y,
            },
        });
    }, []);

    return (
        <div
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            className='flex w-full h-screen justify-center items-center text-center'
        >
            <h1 className="font-bold text-white text-2xl">Hello World</h1>
            <LiveCursor others={others} />
        </div>
    )
}

export default Live
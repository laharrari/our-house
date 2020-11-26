import React from 'react'

export default function JoinRoom() {
    return (
        <div className="bg-gray-300 border-2 border-black max-w-xl mx-auto mt-80 pt-10 pb-10 flex justify-center">
            <form action="">
                <div className="form-control">
                    <input type="text" placeholder="Nickname" name="nickname" className="block border border-black mb-3" />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Room Name" name="roomname" className="block border border-black mb-3" />
                </div>
                <button type="submit" value="Join" className="border border-black bg-blue-300 mx-auto w-full">Join</button>
            </form>
        </div>
    );
}
import React from 'react';
const user = {
  name: 'Virat Kohli',
  imageUrl: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
  imageSize: 190,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
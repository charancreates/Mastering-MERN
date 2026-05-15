function ProfileAvatar({ imageUrl, altText, isOnline }) {
  return (
    <>
      <img
        src={imageUrl}
        alt={altText}
        className="user-avatar "
        style={{ border: isOnline ? "3px solid green" : "3px solid grey" }}
      />
    </>
  );
}
export default ProfileAvatar;

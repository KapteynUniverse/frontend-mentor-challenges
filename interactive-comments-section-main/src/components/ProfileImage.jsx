function ProfileImage(props) {
  return (
    <img
      src={props.imgSrc}
      alt={props.imgAlt}
      width="32"
      height="32"
      className={props.style}
    />
  );
}

export default ProfileImage;

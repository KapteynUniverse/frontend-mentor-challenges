import ProfileImage from "./ProfileImage";

function ProfileSection(props) {
  return (
    <div
      aria-label="Comment Owner"
      className="col-span-2 flex items-center gap-2 md:col-span-1"
    >
      <ProfileImage
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
        style={"rounded-full"}
      />
      <p>{props.name}</p>
      {props.user.name === props.commentUserId ? (
        <p className="bg-blue-modarate text-white px-1">you</p>
      ) : null}
      <p aria-label="Message send" className="text-blue-grayish">
        {props.date}
      </p>
    </div>
  );
}

export default ProfileSection;

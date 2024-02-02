import ShareIcons from "./ShareIcons";

const shareData = [
  {
    photoName: "./share1.PNG",
  },
  {
    photoName: "./share2.PNG",
  },
  {
    photoName: "./share3.PNG",
  },
  {
    photoName: "./share4.PNG",
  },
  {
    photoName: "./share5.PNG",
  },
];
console.log(shareData);

function Share() {
  return (
    <div className="ShareList">
      <h2 className="shareheading">SHARE</h2>
      <div className="share">
        {shareData.map((share) => (
          <ShareIcons shareObj={share} key={share.photoName} />
        ))}
      </div>
    </div>
  );
}
export default Share;

import SonnyAngel from "./SonnyAngel";

const sonnyangelData = [
  {
    photoName: "./1.PNG",
  },
  {
    photoName: "./2.PNG",
  },
  {
    photoName: "./3.PNG",
  },
  {
    photoName: "./4.PNG",
  },
  {
    photoName: "./5.PNG",
  },
  {
    photoName: "./6.PNG",
  },
];
console.log(sonnyangelData);

function AngelList() {
  return (
    <div className="AngelList">
      <div className="sonnydiv">
        {sonnyangelData.map((sonnyangel) => (
          <SonnyAngel sonnyangelObj={sonnyangel} key={sonnyangel.photoName} />
        ))}
      </div>
    </div>
  );
}

export default AngelList;

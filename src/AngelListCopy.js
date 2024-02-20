import SonnyAngel from "./SonnyAngel";

const sonnyangelData = [
  {
    photoName:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/01/balloon.png",
  },
  {
    photoName:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/01/rose.png",
  },
  {
    photoName:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/01/cuddly_bear.png",
  },
  {
    photoName:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/01/chocolate.png",
  },
  {
    photoName:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/01/you.png",
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

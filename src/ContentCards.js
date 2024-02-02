function ContentCards() {
  return (
    <div className="contentcards">
      <section id="contents">
        <h2>CONTENTS</h2>
        <div className="ccards">
          <div className="About">
            <div className="imagediv">
              <img
                className="contentimg"
                src="./contentimg1.jpg"
                alt="sonnyangel"
              />
            </div>
            <div className="ccardtitlediv">
              <span className="titlecard">ABOUT</span>
            </div>
            <div className="ccardcontentdiv">
              <span>
                Sonny Angel is an angel boy that will give you healing and make
                you smile.
              </span>
            </div>
          </div>

          <div className="Products">
            <div className="imagediv">
              <img
                className="contentimg"
                src="./contentimg2.jpg"
                alt="sonnyangel"
              />
            </div>
            <div className="ccardtitlediv">
              <span className="titlecard">PRODUCTS</span>
            </div>
            <div className="ccardcontentdiv">
              <span>
                Introducing more than 650 kinds of Sonny Angel figures.
              </span>
            </div>
          </div>

          <div className="Store">
            <div className="imagediv">
              <img
                className="contentimg"
                src="./contentimg3.jpg"
                alt="sonnyangel"
              />
            </div>
            <div className="ccardtitlediv">
              <span className="titlecard">STORE</span>
            </div>
            <div className="ccardcontentdiv">
              <span>
                Sonny Angel Official online stores in each country and a list of
                dealers are here.
              </span>
            </div>
          </div>

          <div className="SNS">
            <div className="imagediv">
              <img
                className="contentimg"
                src="./contentimg4.jpg"
                alt="sonnyangel"
              />
            </div>
            <div className="ccardtitlediv">
              <span className="titlecard">SNS</span>
            </div>
            <div className="ccardcontentdiv">
              <span>
                There are many official accounts around the world. Follow us and
                check the latest information!
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContentCards;

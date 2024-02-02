function StoreCards() {
  return (
    <div className="contentcards">
      <section id="contents">
        <h2>OFFICIAL STORE</h2>
        <div className="ccards">
          <div className="storecard">
            <div className="Store1">
              <div className="storeimagediv">
                <img
                  className="storecontentimg"
                  src="./store1.jpg"
                  alt="store"
                />
              </div>
              <div className="storeccardtitlediv">
                <h5 className="storetitlecard">Sonny Angel Store Taiwan</h5>
              </div>
              <div className="ccardcontentdiv">
                <span className="spanstore">
                  台灣台北市信義區松壽路12號 ATT 4 FUN B1F B1F,{" "}
                </span>
                <br />
                <span className="spanstore">
                  ATT 4 FUN, No.12, Songshou Rd, Xinyi{" "}
                </span>
                <br />
                <span className="spanstore">District, Taipei City 110</span>
                <br />
                <span className="spanstore">TEL：+886-2-7736-1005</span>
                <br />
                <div className="note">
                  <span className="spannote">
                    Store will closed down on May 31, 2020
                  </span>
                </div>
              </div>
            </div>

            <div className="Store1">
              <div className="storeimagediv">
                <img
                  className="storecontentimg"
                  src="./store2.jpg"
                  alt="store"
                />
              </div>
              <div className="storeccardtitlediv">
                <h5 className="storetitlecard">
                  Sonny Angel Terrace ISHIGAKI (OKINAWA)
                </h5>
              </div>
              <div className="storeccardcontentdiv">
                <span className="spanstore">
                  1F Daiwa Bldg. 2-5 Misaki-cho, Ishigaki-shi,
                </span>
                <br />
                <span className="spanstore">Okinawa, 907-0012 JAPAN</span>
                <br />
                <span className="spanstore">TEL : +81-980-82-1036</span>
                <br />
                <div className="note">
                  <span className="spannote">
                    Store will closed down on May 31, 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default StoreCards;

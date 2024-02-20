function FalseTabs() {
  return (
    <div className="Tabs">
      <div className="AngelListTitleDiv"></div>

      <div class="tablist">
        <ul class="responsive-tabs__list" role="tablist">
          <li
            class="responsive-tabs__list__item responsive-tabs__list__item--active"
            id="tablist1-tab1"
            aria-controls="tablist1-panel1"
            role="tab"
            tabindex="0"
          >
            <a href="#" className="activetab">
              Gifts of Love (2023)
            </a>
          </li>
          <li
            class="responsive-tabs__list__item"
            id="tablist1-tab2"
            aria-controls="tablist1-panel2"
            role="tab"
            tabindex="0"
          >
            <a href="#" className="otheroption">
              Charm Candy Store (2024)
            </a>
          </li>
          <li
            class="responsive-tabs__list__item"
            id="tablist1-tab3"
            aria-controls="tablist1-panel3"
            role="tab"
            tabindex="0"
          >
            <a href="#" className="otheroption">
              Christmas Ornament (2017)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FalseTabs;

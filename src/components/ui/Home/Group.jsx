/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/formateDate";
import isOddSuspended from "../../../utils/isOddSuspended";

const Group = ({ data }) => {
  const [categories, setCategories] = useState([]);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(Object.values(data).map((item) => item.eventTypeId))
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <>
      {categories?.map((category) => {
        const filteredData = Object.entries(data)
          .filter(([, value]) => value.eventTypeId === category)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
        return (
          <div key={category} className="cricket mt-7">
            <div className="sub_path center-box">
              <p> {eventName[category]}</p>
            </div>
            <div className="game-wrap col3 desktop-view">
              <table className="table w-100 game-list-col">
                <tbody>
                  <tr>
                    <td className="eventInfo"></td>
                    <td className="col-visit">1</td>
                    <td className="col-draw">x</td>
                    <td className="col-home">2</td>
                    <td className="col-info"></td>
                  </tr>

                  {data &&
                    Object.values(data).length > 0 &&
                    Object.keys(filteredData)
                      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                      .map((keys) => {
                        return (
                          <tr
                        
                            onClick={() => navigateGameList(keys)}
                            key={keys}
                            style={{ display: "table-row" }}
                          >
                            <td className="eventInfo">
                              <div className="event-title">
                                <span className="dtime">
                                  {formatDate(data, keys)} |
                                </span>
                                {data[keys]?.player1} v {data[keys]?.player2}
                              </div>
                              <div className="d-inline float-right"></div>
                            </td>
                            <td className="col-home">
                              <div className="">
                                <a
                                  id="btnBack0"
                                  className="btn-back"
                                  side="Back"
                                >
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[0]?.ex?.availableToBack[0]
                                        ?.price
                                    }
                                  </div>{" "}
                                </a>
                                <a id="btnLay0" className="btn-lay" side="Lay">
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[0]?.ex?.availableToLay[0]
                                        ?.price
                                    }
                                  </div>
                                </a>
                              </div>
                            </td>
                            <td className="col-draw">
                              <div className="">
                                <a
                                  id="btnBack2"
                                  className="btn-back"
                                  side="Back"
                                >
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[2]?.ex?.availableToBack[0]
                                        ?.price
                                    }
                                  </div>{" "}
                                </a>
                                <a id="btnLay2" className="btn-lay" side="Lay">
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[2]?.ex?.availableToLay[0]
                                        ?.price
                                    }
                                  </div>
                                </a>
                              </div>
                            </td>
                            <td className="col-visit">
                              <div className="">
                                <a
                                  id="btnBack1"
                                  className="btn-back"
                                  side="Back"
                                >
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[1]?.ex?.availableToBack[0]
                                        ?.price
                                    }
                                  </div>{" "}
                                </a>
                                <a id="btnLay1" className="btn-lay" side="Lay">
                                  <div style={{ minHeight: "13px" }}>
                                    {" "}
                                    {
                                      data[keys]?.[1]?.ex?.availableToLay[0]
                                        ?.price
                                    }
                                  </div>
                                </a>
                              </div>
                            </td>
                            <td className="col-info"></td>
                          </tr>
                        );
                      })}

                  <tr>
                    <td colSpan="5">
                      <a
                        className="viewmore"
                        title="view more"
                        style={{ cursor: "pointer" }}
                      >
                        View More...
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* <div className="cricket mt-7">
        <div className="sub_path center-box">
          <p>Soccer</p>
        </div>
        <div className="game-wrap col3 desktop-view">
          <table className="table w-100 game-list-col">
            <tbody>
              <tr>
                <td className="eventInfo"></td>
                <td className="col-visit">1</td>
                <td className="col-draw">x</td>
                <td className="col-home">2</td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 15:00 |</span>Yokohama FM v
                    Renofa Yamaguchi
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.51</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.53</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>5.1</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>5.2</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>6.6</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>7</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 15:30 |</span>Kashima v Kobe
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>3.75</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>3.9</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>3.35</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>3.5</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>2.22</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.28</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 19:30 |</span>Pisa v Cesena
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>2.14</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.16</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>3.4</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>3.55</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>3.95</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>4.1</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 22:00 |</span>Udinese v
                    Salernitana
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.45</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.47</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>4.9</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>5</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>8.4</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>8.8</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 22:15 |</span>Az Alkmaar v
                    Elfsborg
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.47</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.48</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>5.1</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>5.2</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>7.6</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>7.8</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 22:15 |</span>Bodo Glimt v
                    Porto
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>4.1</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>4.2</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>4</div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>4.1</div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.96</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.97</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr>
                <td colSpan="5">
                  <a
                    className="viewmore"
                    title="view more"
                    style={{ cursor: "pointer" }}
                  >
                    View More...
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cricket mt-7">
        <div className="sub_path center-box">
          <p>Tennis</p>
        </div>
        <div className="game-wrap col3 desktop-view">
          <table className="table w-100 game-list-col">
            <tbody>
              <tr>
                <td className="eventInfo"></td>
                <td className="col-visit">1</td>
                <td className="col-draw">x</td>
                <td className="col-home">2</td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 13:00 |</span>S Zhang v
                    McCartn Kessler
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                    <span className="bm1">
                      <img alt="BM" src="static/images/bm-icon1.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>3.75</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>3.8</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.35</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.36</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 14:30 |</span>Galan v Gi
                    Fonio
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.54</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.57</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>2.76</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.86</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 18:30 |</span>Roca Batalla v
                    Ja Faria
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.94</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.1</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.92</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.06</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 20:00 |</span>Em Nava v
                    Gaubas
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>2.48</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.54</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.65</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.67</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 20:00 |</span>He Rocha v Th
                    Seyboth Wild
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                    <span className="bm1">
                      <img alt="BM" src="static/images/bm-icon1.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>2.68</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>2.76</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.57</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.59</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "none" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">25 Sept 20:00 |</span>Tirante v
                    Dalla Valle
                  </div>
                  <div className="d-inline float-right">
                    <span className="l-tv">
                      <img alt="TV" src="static/images/tv.svg" />
                    </span>
                    <span className="bm1">
                      <img alt="BM" src="static/images/bm-icon1.svg" />
                    </span>
                  </div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.19</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>1.2</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>6</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>6.4</div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr>
                <td colSpan="5">
                  <a
                    className="viewmore"
                    title="view more"
                    style={{ cursor: "pointer" }}
                  >
                    View More...
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cricket mt-7">
        <div className="sub_path center-box">
          <p>Election</p>
        </div>
        <div className="game-wrap col3 desktop-view">
          <table className="table w-100 game-list-col">
            <tbody>
              <tr>
                <td className="eventInfo"></td>
                <td className="col-visit">1</td>
                <td className="col-draw">x</td>
                <td className="col-home">2</td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">31 Aug 00:00 |</span>USA
                    Presidential Election 2024
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>107</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}>112</div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
              <tr style={{ display: "table-row" }}>
                <td className="eventInfo">
                  <div className="event-title">
                    <span className="dtime">30 Sept 00:00 |</span>Haryana
                    Assembly Election 2024
                  </div>
                  <div className="d-inline float-right"></div>
                </td>
                <td className="col-home">
                  <div className="">
                    <a id="btnBack0" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.98</div>{" "}
                    </a>
                    <a id="btnLay0" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-draw">
                  <div className="">
                    <a id="btnBack2" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}></div>{" "}
                    </a>
                    <a id="btnLay2" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-visit">
                  <div className="">
                    <a id="btnBack1" className="btn-back" side="Back">
                      <div style={{ minHeight: "13px" }}>1.98</div>{" "}
                    </a>
                    <a id="btnLay1" className="btn-lay" side="Lay">
                      <div style={{ minHeight: "13px" }}></div>
                    </a>
                  </div>
                </td>
                <td className="col-info"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* <div className="horse mb-2">
        <div className="sub_path center-box">
          <p>Horse Racing</p>
        </div>
        <div className="game-wrap col3 py-1 d-flex horsebg">
          <div className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars">
            <div style={{ whiteSpace: "nowrap" }}>
              <ul className="horsedatahome">
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/horse-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Doomben (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 10:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/horse-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Strathalbyn (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/horse-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Charlton (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/horse-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Warwick Farm (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/horse-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Belmont (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="horse mb-2">
        <div className="sub_path center-box">
          <p>Greyhound Racing</p>
        </div>
        <div className="game-wrap col3 py-1 d-flex horsebg">
          <div className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars">
            <div style={{ whiteSpace: "nowrap" }}>
              <ul className="horsedatahome">
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/dog-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Gunnedah (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/dog-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Albion Park (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/dog-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Bendigo (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/dog-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Temora (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="btneffect">
                    <div className="d-inline-block mr-2">
                      <img
                        src="static/images/dog-login.svg"
                        className="horsehomeimg"
                      />
                    </div>
                    <div className="d-inline-block text-center horsename-title">
                      <div>Gunnedah (AUS) 25th Sep</div>
                      <div className="text-light-grey">25th Sep 11:09</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Group;

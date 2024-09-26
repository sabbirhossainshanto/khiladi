/* eslint-disable react/no-unknown-property */

import { useDispatch, useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import { useParams } from "react-router-dom";
import useExposer from "../../../hooks/useExposure";
import { handleDesktopBetSlip } from "../../../utils/handleDesktopBetSlip";
import handleRandomToken from "../../../utils/handleRandomToken";
import handleEncryptData from "../../../utils/handleEncryptData";
import { settings } from "../../../api";
import isOddSuspended from "../../../utils/isOddSuspended";

const Fancy = ({ fancy }) => {
  const token = useSelector(userToken);
  const [eventName, setEventName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const [getLadder] = useGetLadderMutation();
  const { predictOdd, stake } = useSelector((state) => state?.event);
  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const dispatch = useDispatch();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const handleOpenBetSlip = (betType, games, runner, price) => {
    handleDesktopBetSlip(
      betType,
      games,
      runner,
      exposer,
      dispatch,
      price,
      token
    );
  };
  const handleGetLadder = async (marketId, games) => {
    setEventName(games?.eventName);
    const generatedToken = handleRandomToken();
    const encryptedData = handleEncryptData({
      token: generatedToken,
      site: settings.siteUrl,
    });
    const payload = {
      marketId,
      data: encryptedData,
    };
    const res = await getLadder(payload).unwrap();
    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <div className="live-match">
      <div className="fancybtn-new">
        <a>
          <span className="font-weight-bold">Fancy</span>
          <i
            className="fa fa-minus fancyplusminusmob pl-4"
            aria-hidden="true"
          />
        </a>
      </div>
      <div className="sub_path center-box fancybg">
        <ul className="fancy-filter" />
        <span className="fancyplus-icon" style={{ color: "white" }}>
          <a>
            <i className="fa fa-minus" aria-hidden="true" />
          </a>
        </span>
      </div>
      <div className="fancybgmobile">
        <div className="fancyscrollmenu">
          <a className="active">All</a>
          <a>
            OVERS<span className="fancynew-budge">7</span>
          </a>
          <a>
            BATSMAN<span className="fancynew-budge">41</span>
          </a>
        </div>
      </div>
      <div className="game-wrap col3" style={{ display: "block" }}>
        <table className="table w-100 game-list-col fancytable mb-0">
          <tbody>
            <tr className="bet-all-new">
              <td className="pb-0">&nbsp;</td>
              <td className="w-16 pb-0">
                <div>
                  <div className>
                    <a id="btnBack" className="btn-back bg-trans" side="Back">
                      <span>No</span>
                    </a>
                  </div>
                  <div>
                    <a id="btnLay" className="btn-lay bg-trans" side="Lay">
                      <span>Yes</span>
                    </a>
                  </div>
                </div>
              </td>
              <td className="w-16 mobile-hide pb-0">&nbsp;</td>
            </tr>
            {fancy?.map((games, i) => {
              const pnl =
                pnlBySelection?.filter((pnl) => pnl?.MarketId === games?.id) ||
                [];
              const predictOddValues = predictOdd?.filter(
                (val) => val?.id === games?.id
              );

              return (
                <tr key={i}>
                  <td className="fancyw-50 px-1">
                    <div className="in-play-title">
                      <div>
                        <a
                          className="mr-1"
                          title="Add to Multi Markets"
                          style={{ cursor: "pointer" }}
                        />
                        <span
                          className="marketnamemobile"
                          title="Match 1st Over ADV."
                        >
                          {games?.name}
                        </span>
                        <a className="float-right" />
                      </div>
                      <div>
                        <a className="dhide float-right">
                          <i className="fa fa-info-circle" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="w-16">
                    <div className={isOddSuspended(games)}>
                      <div>
                        <a
                          id="btnLay"
                          className="btn-lay border-bottom1"
                          side="Lay"
                          style={{ minHeight: "36px" }}
                        >
                          <div style={{ minHeight: "12px" }}>
                            {games?.runners?.[0]?.lay?.[0]?.line || "-"}
                          </div>
                          <span className="ask-price-small">
                            {" "}
                            {games?.runners?.[0]?.lay?.[0]?.price}
                          </span>
                        </a>
                      </div>
                      <div>
                        <a
                          id="btnBack"
                          className="btn-back border-bottom1"
                          side="Back"
                          style={{ minHeight: "36px" }}
                        >
                          <div style={{ minHeight: "12px" }}>
                            {" "}
                            {games?.runners?.[0]?.back?.[0]?.line}
                          </div>
                          <span className="bid-price-small">
                            {" "}
                            {games?.runners?.[0]?.back?.[0]?.price}
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="w-16 w-16-1 mobile-hide">
                    <div className="min-max-price">
                      <span className="d-block">
                        Max:<span> {games?.maxLiabilityPerBet}</span>
                      </span>
                      <span className="d-block">
                        Min:<span> {games?.minLiabilityPerBet}</span>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fancy;

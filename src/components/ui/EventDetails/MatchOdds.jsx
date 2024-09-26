/* eslint-disable react/no-unknown-property */

import { useNavigate, useParams } from "react-router-dom";
import useExposer from "../../../hooks/useExposure";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleDesktopBetSlip } from "../../../utils/handleDesktopBetSlip";
import isOddSuspended from "../../../utils/isOddSuspended";

const MatchOdds = ({ match_odds }) => {
  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const { predictOdd, stake } = useSelector((state) => state?.event);
  const { token } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [teamProfit, setTeamProfit] = useState([]);
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      match_odds?.length > 0 &&
      exposer?.pnlBySelection &&
      Object.keys(exposer?.pnlBySelection)?.length > 0
    ) {
      match_odds.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match_odds, eventId]);

  return (
    <>
      {match_odds?.map((games, i) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === games?.id && profit?.isOnePositiveExposure
        );
        return (
          <div key={i} className="live-match">
            <div className="sub_path center-box crname">
              <p>
                <a
                  id="multiMarketPin"
                  className="multimarket-pin"
                  title="Remove from Multi Markets"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa fa-thumb-tack" aria-hidden="true" />
                </a>
                <span className="mr-1">    {games?.name}</span>
                <span className="f-right min-max">
                  <span className="desktop-minmax">   Min: {games?.minLiabilityPerBet} | Max: {games?.maxLiabilityPerBet}</span>
                  <span className="f-right pl-3">
                    <i className="fa fa-minus" aria-hidden="true" />
                  </span>
                </span>
                <span className="f-right min-max">
                  <button disabled className="btn-cashout mr-2">
                    Cashout
                  </button>
                </span>
              </p>
            </div>
            <div className="game-wrap col3">
              <table className="table w-100 game-list-col eventdetails bets mb-0">
                <tbody>
                  <tr className="bet-all-new">
                    <td className="w-55 pb-0 mob-minmax">
                      <span className="f-right min-max text-black mob-minmax-span">
                      Min: {games?.minLiabilityPerBet} | Max: {games?.maxLiabilityPerBet}
                      </span>
                    </td>
                    <td className="w-45 pb-0">
                      <div>
                        <div className="w-50 float-left">
                          <a
                            id="btnBack"
                            className="btn-back back-light-bg1 mobile-hide bg-trans"
                            side="Back"
                          >
                            &nbsp;
                          </a>
                          <a
                            id="btnBack"
                            className="btn-back back-light-bg mobile-hide bg-trans"
                            side="Back"
                          >
                            &nbsp;
                          </a>
                          <a id="backAll" className="back-all">
                            <img alt="" src="./event_files/transparent.gif" />
                            <span className="f11">Back</span>
                          </a>
                        </div>
                        <div className="w-50 float-left">
                          <a id="layAll" className="lay-all">
                            <img alt="" src="./event_files/transparent.gif" />
                            <span className="f11">Lay</span>
                          </a>
                          <a
                            id="btnBack"
                            className="btn-lay lay-light-bg mobile-hide bg-trans"
                            side="lay"
                          >
                            &nbsp;
                          </a>
                          <a
                            id="btnLay"
                            className="btn-lay lay-light-bg1 mobile-hide bg-trans"
                            side="lay"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {
                    games?.runners?.map((runner,idx) => {
                        const pnl =
                        pnlBySelection?.filter(
                          (pnl) => pnl?.RunnerId === runner?.id
                        ) || [];
                      const predictOddValues = predictOdd?.filter(
                        (val) => val?.id === runner?.id
                      );
                        return (
                            <tr key={runner?.id}>
                            <td className="w-55">
                              <span className="in-play-title">
                              {runner?.name}
                              </span>
                              <span
                                className="float-right"
                                style={{ paddingTop: "1rem" }}
                              />
                            </td>
                            <td className="w-45">
                              <div className={isOddSuspended(runner)}>
                                <div className="w-50 float-left">
                                  <a
                                    id="btnBack"
                                    className="btn-back back-light-bg1 mobile-hide"
                                    side="Back"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                   { runner?.back?.[2]?.price}
                                    </div>
                                    <span className="bid-price-small">{runner?.back?.[2]?.size}</span>
                                  </a>
                                  <a
                                    id="btnBack"
                                    className="btn-back back-light-bg mobile-hide"
                                    side="Back"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                  {  runner?.back?.[1]?.price}
                                    </div>
                                    <span className="bid-price-small">{runner?.back?.[1]?.size}</span>
                                  </a>
                                  <a
                                    id="btnBack"
                                    className="btn-back"
                                    side="Back"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                  {runner?.back?.[0]?.price}
                                    </div>
                                    <span className="bid-price-small">{runner?.back?.[0]?.size}</span>
                                  </a>
                                </div>
                                <div className="w-50 float-left">
                                  <a
                                    id="btnBack"
                                    className="btn-lay"
                                    side="lay"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                    {runner?.lay?.[0]?.price}
                                    </div>
                                    <span className="ask-price-small"> {runner?.lay?.[0]?.size}</span>
                                  </a>
                                  <a
                                    id="btnBack"
                                    className="btn-lay lay-light-bg mobile-hide"
                                    side="lay"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                    {runner?.lay?.[1]?.price}
                                    </div>
                                    <span className="ask-price-small"> {runner?.lay?.[1]?.size}</span>
                                  </a>
                                  <a
                                    id="btnLay"
                                    className="btn-lay lay-light-bg1 mobile-hide"
                                    side="lay"
                                    style={{ minHeight: "36px" }}
                                  >
                                    <div className style={{ minHeight: "12px" }}>
                                    {runner?.lay?.[2]?.price}
                                    </div>
                                    <span className="ask-price-small"> {runner?.lay?.[0]?.size}</span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr> 
                        )
                    })
                  }
              
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;

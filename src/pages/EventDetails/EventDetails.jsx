/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../../components/shared/LeftSidebar/LeftSidebar";
import useBalance from "../../hooks/useBalance";
import { useParams } from "react-router-dom";
import useIFrame from "../../hooks/useIFrame";
import { useEffect, useState } from "react";
import { useGetAllOddsEventsQuery } from "../../redux/features/events/events";
import { settings } from "../../api";
import {
  setFirstOdd,
  setPredictOdd,
  setSecondOdd,
  setThirdOdd,
} from "../../redux/features/events/eventSlice";
import MatchOdds from "../../components/ui/EventDetails/MatchOdds";
import Bookmaker from "../../components/ui/EventDetails/Bookmaker";
import Fancy from "../../components/ui/EventDetails/Fancy";
import BetSlipDesktop from "../../components/ui/EventDetails/BetSlipDesktop";
import ScoreCard from "../../components/ui/EventDetails/ScoreCard";
import IFrameScore from "../../components/ui/EventDetails/IFrame";
import IframeVideoTab from "../../components/ui/EventDetails/IframeVideoTab";

const EventDetails = () => {
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);
  const { eventTypeId, eventId } = useParams();
  const payload = {
    eventTypeId,
    eventId,
  };
  const { iFrameUrl } = useIFrame(eventTypeId, eventId);
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmaker, setBookmaker] = useState([]);
  // const [bookmaker2, setBookmaker2] = useState([]);
  const [fancy, setFancy] = useState([]);
  // const [fancy1, setFancy1] = useState([]);
  // const [overByOver, setOverByOver] = useState([]);
  const { data } = useGetAllOddsEventsQuery(payload, {
    pollingInterval: settings.interval,
  });

  /* Filtered all the game  */
  useEffect(() => {
    if (data?.result) {
      const events = data?.result;
      const filterMatch_odds = events?.filter(
        (match_odd) => match_odd.btype === "MATCH_ODDS"
      );
      setMatch_odds(filterMatch_odds);

      const bookmarkerFilter = events?.filter(
        (bookmarker) => bookmarker.btype === "BOOKMAKER"
      );
      setBookmaker(bookmarkerFilter);

      // const filterBookmarker2 = events?.filter(
      //   (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
      // );
      // setBookmaker2(filterBookmarker2);

      const normalFilter = events?.filter(
        (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
      );
      setFancy(normalFilter);

      // const fancy1Filter = events?.filter(
      //   (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
      // );
      // setFancy1(fancy1Filter);

      // const overByOverFilter = events?.filter(
      //   (overByOver) =>
      //     overByOver.btype === "FANCY" &&
      //     overByOver.tabGroupName === "Over By Over"
      // );
      // setOverByOver(overByOverFilter);
    }
  }, [data]);

  /* Place bet calculate */
  const pnl1 =
    placeBetValues?.pnl && placeBetValues?.pnl[0] ? placeBetValues?.pnl[0] : 0;
  const pnl2 =
    placeBetValues?.pnl && placeBetValues?.pnl[1] ? placeBetValues?.pnl[1] : 0;
  const pnl3 =
    placeBetValues?.pnl && placeBetValues?.pnl[2] ? placeBetValues?.pnl[2] : 0;
  const selectionId = placeBetValues?.selectionId?.toString();

  useEffect(() => {
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        let total;

        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (selectionId && selectionId.includes(".1")) {
          dispatch(setFirstOdd(formatNumber(total + pnl1)));
          dispatch(setSecondOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl3 + -1 * stake)));

          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(total + pnl1),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(pnl3 + -1 * stake),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        } else if (selectionId && selectionId.includes(".2")) {
          dispatch(setFirstOdd(formatNumber(total + pnl2)));
          dispatch(setSecondOdd(formatNumber(pnl3 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[2],
              },
              {
                odd: formatNumber(total + pnl2),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(pnl3 + -1 * stake),
                id: placeBetValues?.runnerId[0],
              },
            ])
          );
        } else {
          dispatch(setFirstOdd(formatNumber(total + pnl3)));
          dispatch(setSecondOdd(formatNumber(pnl1 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(pnl1 + -1 * stake),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(total + pnl3),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        }
      } else if (placeBetValues?.lay) {
        let total;
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (selectionId && selectionId.includes(".1")) {
          dispatch(setFirstOdd(formatNumber(total + pnl1)));
          dispatch(setSecondOdd(formatNumber(1 * pnl2 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl3 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(total + pnl1),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl2 + 1 * stake)),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl3 + 1 * stake)),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        } else if (selectionId && selectionId.includes(".2")) {
          dispatch(setFirstOdd(formatNumber(total + pnl2)));
          dispatch(setSecondOdd(formatNumber(1 * pnl3 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl1 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(formatNumber(1 * pnl1 + 1 * stake)),
                id: placeBetValues?.runnerId[2],
              },
              {
                odd: formatNumber(total + pnl2),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl3 + 1 * stake)),
                id: placeBetValues?.runnerId[0],
              },
            ])
          );
        } else {
          dispatch(setFirstOdd(formatNumber(total + pnl3)));
          dispatch(setSecondOdd(formatNumber(1 * pnl1 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl2 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(formatNumber(1 * pnl1 + 1 * stake)),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl2 + 1 * stake)),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(total + pnl3),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        }
      }
    } else {
      let total = price * stake - stake;

      dispatch(
        setPredictOdd([
          {
            odd: formatNumber(total + pnl1),
            id: placeBetValues?.runnerId,
          },
        ])
      );
    }
  }, [price, stake, placeBetValues, pnl1, pnl2, pnl3, selectionId, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  return (
    <div className="full-wrap mar-top100 footerpd footerpd">
      <LeftSidebar />

      <div className="col-centersdetails markets">
        <div className>
          <div className="sub_path center-box crname">
            <p>
              <span>
                {data?.result?.length > 0 && data?.result?.[0]?.eventName}
              </span>
              <span className="f-right">
                {" "}
                {data?.result?.length > 0 && data?.result?.[0]?.openDate}
              </span>
            </p>
          </div>
          <div className="livetv mt-1" />
          <div className="matched_bet_box">
            <div className="match_info_name active">
              <span className="market-2">Market</span>
              <div className="market market-1" />
            </div>
            <div className="match_info_name">
              <span className="market-2">
                Open Bets <span className="betcount">(0)</span>
              </span>
              <div className="market market-1" />
            </div>
          </div>

          <div>
            <IframeVideoTab tab={tab} setTab={setTab} score={data?.score} />
            <IFrameScore
              betType={tab}
              score={data?.score}
              setBetType={setTab}
            />
            {match_odds?.[0]?.score?.length > 0 && eventTypeId == 4 && (
              <ScoreCard score={data?.score} match_odds={match_odds} />
            )}
            {match_odds?.length > 0 && <MatchOdds match_odds={match_odds} />}
            {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}
          </div>
          <div className="mt-2_5">
            {fancy?.length > 0 && <Fancy fancy={fancy} />}
          </div>

          <div className="live-match livetv" />
        </div>
      </div>
      <BetSlipDesktop />
    </div>
  );
};

export default EventDetails;

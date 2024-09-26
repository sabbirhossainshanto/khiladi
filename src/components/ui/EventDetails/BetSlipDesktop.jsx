
const BetSlipDesktop = () => {
    return (
        <div className="col-right">
        <div className="sub_path over-wrap">
          <div className="center-box">
            <div className="container-fluid titbg">
              <div className="w-100 float-left">
                <span className="betslip-btn active">Matched Bet</span>
              </div>
            </div>
            <div className="mybet-alldata bg-white table-responsive">
              <table className="table table-bordered nowrap table-sm font-12 mb-4">
                <thead>
                  <tr className="bg-dark text-white">
                    <th>Matched Bet</th>
                    <th>Odds</th>
                    <th>Stake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center text-danger" colSpan={3}>
                      No bets found...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BetSlipDesktop;
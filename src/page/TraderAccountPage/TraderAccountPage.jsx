import React, { useEffect, useState } from "react";
import "./TraderAccountPage.scss";
import {
  traderAccountUrl,
  withdrawFundsUrl,
  depositFundsUrl,
} from "../../util/constants";
import "antd/dist/antd.min.css";
import { Input, Modal, Button } from "antd";
import { useParams } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import axios from "axios";

function TraderAccountPage() {
    
  const routeParams = useParams();

  const [state, setState] = useState({
    trader: [],
  });

  const fetchTrader = async (traderId) => {
    const response = await axios.get(traderAccountUrl + traderId);
    if (response) {
      setState({
        ...state,
        trader: response.data,
      });
    }
  };

  useEffect(() => {
    if (routeParams && routeParams.traderId) {
      const traderId = routeParams.traderId;
      setState({
        ...state,
        traderId,
      });
      fetchTrader(traderId);
    }
  }, []);

const showDepositModal = () => {
    setState({
        ...state,
        isDepositModalVisible: true
    });
}

const showWithdrawModal = () => {
    // show withdraw modal
}

const handleDepositCancel = () => {
  setState({
      ...state,
        isDepositModalVisible: false,
        depositFunds: null
    });
}

const handleWithdrawCancel = () => {
    // close withdraw modal & reset withdraw funds 
}

const handleDepositOk = async () => {
    const traderDepositUrl = depositFundsUrl + state.traderId + "/amount/" + state.depositFunds;
    const response = await axios.put(traderDepositUrl);
    if (response) {
        await fetchTrader(state.traderId);
        setState({
            ...state,
              isDepositModalVisible: false
          });
    }
}

const handleWithdrawOk = () => {
    // implement this method
}

const onInputChange = (field, value) => {
  setState({
      ...state,
        [field]: value
    });
}

  return (
    <div className="trader-account-page">
                {/* <Navbar /> */}
                <div className="trader-account-page-content">
                    <div className="title">
                        Trader Account
                    </div>
                    <div className="trader-cards">
                        <div className="trader-card">
                            <div className="info-row">
                                <div className="field">
                                    <div className="content-heading">
                                        First Name
                                    </div>
                                    <div className="content">
                                        { state.trader.firstName }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="content-heading">
                                        Last Name
                                    </div>
                                    ...
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="field">
                                    <div className="content-heading">
                                        Email
                                    </div>
                                    ...
                                </div>
                            </div>
                            <div className="info-row"> 
                                <div className="field">
                                    <div className="content-heading">
                                        Date of Birth
                                    </div>
                                    ...
                                </div>
                                <div className="field">
                                    ...
                                </div>
                            </div>
                        </div>
                        <div className="trader-card">
                            <div className="info-row">
                                <div className="field">
                                    <div className="content-heading amount">
                                        Amount
                                    </div>
                                    <div className="content amount">
                                        { state.trader.amount }$
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <Button onClick={showDepositModal}>Deposit Funds</Button>
                            <Modal title="Deposit Funds"  okText="Submit" visible={state.isDepositModalVisible} onOk={handleDepositOk} onCancel={handleDepositCancel}>
                                <div className="funds-form">
                                    <div className="funds-field">
                                        <Input allowClear={false} placeholder="Funds" onChange={(event) => onInputChange("depositFunds", event.target.value)} />
                                    </div>
                                </div>
                            </Modal>
                            {/* implement button for withdraw here */}
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default TraderAccountPage;

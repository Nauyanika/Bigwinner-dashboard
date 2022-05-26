import React from 'react'
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom'
 
import Home from '../../views/Dashboard/Home';
import ViewAgent from '../../views/agents/ViewAgent';
import AddAgent from '../../views/agents/AddAgent';
import AddNewPlayer from '../../views/players/AddNewPlayer';
import PlayersList from '../../views/players/PlayersList';
import PointSettings from '../../views/points/PointSettings';
import TransactionReport from '../../views/points/TransactionReport';
import GameHistory from '../../views/game/GameHistory';
import WheelOfForturneGameHistory from '../../views/game/WheelOfForturneGameHistory';
import PokerGameHistory from '../../views/game/PokerGameHistory';
import TigerVsElephantGameHistory from '../../views/game/TigerVsElephantGameHistory';
import LuckyBallGameHistory from '../../views/game/LuckyBallGameHistory';


import PlayerHistory from '../../views/players/PlayerHistrory';
import ShowCurrentBet from '../../views/gamebet/ShowCurrentBet';
import ChangePassword from '../../views/settings/ChangePassword';
import ChangeUserPassword from '../../views/settings/ChangeUserPassword';
import TransactionHistory from '../../views/payments/TransactionHistory';
import WithdrawRequest from '../../views/payments/WithdrawRequest';
import Cards from '../../views/Cards/Cards'
import UsersList from '../../views/Users/UsersList'

export default function AppContents() {
  return (
    <section className="content">
    <div className="container-fluid">
        <Route path="/" exact component={Home} /> 
        <Route path="/DistributorList" exact component={ViewAgent} /> 
        <Route path="/AddNewDistributor" exact component={AddAgent} /> 
        <Route path="/PlayersList" exact component={PlayersList} /> 
        <Route path="/AddnewPlayer" exact component={AddNewPlayer} /> 
        <Route path="/Transactions" exact component={TransactionHistory} /> 
        <Route path="/userWithdrawRequest" exact component={WithdrawRequest} /> 
        <Route path="/PlayersHistrory" exact component={PlayerHistory} /> 
        <Route path="/GamePlayHistory" exact component={GameHistory} /> 
        <Route path="/WheelOfForturneGamePlayHistory" exact component={WheelOfForturneGameHistory} />
        <Route path="/PokerGamePlayHistory" exact component={PokerGameHistory} />
        <Route path="/TigerVsElephantGamePlayHistory" exact component={TigerVsElephantGameHistory} /> 
        <Route path="/LuckyBallGamePlayHistory" exact component={LuckyBallGameHistory} /> 




        <Route path="/ShowCurrentBet" exact component={ShowCurrentBet} /> 
        <Route path="/ChangePassword" exact component={ChangePassword} /> 
        <Route path="/ResetUserPassword" exact component={ChangeUserPassword} /> 
        <Route path="/cards" exact component={Cards} /> 
        <Route path="/UsersList" exact component={UsersList} /> 
        </div>
    </section>
  )
}

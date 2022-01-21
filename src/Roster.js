import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Table } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import TableColumns from './TableData/TableColumns';
import TableData from './TableData/TableData';

export default function Roster() {
    const [playerAverages, setPlayerAverages] = useState([]);
    const [rosterData, setRosterData] = useState([]);
    
    const fetchData = () => {
        
        const playerAveragesUrl = "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json";
        const rosterDataUrl = "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json";

        const getPlayerAverages = axios.get(playerAveragesUrl)
        const getRosterData = axios.get(rosterDataUrl)
        
        axios.all([getPlayerAverages, getRosterData]).then(
            axios.spread((...allData) => {
                const allPlayerAverages = allData[0].data.tpsts.pl;
                const allRosterData = allData[1].data.t.pl;
                setPlayerAverages(allPlayerAverages)
                setRosterData(allRosterData)
            })
            )
        }

    useEffect(() => {
        fetchData()
    }, [])
    
    const columns = ['gp', 'gs', 'min', 'fgp', 'tpp', 'ftp', 'oreb', 'dreb', 'reb', 'ast', 'stl', 'blk', 'tov', 'pf', 'pts']  
    let playerArray = playerAverages.map((obj, index) => ({
      ...obj,
      ...rosterData[index]
    }));

    return (
        <Table>
        {columns &&
        <TableColumns key={columns.count} columns={columns}></TableColumns>
        }
        {rosterData && playerAverages &&
            <TableData key={1} players={playerArray}></TableData>
        }
        </Table>
    );
}
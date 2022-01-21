import React from 'react';
import { Tbody, Tr, Td } from 'react-super-responsive-table';

export default function TableData({players}) {

  function longPosition(pos) {
    // if (pos == 'C') {
    //   let pos = "Center";
    // }
    // return pos

    return pos == 'C' ? "Center"
    : pos == 'C-F' ? "Center Forward"
    : pos == 'F-C' ? "Forward Center"
    : pos == 'F' ? "Forward"
    : pos == 'G' ? "Guard"
    : pos == 'G-F' ? " Guard/Forward"
    : pos;
  }

  return (
    <Tbody>
        {players && players.map((player, index) => (
          <Tr className="player-row">
              <Td>
                <div className="player-info__container">
                  <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} className="player-photo"/>
                  <div className="player-info">
                    <h6>#{player.num}</h6>
                    <h3>{player.fn + " " + player.ln}</h3>
                    <p>{longPosition(player.pos)}</p>
                  </div>
                </div>
              </Td>
              <Td>{player.avg.gp}</Td>
              <Td>{player.avg.gs}</Td>
              <Td>{player.avg.min}</Td>
              <Td>{player.avg.fgp}</Td>
              <Td>{player.avg.tpp}</Td>
              <Td>{player.avg.ftp}</Td>
              <Td>{player.avg.oreb}</Td>
              <Td>{player.avg.dreb}</Td>
              <Td>{player.avg.reb}</Td>
              <Td>{player.avg.ast}</Td>
              <Td>{player.avg.stl}</Td>
              <Td>{player.avg.blk}</Td>
              <Td>{player.avg.tov}</Td>
              <Td>{player.avg.pf}</Td>
              <Td>{player.avg.pts}</Td>
          </Tr>
          ))}
    </Tbody>
  );
}


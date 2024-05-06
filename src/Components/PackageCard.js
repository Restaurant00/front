import React from 'react'
import crown from "../Assets/crown.png"
import discountIcon from "../Assets/discountIcon.png"
import lock from "../Assets/lock.png"

function PackageCard({name, percentage, userPoints , points}) {
    const unlocked = userPoints >= points;
  return (
    <div className='packageCardContainer'>
                <div className="packageBox">
                {
                    !unlocked && (<div className="packageOverlay"></div>
                    )
                }

                    {!unlocked &&(
                        <img src={lock} className="lock" alt="lock2"/>
                    ) }
                <img src={crown} className="crown" alt="crown"/>
                <div className='alert'>

                    <img src={discountIcon} className="discount--icon" alt="discount--icon1"/>
                    <h3 className="discount" alt="discount1">{percentage}%</h3>
                </div>

                </div>
                <div className="packageBox2">
                {
                    !unlocked && (
                        <div className="packageOverlay"></div>
                    )
                }
                <h3 className="level-name" alt="discount--text">Niveau {name}</h3>
                <p className='level-points'> {points} pièces</p>

                </div>
                
            </div>
  )
}

export default PackageCard

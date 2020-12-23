import React from 'react'
import PropTypes from 'prop-types'

const Result = ({score,playAgain}) => {
    return (
        <div>
            <div className="score">You scored {score}/5</div>
            <button className="playBtn" onClick={playAgain}>Play Again</button>
        </div>
    )
}

Result.propTypes = {

}

export default Result

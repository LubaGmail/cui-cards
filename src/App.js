import './App.css';
import React from 'react'

export const Images = [
  {
    front: require('./images/black-front.png'),
    back: require('./images/black-back.png'),
  },
  {
    front: require('./images/blue-front.png'),
    back: require('./images/blue-back.png'),
  },
  {
    front: require('./images/brown-front.png'),
    back: require('./images/brown-back.png'),
  },
  {
    front: require('./images/purple-front.png'),
    back: require('./images/purple-back.png'),
  },
  {
    front: require('./images/red-front.png'),
    back: require('./images/red-back.png'),
  },
];

const numOfCards = Images.length - 1

const App = () => {

    return (
      <div>
        <h3>Render Images from the local folder</h3> 

        <Cards />

      </div>

    )
}

const Cards = () => {
  const [img, setImg] = React.useState(Images[0].front)
  const [orientation, setOrientation] = React.useState('front')
  const [index, setIndex] = React.useState(0)
  
  const handleImageClick = (event) => {
    if (orientation === 'front') {
      setImg(Images[0].back)
      setOrientation('back')
    } else {
      setImg(Images[0].front)
      setOrientation('front')
    }
  }

  const handleForwardClick = (event) => {
    let i = index + 1
    setImg(Images[i].front)
    setIndex(i)
    setOrientation('front')
  }

  const handleBackClick = (event) => {
    console.log('handleBackClick', event)
    let i = index - 1
    setImg(Images[i].front)
    setIndex(i)
    setOrientation('front')
  }

  return (
    <div>
      <h3>Cards</h3> 
      {img} |  {orientation} |  {index}
   
      <Card img={img} 
        handleImageClick={handleImageClick} 
        handleForwardClick={handleForwardClick}
        handleBackClick={handleBackClick}
        index={index}
      />

    </div>
  )
}

const Card = ({img, handleImageClick, handleForwardClick, handleBackClick, index}) => {
    const onClickImage = (event) => {
      handleImageClick(event)
    }

    const onClickForward = (event) => {
      handleForwardClick(event)
    }

    const onClickBack = (event) => {
      handleBackClick(event)      
    }

    return (
      <div>
        <h3>Card</h3>
        
        <table cellPadding="25">
          <thead>
            <tr>
              <th><button onClick={onClickBack} disabled={0 === index}>Back</button></th>
              <th onClick={onClickImage}> <img src={img} /></th>
              <th><button onClick={onClickForward} disabled={numOfCards === index}>Forward</button></th>
            </tr>
          </thead>

        </table>

      </div>
    )
}

export default App;

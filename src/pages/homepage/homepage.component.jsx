import React from 'react';

import Navbar from '../../component/navbar/navbar.component';
import Intro from './../../component/intro/intro.component';
import GameImages from './../../component/game-images/game-images.component';
import Footer from './../../component/footer/footer.component';

import images from './../../data/imagesData';
import { changeElementPosition, arrToObj } from './../../utils/change-element-position';

import './homepage.styles.scss';

class HomePage extends React.Component {
    state = {
    images: [],
    clickedImageIds: [],
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ images: changeElementPosition(arrToObj(images))});
  }
  handleImageClick = (event) => {
    this.setState({ images: changeElementPosition(this.state.images)});
    let index = event.target.dataset.id;
    if(!this.state.clickedImageIds.includes(index)) {
      this.setState({
        clickedImageIds: [...this.state.clickedImageIds, index],
        score: this.state.score + 1
      }, () => {
        if(this.state.topScore < this.state.score) this.setState({ topScore: this.state.score})
      })
    } else this.setState({ score: 0 , clickedImageIds: []});
  };

  render() {
    const { images, score, topScore } = this.state;
    return (
      <div className="home-page">
        <Navbar />
        <Intro score={score} topScore={topScore} />
        <GameImages images={images} handleImageCLick={this.handleImageClick} />
        <Footer />
      </div>
      )
  }
}

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import concept_art from '../images/concept_art.png';
import Header from '../objects/Header';

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />

            <div id='title-background'>
                <div className='vertical-center'>
                    <div className='title-text fade-in'>
                        Game Development Club
                    </div>
                    <div className='subtitle-text fade-in white'>
                        Making Games at Franklin High School Since 2020
                    </div>
                    <img
                        src={concept_art}
                        width='40%'
                        height='40%'
                        className='horizontal-center gdc-artist-img box-shadow gradient-outline fade-in'
                        alt='Art Sample'
                    />
                </div>
            </div>

            <div className='information-section-header pop-text text'>
                Collaborate. Create. Learn.
            </div>

            <div id='page-content'>
                <div className='info-text--left'>
                    Be part of a growing team of developers, artists, musicians,
                    writers, and animators. Learn and collaborate with members
                    to create a quality game.{' '}
                    <span className='pop-text'>No previous</span>
                    <br />
                    <span className='pop-text'>experience needed.</span>
                </div>

                <div className='info-text--right'>
                    Learn all the skills you need to become a successful
                    contributor to our projects at Game Development Club.{' '}
                    <span className='pop-text'>
                        No paid applications or licenses
                    </span>{' '}
                    are needed to be a successful person in the game development
                    industry.
                </div>

                <div className='info-text--left'>
                    Express your creative ideas to the drawing board. If you
                    have an idea for a game, let it out at Game Development
                    Club's meetings! <span className='pop-text'>All</span>
                    <br />
                    <span className='pop-text'>ideas are welcome</span> as long
                    as they are school appropriate.
                </div>
            </div>

            <div id='purple-gradient' />

            <div className='subtitle-text'>Join Game Development Club</div>
            <div className='text horizontal-text-center'>
                Ready to be a part of Game Development Club? Join in a few
                simple steps!
            </div>

            <Link
                to='join-gdc'
                className='header-button-join-now--large horizontal-center'
            >
                Join GDC
            </Link>
        </div>
    );
};

export default Homepage;

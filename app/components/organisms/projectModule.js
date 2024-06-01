import ContentfulImage from "@/lib/contentful-image";
import style from '../../styles/modules/_project.module.scss';
import LargeLayout from '../layouts/LargeLayout';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class ProjectModule extends Component {
  render() {
    let data = Array.from(this.props.items);
    let carousel = Array.from(this.props.images);
    let section = null,
      className = '';

    if (this.props.className !== undefined) {
      className = this.props.className;
    }
    section = (
      <LargeLayout>
        <div className={style['project--details--container']}>
          {data.map((item, index) => {
            return (
              <div key={index} className={style['article--heading']}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
          <div className="content--details--wrapper">
            {data.map((item, index) => {
              return (
                <ul className={style['project--info--wrapper']}>
                  <div>
                    <li className={style['project--info']} key={index}>
                      <div className="caption">PROJECT TYPE:&nbsp; </div>{' '}
                      {item.type}
                    </li>
                    <li className={style['project--info']} key={index}>
                      <div className="caption">LOCATION:&nbsp; </div>
                      {item.location}
                    </li>
                  </div>
                  <div>
                    <li className={style['project--info']} key={index}>
                      <div className="caption">DATE:&nbsp; </div>
                      {item.date}
                    </li>
                    <li className={style['project--info']} key={index}>
                      <div className="caption">SERVICE:&nbsp; </div>
                      {item.service}
                    </li>
                  </div>
                </ul>
              );
            })}
            <div className="image--content--wrapper">
              <Carousel>
                {carousel.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={style['image--contain']}>
                        <ContentfulImage src={item.image}></ContentfulImage>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </LargeLayout>
    );
    return section;
  }
}

export default ProjectModule;

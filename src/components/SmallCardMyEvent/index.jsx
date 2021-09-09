import React from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import ImgDummy from '../../img/cardImgDummy.jpeg'
import moment from 'moment'

function SmallCardMyEvent(props) {
    const { title, image, action, dateTime } = props;
    return (
        <>
            <Card onClick={action} className="smallcard mx-1 sizeCard mt-2" style={{ minWidth: '16rem' }}>
                <Card.Img className="sizeImage" variant="top" src={image ? `https://crowdfinder.gabatch13.my.id/api${image}` : ImgDummy} />
                <Card.Body>
                    <h6 className="font mb-3" style={{ fontSize: '14px', fontWeight: '700' }}>{title}</h6>
                    <div className="mx-2 d-flex dateTime">
                        <div className="flex-grow-1">
                            <i className="iconColor fa fa-calendar me-3"></i>
                            <label>
                                {moment(dateTime).calendar()}
                            </label>
                        </div>
                        <div>
                            <i className="iconColor fa  fa-clock-o me-3"></i>
                            <label>   {moment(dateTime).format("LT")}</label>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default SmallCardMyEvent

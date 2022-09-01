import React, {useContext, useEffect, useState} from "react";
import {IframeContextContext} from "../App";

const jwt = require("jsonwebtoken");

const METABASE_SITE_URL = "http://167.71.234.32:3000";
const METABASE_SECRET_KEY = "68a529116afd75d19c1d625133ea50207a6571d5e786a25a24c14f61555886b5";
const QuestionWithIframeProtected = ({
                                         questionId,
                                         height,
                                         width,
                                         params
                                     }: { questionId: any, height?: string, width?: string, params?: any }) => {
    const {hasFirstIframeLoaded, updateHasFirstIframeLoaded} = useContext(IframeContextContext);
    const [load, setLoad] = useState(false);
    const [url, setUrl] = useState('');
    const generateUrl = () => {
        const payload = {
            resource: {question: questionId},
            params: params || {},
            exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
        };
        if (questionId == 75) {
            console.log(payload)
        }
        const token = jwt.sign(payload, METABASE_SECRET_KEY);

        setUrl(METABASE_SITE_URL + "/embed/question/" + token + "#bordered=false&titled=false&downloadable=true");
    }
    useEffect(() => {
        if (questionId) {
            generateUrl();
        }
    }, [questionId])

    useEffect(() => {
        if (!hasFirstIframeLoaded && !localStorage.getItem('hasFirstIframeLoaded')) {
            setLoad(true);
        } else if (hasFirstIframeLoaded) {
            setLoad(true);
        }
    }, [hasFirstIframeLoaded,]);
    if (!url) {
        return <div>
            Not Authenticated, Please check if embed is enabled for this Object
        </div>
    }


    if (!load) {
        return <div style={{
            width: width || '100%',
            height: height || "300px"
        }}>
            Not Loading
        </div>
    }
    return <iframe
        src={url}
        onLoad={
            () => {
                setTimeout(() => {
                    updateHasFirstIframeLoaded(true);
                }, 300)
            }
        }
        frameBorder="0"
        width={width || '100%'}
        height={height || "300px"}
        allowTransparency
    />
}
const QuestionWithIframe = ({
                                questionId,
                                height,
                                width,
                                params
                            }: { questionId: any, height?: string, width?: string, params?: any }) => {
    return <QuestionWithIframeProtected
        questionId={questionId}
        height={height}
        width={width}
        params={params}
    />
}
export default QuestionWithIframe
